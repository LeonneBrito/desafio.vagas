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
    <div className={styles.stepper}>
      <button
        type="button"
        className={styles.stepperButton}
        onClick={() => value > minValue && setValue(value - 1)}
        disabled={value === minValue}
      >
        -
      </button>
      <input
        type="number"
        className={styles.stepperInput}
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
      />
      <button
        type="button"
        className={styles.stepperButton}
        onClick={() => value < maxValue && setValue(value + 1)}
        disabled={value === maxValue}
      >
        +
      </button>
    </div>
  )
}
