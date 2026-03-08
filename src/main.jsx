import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormJapan from './FormJapan.jsx'
import LazyBasic from './LazyBasic.jsx'
import LazyMulti from './LazyMulti.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FormJapan />
    <LazyBasic />
    <LazyMulti />
  </StrictMode>,
)
