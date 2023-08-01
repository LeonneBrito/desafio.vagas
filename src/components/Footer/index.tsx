import { useFormContext } from '../../contexts/FormContext'
import Button from '../Button'
import styles from './styles.module.scss'

export default function Footer() {
  const { state, handleSubmit } = useFormContext()

  console.log({ state: state.submit })

  return (
    <footer className={styles.footer}>
      {state.loading ? (
        <span className={styles.loading}>Enviando...</span>
      ) : (
        <span
          className={`${styles.message} ${
            state.submit.success ? styles.success : styles.error
          }`}
        >
          {state.submit.message}
        </span>
      )}

      <Button
        type="submit"
        aria-label="Enviar formulário"
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </footer>
  )
}
