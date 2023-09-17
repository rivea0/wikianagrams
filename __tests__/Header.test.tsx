import { render, screen } from '@testing-library/react'
import Header from '@/app/components/header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)
  })

  it('shows heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: 'WikiAnagrams' })).toBeInTheDocument()
  })

  /* See:
    https://github.com/testing-library/jest-dom/issues/209
  */
  // it('does not show mobile menu', async () => {
  //   render(<Header />)
  //   const mobileMenu = screen.getByTestId('mobile-menu');
  //   (global.window.innerWidth > 768)
  //   ? expect(mobileMenu).not.toBeVisible()
  //   : expect(mobileMenu).toBeVisible()
  // })

  /*
  TODO: probably a false positive
  See:
    https://github.com/testing-library/jest-dom/issues/209
  */
  it('opens menu on click', async () => {
    render(<Header />)
    const user = userEvent.setup()
    const btn = screen.getByTestId('menu-btn')
    await user.click(btn)
    expect(screen.getByTestId('mobile-menu-3')).toBeVisible()
  })
})
