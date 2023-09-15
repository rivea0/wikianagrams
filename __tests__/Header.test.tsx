import { render, screen } from '@testing-library/react'
import Header from '@/app/components/header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)
  })

  it('shows heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: 'WikiAnagrams' })).toBeInTheDocument()
  })


})