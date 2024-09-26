import { useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"
import { ThemeProvider } from "../context/ThemeContext"
import { HeaderContext } from "./HeaderContext"
import { MainContext } from "./MainContext"
import { FooterContext } from "./FooterContext"



const initialLanguage = 'es'
const initialAuth = null

const tranlations = {
    es: {
        headerTitle: "Mi aplicación SIN Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página"
    },
    en: {
        headerTitle: "My application without Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}

export const HomePageContext = () => {


    const [language, setLanguage] = useState(initialLanguage)
    const [textos, setTextos] = useState(tranlations[language])
    const [auth, setAuth] = useState(initialAuth)


    const handleLanguage = (e) => {
        setLanguage(e.target.value)
        setTextos(tranlations[e.target.value])
    }

    const handleAuth = () => {
        if (auth) {
            setAuth(null)
        } else {
            setAuth(true)
        }
    }

    return (
        <>
            <div className="card text-center">
                <ThemeProvider>
                    <HeaderContext
                        //theme={theme}
                        //handleTheme={handleTheme}
                        textos={textos}
                        handleLanguage={handleLanguage}
                        auth={auth}
                        handleAuth={handleAuth}
                    />
                    <MainContext
                        //theme={theme}
                        textos={textos}
                        auth={auth}
                    />
                    <FooterContext
                        //theme={theme}
                        textos={textos}
                    />
                </ThemeProvider>
            </div>

        </>
    )
}
