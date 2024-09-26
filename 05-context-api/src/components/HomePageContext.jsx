import { useState } from "react"
import { ThemeProvider } from "../context/ThemeContext"
import { HeaderContext } from "./HeaderContext"
import { MainContext } from "./MainContext"
import { FooterContext } from "./FooterContext"
import { LanguageProvider } from "../context/LangauageContext"
import { AuthProvider } from "../context/AuthContext"

export const HomePageContext = () => {

    return (
        <>
            <div className="card text-center">
                <ThemeProvider>
                    <LanguageProvider>
                        <AuthProvider>
                            <HeaderContext/>
                            <MainContext/>
                            <FooterContext/>
                        </AuthProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </div>

        </>
    )
}
