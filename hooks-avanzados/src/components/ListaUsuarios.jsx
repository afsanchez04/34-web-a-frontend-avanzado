import { useEffect, useState } from "react"


export const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const URL = 'https://jsonplaceholder.typicode.com/users'

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



    return (
        <>
            <h2>Lista de usuarios</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ul>

            </ul>
        </>
    )
}
