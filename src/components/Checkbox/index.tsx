import { ChangeEvent } from 'react'

import styles from './styles.module.scss'

interface CheckboxProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  label,
  name,
  value,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <label htmlFor={name} className={styles.checkbox}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark} />
      {label}
    </label>
  )
}
