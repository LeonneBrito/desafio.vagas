import { useFormContext } from '../../contexts/FormContext'
import Button from '../Button'
import styles from './styles.module.scss'

export default function Footer() {
  const { state, handleSubmit } = useFormContext()

  return (
    <footer className={styles.footer}>
      {state.loading ? (
        <span className={styles.loading}>Enviando...</span>
      ) : (
        <span
          className={`${styles.message} ${
            state.submit.success ? styles.success : styles.error
          }`}
          data-testid="message"
        >
          {state.submit.message}
        </span>
      )}

      <Button
        type="submit"
        aria-label="Enviar formulário"
        onClick={handleSubmit}
        data-testid="submit-button"
        disabled={state.loading}
      >
        Enviar
      </Button>
    </footer>
  )
}
