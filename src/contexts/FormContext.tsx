/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react'
import { ISticker } from '../types'

interface IFormState {
  stickers: ISticker[]
  quantity: number
  observations: string
}

interface FormProviderProps {
  children: ReactNode
}

const initialState = {
  stickers: [] as ISticker[],
  quantity: 0,
  observations: '',
}

type FormAction =
  | { type: 'ADD_STICKER'; sticker: ISticker }
  | { type: 'REMOVE_STICKER'; sticker: ISticker }
  | { type: 'SET_QUANTITY'; quantity: number }
  | { type: 'SET_OBSERVATIONS'; observations: string }
  | { type: 'RESET_FORM' }

const formReducer = (state: IFormState, action: FormAction): IFormState => {
  switch (action.type) {
    case 'ADD_STICKER':
      return { ...state, stickers: [...state.stickers, action.sticker] }
    case 'REMOVE_STICKER':
      return {
        ...state,
        stickers: state.stickers.filter(
          (sticker) => sticker.value !== action.sticker.value,
        ),
      }
    case 'SET_QUANTITY':
      return { ...state, quantity: action.quantity }
    case 'SET_OBSERVATIONS':
      return { ...state, observations: action.observations }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

const FormContext = createContext<{
  state: IFormState
  dispatch: Dispatch<FormAction>
}>({
  state: initialState,
  dispatch: () => null,
})

const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
