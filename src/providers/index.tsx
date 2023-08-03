import { PropsWithChildren } from 'react'

import { FormProvider } from '../contexts/FormContext'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <FormProvider>{children}</FormProvider>
    </ThemeProvider>
  )
}
