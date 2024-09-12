import { useContador } from "../hooks/useContador"

export const Contador = () => {

    const{num, aumentar, disminuir, resetear} = useContador()
    
    return (
        <div>
            <h1>Contador: {num}</h1>
            <button onClick={() => aumentar(4)}>+</button>
            <button onClick={() => disminuir(2)}>-</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    )

}