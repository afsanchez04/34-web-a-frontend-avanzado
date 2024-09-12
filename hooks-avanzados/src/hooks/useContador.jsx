import { useState } from "react"

export const useContador = () => {

    const [num, setNum] = useState(0)
    
    const aumentar = (val) => {
        if (num + val >= 50) {
            setNum(50)
        }
        else {
            setNum(num + val)
            console.log(num)
        }
    }
    const disminuir = (val) => {
        if (num <= 0) {
            setNum(0)
        }
        else {
            setNum(num - val)
            console.log(num)
        }

    }
    const resetear = () => {
        setNum(0)
        console.log(num)
    }
    return {
        num,
        aumentar,
        disminuir,
        resetear
    }
}