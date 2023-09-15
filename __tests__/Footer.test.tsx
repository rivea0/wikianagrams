import { render, screen } from '@testing-library/react'
import Footer from '@/app/components/footer'

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />)
  })

  it('shows the icons', () => {
    render(<Footer />)
  
    expect(screen.getByTestId('icons')).toBeInTheDocument()
  })

  it('shows the copyright text', () => {
    render(<Footer />)

    expect(screen.getByTestId('end')).toBeInTheDocument()
  })
})
