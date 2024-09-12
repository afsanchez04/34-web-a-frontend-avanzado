import { useState } from "react"

export const useFormulario = () => {
    const [texto, setTexto] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState(false)
    
    const handleUser = ({ target }) => {
        setTexto(target.value)
    }
    const handlePassword = ({ target }) => {
        setPassword(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLogged(true)
    }

  return {
    texto,
    password,
    logged,
    handleUser,
    handlePassword,
    handleSubmit
  }
}
