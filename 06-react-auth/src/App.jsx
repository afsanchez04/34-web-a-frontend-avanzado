import React from 'react'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { RoutesIndex } from './routes/RoutesIndex'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesIndex />
    </BrowserRouter>
  )
}
