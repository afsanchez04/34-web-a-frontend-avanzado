
import App from "./App"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test( "Test que siempre será true", () => {
    expect(true).toBe(true)
} )

test( "Encabezado que debe ser Vite + React", () => {
    render(<App/>)

    const headingElement = screen.getByText("Vite + React")
    expect(headingElement).toBeInTheDocument()
} )