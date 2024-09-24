import { withDataFetching } from "./HOCs/withDataFetching"

const URL = 'https://jsonplaceholder.typicode.com/users/2'

//Componente original
export const DataDisplay = ({ data, isLoading, error }) => {

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

//Componente mejorado
export const EnhancedDataDisplay = withDataFetching(URL)(DataDisplay)
