
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Secret } from '../pages/Secret'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'

export const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/secret" element={<Secret/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}
