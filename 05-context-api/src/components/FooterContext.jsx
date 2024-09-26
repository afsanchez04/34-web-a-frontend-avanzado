import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LanguageContext } from "../context/LangauageContext"


export const FooterContext = () => {

    const {theme} = useContext(ThemeContext)
    const {textos} = useContext(LanguageContext)

    return (
        <footer className={`card-footer ${theme}`}>
            <h4>{textos.footerTitle}</h4>
        </footer>
    )
}
