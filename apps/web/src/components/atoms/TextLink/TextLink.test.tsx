import { render, screen } from '@testing-library/react'
import { TextLink } from './TextLink'

describe('TextLink', () => {
  it('renders as a link pointing to the given href', () => {
    render(<TextLink href="/cadastro">Crie seu cadastro!</TextLink>)
    expect(screen.getByRole('link', { name: 'Crie seu cadastro!' })).toHaveAttribute(
      'href',
      '/cadastro',
    )
  })

  it('applies the accent variant styling', () => {
    render(
      <TextLink variant="accent" href="/cadastro">
        Crie seu cadastro!
      </TextLink>,
    )
    expect(screen.getByRole('link')).toHaveClass('text-verde-destaque')
  })
})
