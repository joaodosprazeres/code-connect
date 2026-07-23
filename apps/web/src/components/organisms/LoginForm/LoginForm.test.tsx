import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('submits the entered credentials', async () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'joao@example.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo123')
    await userEvent.click(screen.getByRole('checkbox', { name: 'Lembrar-me' }))
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).toHaveBeenCalledWith({
      identifier: 'joao@example.com',
      password: 'segredo123',
      rememberMe: true,
    })
  })

  it('renders navigation links for password recovery and sign up', () => {
    render(<LoginForm forgotPasswordHref="/esqueci-senha" signUpHref="/cadastro" />)

    expect(screen.getByRole('link', { name: 'Esqueci a senha' })).toHaveAttribute(
      'href',
      '/esqueci-senha',
    )
    expect(screen.getByRole('link', { name: 'Crie seu cadastro!' })).toHaveAttribute(
      'href',
      '/cadastro',
    )
  })
})
