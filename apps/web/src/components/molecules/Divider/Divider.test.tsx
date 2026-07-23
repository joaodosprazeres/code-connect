import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders its label text between the rule lines', () => {
    render(<Divider>ou entre com outras contas</Divider>)
    expect(screen.getByText('ou entre com outras contas')).toBeInTheDocument()
  })
})
