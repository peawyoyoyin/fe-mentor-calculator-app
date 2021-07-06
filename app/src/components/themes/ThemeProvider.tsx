import React, { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { useContext } from "react";

type Theme = 0 | 1 | 2;
interface ThemeContextValue {
  theme: Theme;
  cycleTheme: (() => void) | undefined;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 0,
  cycleTheme: undefined
});

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: React.PropsWithChildren<unknown>) {
  const [theme, setTheme] = useState<Theme>(0);
  const cycleTheme = useCallback(() => setTheme(theme => (theme + 1) % 3 as Theme), [])

  return (
    <ThemeContext.Provider value={{
      theme,
      cycleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
