import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import './styles/global.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
