import { useState } from "react"

export const Contador = () => {

  const [num, setNum] = useState(0)

  const aumentar = (val) => {
    setNum(num+val) 
  }
  const disminuir = (val) => {
    setNum(num-val) 
  }
  const resetear = () => {
    setNum(0) 
  }

  return (
    <div>
      <h1>Contador: {num}</h1>
      <button onClick={() => aumentar(4)}>+</button>
      <button onClick={() => disminuir(2)}>-</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  )

  
}
