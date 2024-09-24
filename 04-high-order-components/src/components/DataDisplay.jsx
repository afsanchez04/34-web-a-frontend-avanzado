import { useDataFetching } from "./hooks/useDataFetching"

const URL = 'https://jsonplaceholder.typicode.com/users/2'

//Componente original
export const DataDisplay = () => {

    const {data, isLoading, error} = useDataFetching(URL)

    if (isLoading) return <p>Cargando datos...</p>
    if (error) return <p>Error: {error}</p>
    if (!data) return null

    return (
        <>
            <h2>Datos obtenidos</h2>
            <ul>
                <li>{data.email}</li>
            </ul>
        </>
    )
}

