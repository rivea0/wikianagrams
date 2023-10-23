import { render, screen } from '@testing-library/react'
import AnagramList from '@/app/components/anagram-list'

const resultOne = [{
  text: 'argaman',
  link: 'https://en.wiktionary.org/wiki/argaman#English'
}]

const resultTwo = [
  {
    text: 'Trewin',
    link: 'https://en.wiktionary.org/wiki/Trewin#English'
  },
  {
    text: 'twiner',
    link: 'https://en.wiktionary.org/wiki/twiner#English'
  }
]

describe('AnagramList', () => {
  it('renders', () => {
    render(<AnagramList anagrams={[]} />)
  })

  it('shows nothing when there are no anagrams', () => {
    render(<AnagramList anagrams={[]} />)
    expect(screen.getByTestId('anagrams')).toBeEmptyDOMElement()
  })

  it('shows one anagram', () => {
    render(<AnagramList anagrams={resultOne} />)

    expect(screen.getByRole('link', { name: 'argaman' })).toBeInTheDocument()
  })

  it('shows multiple anagrams', () => {
    render(<AnagramList anagrams={resultTwo} />)

    expect(screen.getByRole('link', { name: 'Trewin' }))
      .toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'twiner' }))
      .toBeInTheDocument()
  })
})
