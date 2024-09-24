import { useState } from "react"

//HOC
export const withCounter = (WrappedComponent) => {

    return (props) => {

        const [counter, setCounter] = useState(0)

        const decrement = () => { setCounter(counter - 1) }
        const reset = () => { setCounter(0) }
        const increment = () => { setCounter(counter + 1) }

        return (
            <WrappedComponent 
                counter={counter}
                decrement={decrement}
                reset={reset}
                increment={increment}
                {...props} 
            />
        )

    }

}