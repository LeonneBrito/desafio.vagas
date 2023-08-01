import { useState } from 'react'

import Stepper from './components/Stepper'
import Checkbox from './components/Checkbox'
import Textarea from './components/Textarea'
import Question from './components/Question'

import styles from './styles/Home.module.scss'

import { stickerOptions } from './lib/stickerOptions'

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
    <form
      className={styles.form}
      onSubmit={() => console.log('Teste')}
      aria-label="Formulário de compra de stickers"
    >
      <Question title="Quais stickers?">
        <div className={styles.options}>
          {stickerOptions.map((option) => (
            <Checkbox
              key={option.value}
              checked={selectedOptions.includes(option.value)}
              label={option.label}
              name={option.value}
              value={option.value}
              onChange={(e) => handleCheckboxChange(e)}
            />
          ))}
        </div>
      </Question>
      <Question title="Quantos stickers de cada?">
        <Stepper
          minValue={0}
          maxValue={100}
          value={value}
          setValue={setValue}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </Question>
      <Question title="Observações:">
        <Textarea
          name="observations"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Question>
    </form>
  )
}
