import { useEffect } from "react"
import { useState } from "react"

export const useDataFetching = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Error en la solicitud")
                }
                const result = await response.json()
                setData(result)

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

    }, [url])


    return {
        data,
        isLoading,
        error
    }
}

