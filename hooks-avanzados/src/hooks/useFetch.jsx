import { useEffect, useState } from "react"


export const useFetch = (URL) => {

    const [usuarios, setUsuarios] = useState([])

    const getFetch = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setUsuarios(data)
        } catch (errors) {
            console.error(errors)
        }
    }

    useEffect(() => {
        getFetch()
    }, [])

  return {
    usuarios
  }
}
