'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeSwitcher from './theme-switcher'

export default function Header() {
  const [toggle, setToggle] = useState(true)

  function handle() {
    setToggle(prevToggle => !prevToggle)
  }
  
  /* Navbar adapted from https://tailwindcomponents.com/component/responsive-tailwind-css-navbar-1 */
  return (
    <>
      <nav className="mb-10 mt-2">
        <div className="w-full mx-auto">
          <div className="mx-2 flex flex-wrap items-center justify-between">
            <Link href="/" className="flex">
              <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-10 mr-3" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                  <path fill="#3F72AF" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                  <path d="M8.004 4.823c.323-.874 1.064-1.577 2.033-1.577c1.007 0 1.71.665 2.033 1.577l3.724 10.334c.114.304.152.57.152.703c0 .741-.608 1.253-1.311 1.253c-.798 0-1.197-.417-1.387-.988l-.57-1.786H7.396l-.57 1.767c-.19.589-.589 1.007-1.368 1.007c-.76 0-1.406-.57-1.406-1.33c0-.304.095-.532.133-.627L8.004 4.823zm.209 6.896h3.609L10.055 6.21h-.038l-1.804 5.509zm2.841 7.527c1.387 0 4.084.456 4.084 2.127c0 .685-.475 1.274-1.178 1.274c-.779 0-1.311-.665-2.907-.665c-2.355 0-3.571 1.995-3.571 4.312c0 2.261 1.235 4.198 3.571 4.198c1.596 0 2.242-.798 3.02-.798c.855 0 1.254.856 1.254 1.292c0 1.823-2.869 2.241-4.274 2.241c-3.856 0-6.535-3.059-6.535-6.99c.001-3.952 2.66-6.991 6.536-6.991zm9.348-14.347c0-.912.627-1.425 1.5-1.425h3.648c1.976 0 3.571 1.33 3.571 3.343c0 1.33-.551 2.223-1.767 2.792v.038c1.615.228 2.888 1.577 2.888 3.229c0 2.679-1.785 4.123-4.407 4.123h-3.913c-.874 0-1.52-.551-1.52-1.444V4.899zm2.85 3.932h1.48c.932 0 1.539-.551 1.539-1.5c0-.893-.703-1.349-1.539-1.349h-1.48v2.849zm0 5.661h2.241c1.026 0 1.786-.589 1.786-1.652c0-.893-.685-1.501-2.014-1.501h-2.014v3.153zm-3.354 6.446c0-.875.608-1.463 1.463-1.463h3.153c4.255 0 6.687 2.735 6.687 6.952c0 3.989-2.583 6.573-6.496 6.573h-3.307c-.627 0-1.5-.342-1.5-1.425V20.938zm2.85 9.44h1.918c2.451 0 3.572-1.805 3.572-4.084c0-2.432-1.141-4.198-3.762-4.198h-1.729v8.282z" fill="#FFF"/>
                </g>
              </svg>
              <span className="self-center text-lg font-semibold whitespace-nowrap"><h1>WikiAnagrams</h1></span>
            </Link>
            {/* <Link href="/about" className="text-slate-900 block pl-3 pr-4 py-2 rounded">About</Link> */}
            <div className="flex md:hidden md:order-2" data-testid="mobile-menu">
              <button data-collapse-toggle="mobile-menu-3" type="button"
                className="md:hidden text-gray-400 focus:outline-none focus:ring-2 focus:ring-san-marino-300 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu-3" aria-expanded="false" onClick={handle} data-testid="menu-btn">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className={`${toggle ? 'hidden' : ''} md:mr-2 md:flex justify-between items-end w-full md:w-auto md:order-1`} id="mobile-menu-3" data-testid="mobile-menu-3">
              <ul className="flex-col items-center md:flex-row flex md:gap-4 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li className='border border-slate-200 dark:border-slate-800 md:border-none w-full pl-3'>
                  <ThemeSwitcher />
                </li>
                <li className='border border-slate-200 dark:border-slate-800 md:border-none w-full'>
                  <Link href="/about" className="md:bg-transparent text-san-marino-950 dark:text-white block pl-3 pr-4 py-2 md:text-san-marino-950 md:p-0 rounded">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

