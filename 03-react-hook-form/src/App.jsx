import { useRef } from "react"

export const App = () => {

  const inputNombre = useRef()
  const inputEmail = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputNombre.current.value)
    console.log(inputEmail.current.value)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputNombre} name="nombre" placeholder="Nombre..." type="text" />
      <input ref={inputEmail} name="correo" placeholder="Correo..." type="email" />
      <button type="submit">Enviar</button>
    </form>
  )
}
