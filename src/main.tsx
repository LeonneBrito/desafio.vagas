import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import Providers from './providers/index.tsx'
import RootLayout from './layouts/RootLayout.tsx'

import './styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RootLayout>
        <App />
      </RootLayout>
    </Providers>
  </React.StrictMode>,
)
