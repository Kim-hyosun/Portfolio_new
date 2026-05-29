import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getInitialDark(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(STORAGE_KEY) === 'dark'
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark)

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev
      window.localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
      return next
    })
  }

  return { isDark, toggle }
}
