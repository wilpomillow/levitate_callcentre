"use client"

import * as React from "react"

export type ThemeMode = "light" | "dark"

const THEME_KEY = "levitate-theme"

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (t: ThemeMode) => void
  toggle: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function applyThemeToDom(next: ThemeMode) {
  document.documentElement.classList.toggle("dark", next === "dark")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<ThemeMode>("light")

  React.useEffect(() => {
    const stored = sessionStorage.getItem(THEME_KEY)
    const next: ThemeMode = stored === "dark" ? "dark" : "light"
    setThemeState(next)
    applyThemeToDom(next)
  }, [])

  const setTheme = (t: ThemeMode) => {
    setThemeState(t)
    sessionStorage.setItem(THEME_KEY, t)
    applyThemeToDom(t)
  }

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark")

  return <ThemeContext.Provider value={{ theme, setTheme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
