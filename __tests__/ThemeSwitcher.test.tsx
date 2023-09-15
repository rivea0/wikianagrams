import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeSwitcher from '@/app/components/theme-switcher'

describe('ThemeSwitcher', () => {
  it('renders', () => {
    render(<ThemeSwitcher />)
  })

  it('switches theme on click', async () => {
    render(<ThemeSwitcher />)
    const user = userEvent.setup()
    const btn = screen.getByRole('button')

    await user.click(btn)

    if (btn.dataset.testid === 'theme-switch-btn-light') {
      screen.getByTestId('theme-switch-btn-dark')
    } else if (btn.classList.contains('theme-switch-btn-dark')) {
      screen.getByTestId('theme-switch-btn-light')
    }    
  })
})
