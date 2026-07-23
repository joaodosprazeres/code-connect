import { render, screen } from '@testing-library/react'
import { Label } from './Label'

describe('Label', () => {
  it('renders its text and links to the given input via htmlFor', () => {
    render(<Label htmlFor="email">Email ou usuário</Label>)
    expect(screen.getByText('Email ou usuário')).toHaveAttribute('for', 'email')
  })
})
