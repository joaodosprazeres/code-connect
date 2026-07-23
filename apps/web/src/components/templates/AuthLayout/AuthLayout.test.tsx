import { render, screen } from '@testing-library/react'
import { AuthLayout } from './AuthLayout'

describe('AuthLayout', () => {
  it('renders the given banner and content slots', () => {
    render(
      <AuthLayout banner={<div>Banner slot</div>}>
        <div>Form slot</div>
      </AuthLayout>,
    )

    expect(screen.getByText('Banner slot')).toBeInTheDocument()
    expect(screen.getByText('Form slot')).toBeInTheDocument()
  })
})
