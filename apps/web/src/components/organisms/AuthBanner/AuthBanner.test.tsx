import { render, screen } from '@testing-library/react'
import { AuthBanner } from './AuthBanner'

describe('AuthBanner', () => {
  it('renders the banner image and the CodeConnect logo', () => {
    render(<AuthBanner image="/banner.png" imageAlt="Pessoa trabalhando em cibersegurança" />)

    expect(screen.getByAltText('Pessoa trabalhando em cibersegurança')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'CodeConnect' })).toBeInTheDocument()
  })
})
