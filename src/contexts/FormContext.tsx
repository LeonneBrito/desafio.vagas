/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react'
import { ISticker, ISubmit } from '../types'

interface IFormState {
  stickers: ISticker[]
  quantity: number
  observations: string
  loading: boolean
  submit: ISubmit
}

interface FormProviderProps {
  children: ReactNode
}

const initialState: IFormState = {
  stickers: [],
  quantity: 0,
  observations: '',
  loading: false,
  submit: {
    success: false,
    message: '',
  },
}

type FormAction =
  | { type: 'ADD_STICKER'; sticker: ISticker }
  | { type: 'REMOVE_STICKER'; sticker: ISticker }
  | { type: 'SET_QUANTITY'; quantity: number }
  | { type: 'SET_OBSERVATIONS'; observations: string }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SUBMIT'; success: boolean; message: string }
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
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_OBSERVATIONS':
      return { ...state, observations: action.observations }
    case 'SUBMIT':
      return {
        ...state,
        submit: { success: action.success, message: action.message },
      }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

const FormContext = createContext<{
  state: IFormState
  dispatch: Dispatch<FormAction>
  handleSubmit: () => void
  handleReset: () => void
}>({
  state: initialState,
  dispatch: () => null,
  handleSubmit: () => null,
  handleReset: () => null,
})

const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleSubmit = async () => {
    if (state.stickers.length === 0 || state.quantity === 0) {
      dispatch({
        type: 'SUBMIT',
        success: false,
        message: 'Por favor, selecione pelo menos um adesivo e uma quantidade.',
      })
      return
    }

    dispatch({ type: 'SET_LOADING', loading: true })

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 2000))
      dispatch({ type: 'SET_LOADING', loading: false })
      dispatch({
        type: 'SUBMIT',
        success: true,
        message: 'Formulário enviado com sucesso!',
      })
      await new Promise<void>((resolve) => setTimeout(resolve, 1000))
      dispatch({ type: 'RESET_FORM' })
    } catch (error) {
      console.error('Error occurred:', error)
    }
  }

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' })
  }

  return (
    <FormContext.Provider
      value={{ state, dispatch, handleSubmit, handleReset }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
