import { useTheme } from '../../contexts/ThemeContext'

import { Moon, Sun } from 'phosphor-react'

import styles from './styles.module.scss'

export default function Toggle() {
  const { state, handleToggleTheme } = useTheme()

  return (
    <div
      className={`${styles.toggle} ${
        state.theme === 'light' ? styles.on : styles.off
      }`}
      onClick={handleToggleTheme}
    >
      <div
        className={`${styles.handle} ${
          state.theme === 'light' ? styles.on : styles.off
        }`}
      >
        {state.theme === 'light' ? (
          <Sun size={18} color="#f1c40f" />
        ) : (
          <Moon size={18} color="#34495e" />
        )}
      </div>
    </div>
  )
}
