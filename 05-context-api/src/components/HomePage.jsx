import { useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"


const initialTheme = 'light'

export const HomePage = () => {

    const [theme, setTheme] = useState(initialTheme)

    const handleTheme = (e) => {
        setTheme(e.target.value)
    }

    return (
        <>
            <div className="card text-center">
                <Header theme={theme} handleTheme={handleTheme} />
                <Main theme={theme} />
                <Footer theme={theme} />
            </div>

        </>
    )
}
