import { render, screen } from '@testing-library/react'
import { AuthHeading } from './AuthHeading'

describe('AuthHeading', () => {
  it('renders the title and subtitle', () => {
    render(<AuthHeading title="Login" subtitle="Boas-vindas! Faça seu login." />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Boas-vindas! Faça seu login.')).toBeInTheDocument()
  })
})
