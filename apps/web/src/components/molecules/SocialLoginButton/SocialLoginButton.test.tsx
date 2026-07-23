import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialLoginButton } from './SocialLoginButton'

describe('SocialLoginButton', () => {
  it('renders the label and responds to click', async () => {
    const onClick = vi.fn()
    render(<SocialLoginButton icon="/github.svg" label="Github" onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'Github' })
    await userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
