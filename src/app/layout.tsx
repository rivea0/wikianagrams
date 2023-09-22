import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import ThemeProvider from './components/theme-provider'
const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://wikianagrams.vercel.app'),
  title: 'WikiAnagrams',
  description: 'Find anagrams from Wiktionary',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} text-san-marino-950 bg-slate-50 h-screen flex flex-col dark:bg-slate-950 dark:text-white`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
