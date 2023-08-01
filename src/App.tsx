import { ChangeEvent } from 'react'
import { useFormContext } from './contexts/FormContext'

import Stepper from './components/Stepper'
import Checkbox from './components/Checkbox'
import Textarea from './components/Textarea'
import Question from './components/Question'

import styles from './styles/Home.module.scss'

import { stickerOptions } from './lib/stickerOptions'

export default function App() {
  const { state, dispatch } = useFormContext()

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_QUANTITY', quantity: Number(e.target.value) })
  }

  const handleChangeObservations = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch({ type: 'SET_OBSERVATIONS', observations: e.target.value })
  }

  const handleChangeStickers = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target
    if (checked) {
      dispatch({ type: 'ADD_STICKER', sticker: { value, label: name } })
    } else {
      dispatch({ type: 'REMOVE_STICKER', sticker: { value, label: name } })
    }
  }

  return (
    <form className={styles.form} aria-label="Formulário de compra de stickers">
      <Question title="Quais stickers?">
        <div className={styles.options}>
          {stickerOptions.map((option) => (
            <Checkbox
              key={option.value}
              checked={state.stickers.some(
                (sticker) => sticker.value === option.value,
              )}
              label={option.label}
              name={option.label}
              value={option.value}
              onChange={handleChangeStickers}
            />
          ))}
        </div>
      </Question>
      <Question title="Quantos stickers de cada?">
        <Stepper
          minValue={0}
          maxValue={100}
          value={state.quantity}
          setValue={(value) =>
            dispatch({ type: 'SET_QUANTITY', quantity: value })
          }
          onChange={handleChangeQuantity}
        />
      </Question>
      <Question title="Observações:">
        <Textarea
          name="observations"
          onChange={handleChangeObservations}
          value={state.observations}
        />
      </Question>
    </form>
  )
}
