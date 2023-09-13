
'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export default function ThemeProvider({ children } : { 
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect (() => { setMounted(true) }, [])

  if (!mounted) { return <>{children}</> }
  
  return (
    <NextThemeProvider enableSystem attribute='class'>
      {children}
    </NextThemeProvider>
  )
}
