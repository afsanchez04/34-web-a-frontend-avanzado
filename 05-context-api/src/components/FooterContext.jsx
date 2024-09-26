import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export const FooterContext = ({textos}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <footer className={`card-footer ${theme}`}>
            <h4>{textos.footerTitle}</h4>
        </footer>
    )
}
