import { useRef } from "react"

export const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputs = Object.fromEntries( new FormData(event.target) ) 
    // const nombre = inputs.get('nombre')
    // const correo = inputs.get('correo')
    console.log(inputs)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre..." type="text" />
      <input name="correo" placeholder="Correo..." type="email" />
      <input name="password" placeholder="Contraseña..." type="password" />
      <select name="colores">
        <option value="red">Rojo</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="tomato">Tomato</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  )
}
