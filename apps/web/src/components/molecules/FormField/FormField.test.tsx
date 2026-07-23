import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormField } from './FormField'

describe('FormField', () => {
  it('links the label to the input and forwards typed values', async () => {
    render(<FormField label="Email ou usuário" placeholder="usuario123" />)

    const input = screen.getByLabelText('Email ou usuário')
    await userEvent.type(input, 'joao@example.com')

    expect(input).toHaveValue('joao@example.com')
  })

  it('renders an error message when provided', () => {
    render(<FormField label="Senha" error="Campo obrigatório" />)
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })
})
