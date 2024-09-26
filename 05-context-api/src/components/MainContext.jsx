import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export const MainContext = ({textos, auth}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <main className={`card-body ${theme}`}>
            { auth ? <h1>{textos.mainHello}</h1> : <h1>{textos.mainWelcome}</h1> } 
            <p>{textos.mainContent}</p>
        </main>
    )
}
