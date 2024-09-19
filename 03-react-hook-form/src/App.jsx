import { useForm } from "react-hook-form"

export const App = () => {

  const { register, handleSubmit, formState: {errors}, watch, reset } = useForm()

  const onSubmit = handleSubmit( data => {
    console.log(data)

    reset()
  } )

  return (
    <form onSubmit={onSubmit}>
      <input
        name="nombre"
        placeholder="Nombre..."
        type="text"
        {...register("nombre",{
          required: 'Nombre es requerido',
          maxLength: {
            value: 5,
            message: 'Máximo 6 caracteres!'
          }
        })}
      />
      {errors.nombre && <small className="text-danger">{errors.nombre.message}</small>}
      <input
        name="correo"
        placeholder="Correo..."
        type="email"
        {...register("correo",{
          required: 'Correo es requerido'
        })}
      />
      <input
        name="password"
        placeholder="Contraseña..."
        type="password"
        {...register("password",{
          required: 'Contraseña es requerida',
          minLength: {
            value: 5,
            message: 'Contraseña debe tener mínimo 5 caracteres'
          }
        })}
      />
      {errors.password && <small className="text-danger">{errors.password.message}</small>}
      <input
        name="password"
        placeholder="Confirmar contraseña..."
        type="password"
        {...register("confirmarPassword",{
          required: 'Debes confirmar tu contraseña',
          minLength: {
            value: 5,
            message: 'Contraseña debe tener mínimo 5 caracteres'
          },
          validate: (value) => {
            return value === watch('password') || "Las contraseñas no coinciden"
          }
        })}
      />
      {errors.confirmarPassword && <small className="text-danger">{errors.confirmarPassword.message}</small>}
      <select
        name="paises"
        {...register("paises")}
      >
        <option value="colombia">Colombia</option>
        <option value="mexico">Mexico</option>
        <option value="chile">Chile</option>
        <option value="peru">Peru</option>
      </select>

      {
        watch('paises') === 'colombia' && (
          <input {...register('departamento',{required: true})} type="text" placeholder="Departamento..."/>
        )
      }

      <div className="form-check">
        <input 
          name="terminos" 
          className="form-check-input" 
          type="checkbox" 
          value=""
          {...register("terminos")}
        />
          <label className="form-check-label" htmlFor="flexCheckDefault" >
            Aceptar términos
          </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}
