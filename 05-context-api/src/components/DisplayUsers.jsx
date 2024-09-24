import { UserProvider } from "../context/UserContext"
import { Component3 } from "./Component3"


export const DisplayUsers = () => {
    return (
        <>
            <UserProvider>
                <h1>Inicio Componente Padre</h1>
                <Component3 />
            </UserProvider>

        </>

    )
}




