import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PatientProvider } from './shared/context/PatientContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PatientProvider>
      <App />
    </PatientProvider>
  </React.StrictMode>,
)
