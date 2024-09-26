import { createContext, useState } from "react";
export const LanguageContext = createContext()

const initialLanguage = 'es'
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

export const LanguageProvider = ({children}) =>{

    const [language, setLanguage] = useState(initialLanguage)
    const [textos, setTextos] = useState(tranlations[language])

    const handleLanguage = (e) => {
        setLanguage(e.target.value)
        setTextos(tranlations[e.target.value])
    }


    const data = {
        textos,
        handleLanguage
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}