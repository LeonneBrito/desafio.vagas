import Button from '../Button'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Formulário enviado com sucesso!</span>
      <Button type="submit" aria-label="Enviar formulário">
        Enviar
      </Button>
    </footer>
  )
}
