export interface ISticker {
  value: string
  label: string
}

export interface ISubmit {
  success: boolean
  message: string
}

export type Theme = 'light' | 'dark'

export type ThemeAction = { type: 'TOGGLE_THEME' }
