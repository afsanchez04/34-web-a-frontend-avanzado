import { useFormulario } from "../hooks/useFormulario"

export const Formulario = () => {

    const {texto,password,logged,handleUser,handlePassword,handleSubmit} = useFormulario()

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
