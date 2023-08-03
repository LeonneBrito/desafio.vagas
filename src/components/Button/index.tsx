import type { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button} role="button" tabIndex={0}>
      {children}
    </button>
  )
}
