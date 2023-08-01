import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import RootLayout from './layouts/RootLayout.tsx'
import { FormProvider } from './contexts/FormContext.tsx'

import './styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <RootLayout>
        <App />
      </RootLayout>
    </FormProvider>
  </React.StrictMode>,
)
