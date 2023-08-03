import { ChangeEvent } from 'react'

import styles from './styles.module.scss'

interface TextareaProps {
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea({ name, value, onChange }: TextareaProps) {
  return (
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={styles.textArea}
      rows={7}
      aria-label="Observações"
      role="textbox"
      data-testid="observations"
    />
  )
}
