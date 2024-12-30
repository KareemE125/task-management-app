import { useEffect, useState } from "react"
import { STORAGE_THEME_DARK_VALUE, STORAGE_THEME_KEY, STORAGE_THEME_LIGHT_VALUE } from "@/global/constants"

export default function useTheme(): ['dark' | 'light', () => void] {
  const [darkTheme, setDarkTheme] = useState<boolean>(true)  

  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_THEME_KEY)
    if (theme === STORAGE_THEME_LIGHT_VALUE) {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  }, [])
  
  
  const toggleTheme = () => {
    if (darkTheme) {
      document.documentElement.classList.remove(STORAGE_THEME_DARK_VALUE)
      localStorage.setItem(STORAGE_THEME_KEY, STORAGE_THEME_LIGHT_VALUE)
    } else {
      document.documentElement.classList.add(STORAGE_THEME_DARK_VALUE)
      localStorage.setItem(STORAGE_THEME_KEY, STORAGE_THEME_DARK_VALUE)
    }
    setDarkTheme(!darkTheme)
  }

  return [darkTheme ? 'dark' : 'light', toggleTheme]
}