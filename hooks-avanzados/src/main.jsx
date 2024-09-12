import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ListaUsuarios } from './components/ListaUsuarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaUsuarios />
  </StrictMode>,
)
