import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders its label and toggles checked state on click', async () => {
    render(<Checkbox label="Lembrar-me" />)

    const checkbox = screen.getByRole('checkbox', { name: 'Lembrar-me' })
    expect(checkbox).not.toBeChecked()

    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
