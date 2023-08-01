import { useState } from 'react'

import Checkbox from './components/Checkbox'
import Textarea from './components/Textarea'
import Stepper from './components/Stepper'

import styles from './styles/Home.module.scss'

export default function App() {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<number>(0)
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
        <Stepper
          minValue={0}
          maxValue={100}
          value={value}
          setValue={setValue}
          onChange={(e) => setValue(Number(e.target.value))}
        />
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
  )
}
