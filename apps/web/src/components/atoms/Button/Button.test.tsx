import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children and responds to click', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Login</Button>)

    const button = screen.getByRole('button', { name: 'Login' })
    expect(button).toBeInTheDocument()

    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies the disabled state', () => {
    render(<Button disabled>Login</Button>)
    expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled()
  })
})
