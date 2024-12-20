import { render, screen } from '@testing-library/react'
import Header from '@/app/components/header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)
  });

  it('shows heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { name: 'WikiAnagrams' })
    ).toBeInTheDocument()
  });

  it('opens menu on click', async () => {
    render(<Header />)
    const user = userEvent.setup()
    const btn = screen.getByTestId('menu-btn')
    await user.click(btn)
    expect(screen.queryByTestId('mobile-menu-3')).toBeInTheDocument()
  })
})
