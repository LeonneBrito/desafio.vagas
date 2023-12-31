import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span aria-label="Formulário para compra de Pacote de Stickers">
          Formulário
          <br />
          para compra de
          <br />
          <b>Pacote de Stickers</b>
        </span>
      </div>
    </header>
  )
}
