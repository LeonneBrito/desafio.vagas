import type { ReactNode } from 'react'

import styles from './styles.module.scss'

interface QuestionProps {
  title: string
  children: ReactNode
}

export default function Question({ title, children }: QuestionProps) {
  return (
    <div className={styles.questions}>
      <span>{title}</span>
      {children}
    </div>
  )
}
