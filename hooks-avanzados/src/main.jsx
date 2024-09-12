import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AplicacionPrincipal } from './AplicacionPrincipal'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AplicacionPrincipal/>
  </StrictMode>,
)
