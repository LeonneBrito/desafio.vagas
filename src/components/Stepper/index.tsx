import styles from './styles.module.scss'

interface StepperProps {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Stepper({ value, onChange }: StepperProps) {
  return (
    <div className={styles.stepper}>
      <button type="button" className={styles.stepperButton}>
        -
      </button>
      <input
        type="number"
        className={styles.stepperInput}
        value={value}
        onChange={onChange}
      />
      <button type="button" className={styles.stepperButton}>
        +
      </button>
    </div>
  )
}
