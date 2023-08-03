import { Plus, Minus } from 'phosphor-react'
import styles from './styles.module.scss'

interface StepperProps {
  value: number
  minValue?: number
  maxValue?: number
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | number,
    min?: number,
    max?: number,
  ) => void
}

export default function Stepper({
  value,
  onChange,
  maxValue = 100,
  minValue = 0,
}: StepperProps) {
  return (
    <div
      className={styles.stepper}
      role="region"
      aria-label={`Stepper: ${value}`}
    >
      <button
        type="button"
        className={styles.stepperButton}
        aria-label="Diminuir valor"
        onClick={() => onChange(value - 1, minValue, maxValue)}
        disabled={value === minValue}
        data-testid="quantity-decrement"
        aria-disabled={value === minValue}
      >
        <Minus size={24} weight="bold" />
      </button>
      <input
        type="number"
        className={styles.stepperInput}
        value={value}
        aria-label="Quantidade de stickers"
        onChange={(e) => onChange(e, minValue, maxValue)}
        min={minValue}
        max={maxValue}
      />
      <button
        type="button"
        className={styles.stepperButton}
        aria-label="Aumentar valor"
        onClick={() => onChange(value + 1, minValue, maxValue)}
        disabled={value === maxValue}
        data-testid="quantity-increment"
        aria-disabled={value === maxValue}
      >
        <Plus size={24} weight="bold" />
      </button>
    </div>
  )
}
