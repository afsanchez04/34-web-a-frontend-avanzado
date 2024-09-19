import { useState } from "react"

export const useFormulario = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm)

  const handleInputChange = ({target}) => {
    const {name, value} = target
    setFormState( {
      ...formState,
      [name]: value
    } )

  }

  return {
    formState,
    handleInputChange
  }
}