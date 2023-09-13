import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <body className={`${inter.className} text-san-marino-950 h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
