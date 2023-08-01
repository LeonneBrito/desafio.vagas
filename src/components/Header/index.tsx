import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        Formulário
        <br />
        para compra de
        <br />
        <span>Pacote de Stickers</span>
      </div>
    </header>
  )
}
