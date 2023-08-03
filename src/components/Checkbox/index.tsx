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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !disabled) {
      onChange(event as unknown as ChangeEvent<HTMLInputElement>)
    }
  }

  return (
    <label
      htmlFor={name}
      className={styles.checkbox}
      data-testid={`checkbox-${value}`}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
        aria-checked={checked}
        role="checkbox"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
      />
      <span className={styles.checkmark} />
      {label}
    </label>
  )
}
