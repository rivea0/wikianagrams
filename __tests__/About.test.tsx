import { render, screen } from '@testing-library/react'
import Page from '@/app/about/page'

describe('About', () => {
  it('renders', () => {
    render(<Page />)
  })

  it('shows the heading', () => {
    render(<Page />)
  
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('shows the main sentence', () => {
    render(<Page />)
    const p = screen.getByTestId('main')

    expect(p).toHaveTextContent('WikiAnagrams is a simple website where you can search for anagrams of a word, taken from its Wiktionary page.')
  })

  it('shows the link to Wiktionary', () => {
    render(<Page />)
    const link = screen.getByRole('link', {name: 'Wiktionary'})

    expect(link).toBeInTheDocument()
  })
})
