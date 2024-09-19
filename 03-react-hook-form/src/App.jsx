import { useFormulario } from "./components/useFormulario"

export const App = () => {

  const initialForm = {
    nombre: '',
    correo: '',
    password: '',
    colores: ''
  }

  const {formState, handleInputChange} = useFormulario(initialForm)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="nombre" 
        placeholder="Nombre..." 
        type="text"
        onChange={handleInputChange} 
      />
      <input 
        name="pais" 
        placeholder="País..." 
        type="text"
        onChange={handleInputChange} 
      />
      <input 
        name="correo" 
        placeholder="Correo..." 
        type="email"
        onChange={handleInputChange} 
      />
      <input 
        name="password" 
        placeholder="Contraseña..." 
        type="password"
        onChange={handleInputChange} 
      />
      <select 
        name="colores"
        onChange={handleInputChange}
      >
        <option value="red">Rojo</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="tomato">Tomato</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  )
}
