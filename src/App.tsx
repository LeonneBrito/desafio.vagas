import Checkbox from './components/Checkbox'
import Footer from './components/Footer'
import Header from './components/Header'

import styles from './styles/Home.module.scss'

export default function App() {
  return (
    <section className="box">
      <Header />
      <form className={styles.form}>
        <div className={styles.questions}>
          <span>Quais stickers?</span>
          <div className={styles.options}>
            <Checkbox
              checked={true}
              label="React"
              name="react"
              onChange={() => {}}
              value="react"
            />
            <Checkbox
              checked={true}
              label="Vue"
              name="vue"
              onChange={() => {}}
              value="vue"
            />
            <Checkbox
              checked={true}
              label="Angular"
              name="angular"
              onChange={() => {}}
              value="angular"
            />
          </div>
        </div>
        <div className={styles.questions}>
          <span>Quantos stickers de cada?</span>
        </div>
        <div className={styles.questions}>
          <span>Observações:</span>
        </div>
      </form>
      <Footer />
    </section>
  )
}
