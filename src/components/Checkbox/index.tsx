import { ChangeEvent } from 'react'

import styles from './styles.module.scss'

interface CheckboxProps {
  label: string
  name: string
  value: string
  checked: boolean
  disabled?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
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
        disabled={disabled}
      />
      <span className={styles.checkmark} />
      {label}
    </label>
  )
}
