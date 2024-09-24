import { withCounter } from "./HOCs/withCounter"

//Componente original
export const ContadorApp = ({counter, decrement, reset, increment}) => {

    return (
        <>
            <h1>Contador: {counter}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}

//Componente mejorado
export const EnhancedContador =  withCounter(ContadorApp)