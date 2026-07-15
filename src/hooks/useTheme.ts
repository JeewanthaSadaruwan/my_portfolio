import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const storageKey = 'portfolio-theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  let storedTheme: string | null

  try {
    storedTheme = window.localStorage.getItem(storageKey)
  } catch {
    return 'dark'
  }
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.dataset.theme = theme
    root.classList.toggle('dark', theme === 'dark')
    try {
      window.localStorage.setItem(storageKey, theme)
    } catch {
      // Keep the selected theme active even when storage is unavailable.
    }
  }, [theme])

  return {
    theme,
    toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
  }
}
