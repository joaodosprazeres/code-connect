import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders and accepts typed input', async () => {
    render(<Input aria-label="Email ou usuário" placeholder="usuario123" />)

    const input = screen.getByLabelText('Email ou usuário')
    await userEvent.type(input, 'joao@example.com')

    expect(input).toHaveValue('joao@example.com')
  })
})
