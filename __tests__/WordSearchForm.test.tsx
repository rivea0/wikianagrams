import { render, screen } from '@testing-library/react'
import WordSearchForm from '@/app/components/word-search-form'
import userEvent from '@testing-library/user-event'

const mockOnSubmitData = vi.fn()

afterAll(() => {
  vi.restoreAllMocks()
})

describe('WordSearchForm', () => {
  it('renders', () => {
    render(<WordSearchForm onSubmitData={mockOnSubmitData({ word: 'anagram' })} />)
  })

  it('requires input', () => {
    render(<WordSearchForm onSubmitData={mockOnSubmitData({ word: 'anagram' })} />)
    const input = screen.getByLabelText('Search')
    expect(input).toBeRequired()
  })

  it('calls the correct function on submitting form', () => {
    render(<WordSearchForm onSubmitData={mockOnSubmitData({ word: 'anagram' })} />)
    const user = userEvent.setup()

    const submitBtn = screen.getByRole('button', { name: 'Find anagrams' })
    user.click(submitBtn)

    expect(mockOnSubmitData).toHaveBeenCalledWith({ word: 'anagram' })
  })
})
