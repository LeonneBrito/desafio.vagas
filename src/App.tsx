import { useState } from 'react'

import Checkbox from './components/Checkbox'
import Footer from './components/Footer'
import Header from './components/Header'

import styles from './styles/Home.module.scss'
import Textarea from './components/Textarea'

export default function App() {
  const [text, setText] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target

    if (checked) {
      setSelectedOptions([...selectedOptions, value])
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value))
    }
  }

  return (
    <section className="box">
      <Header />
      <form className={styles.form}>
        <div className={styles.questions}>
          <span>Quais stickers?</span>
          <div className={styles.options}>
            <Checkbox
              checked={selectedOptions.includes('react')}
              label="React"
              name="react"
              value="react"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <Checkbox
              checked={selectedOptions.includes('vue')}
              label="Vue"
              name="vue"
              value="vue"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <Checkbox
              checked={selectedOptions.includes('angular')}
              label="Angular"
              name="angular"
              value="angular"
              onChange={(e) => handleCheckboxChange(e)}
            />
          </div>
        </div>
        <div className={styles.questions}>
          <span>Quantos stickers de cada?</span>
        </div>
        <div className={styles.questions}>
          <span>Observações:</span>
          <Textarea
            name="observations"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </form>
      <Footer />
    </section>
  )
}
