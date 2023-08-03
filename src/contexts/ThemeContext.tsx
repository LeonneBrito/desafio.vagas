/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  PropsWithChildren,
  Dispatch,
} from 'react'
import { Theme, ThemeAction } from '../types/'

type ThemeState = {
  theme: Theme
}

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme ? (savedTheme as Theme) : 'light'
}

const initialThemeState: ThemeState = {
  theme: getInitialTheme(),
}

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    default:
      return state
  }
}

const ThemeContext = createContext<{
  state: ThemeState
  dispatch: Dispatch<ThemeAction>
  handleToggleTheme: () => void
}>({
  state: initialThemeState,
  dispatch: () => null,
  handleToggleTheme: () => null,
})
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState)

  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [state.theme])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const handleToggleTheme = () => {
    toggleDarkMode()
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <ThemeContext.Provider value={{ state, dispatch, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
