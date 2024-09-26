import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LanguageContext } from "../context/LangauageContext"
import { AuthContext } from "../context/AuthContext"


export const MainContext = () => {

    const {theme} = useContext(ThemeContext)
    const {textos} = useContext(LanguageContext)
    const {auth} = useContext(AuthContext)

    return (
        <main className={`card-body ${theme}`}>
            { auth ? <h1>{textos.mainHello}</h1> : <h1>{textos.mainWelcome}</h1> } 
            <p>{textos.mainContent}</p>
        </main>
    )
}
