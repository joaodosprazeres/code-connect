import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('renders the login form and banner together', () => {
    render(<LoginPage />)

    expect(screen.getByText('Boas-vindas! Faça seu login.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'CodeConnect' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('submits credentials entered by the user', async () => {
    const onSubmit = vi.fn()
    render(<LoginPage onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'joao@example.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo123')
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).toHaveBeenCalledWith({
      identifier: 'joao@example.com',
      password: 'segredo123',
      rememberMe: false,
    })
  })
})
