import { useMemo } from 'react'

export function useDarkMode() {
  return useMemo(() => {
    return document.documentElement.classList.contains('dark')
  }, [])
}