import { Plus, Minus } from 'phosphor-react'

import styles from './styles.module.scss'

interface StepperProps {
  value: number
  minValue?: number
  maxValue?: number
  setValue: (value: number) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Stepper({
  value,
  setValue,
  onChange,
  maxValue = 100,
  minValue = 0,
}: StepperProps) {
  return (
    <div className={styles.stepper} aria-label={`Stepper: ${value}`}>
      <button
        type="button"
        className={styles.stepperButton}
        aria-label="Diminuir valor"
        onClick={() => value > minValue && setValue(value - 1)}
        disabled={value === minValue}
        data-testid="quantity-decrement"
      >
        <Minus size={24} weight="bold" />
      </button>
      <input
        type="number"
        className={styles.stepperInput}
        value={value}
        aria-label="Quantidade de stickers"
        onChange={onChange}
        min={minValue}
        max={maxValue}
      />
      <button
        type="button"
        className={styles.stepperButton}
        aria-label="Aumentar valor"
        onClick={() => value < maxValue && setValue(value + 1)}
        disabled={value === maxValue}
        data-testid="quantity-increment"
      >
        <Plus size={24} weight="bold" />
      </button>
    </div>
  )
}
