import { useState } from "react"


export const Formulario = () => {

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

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleUser}
                    placeholder="Username"
                />
                <input 
                    type="password" 
                    onChange={handlePassword}
                    placeholder="Password"
                />
                <button type="submit">Registrar</button>
            </form>
            {logged && <h1>Hola {texto} 🤖 </h1>}
            
        </div>
    )
}
