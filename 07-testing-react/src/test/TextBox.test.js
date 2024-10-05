import { render, screen } from "@testing-library/react"
import { TextBox } from "../components/TextBox"

describe("Componente TextBox", () => {

    let article
    
    beforeEach(() => {
        render(<TextBox />)
        article = screen.getByRole('article', { name: 'parrafo principal' })
    })

    test('Caja de texto existe en documento', () => {
        expect(article).toBeInTheDocument()
    })

    test('Caja de texto tiene un color inicial', () => {
        expect(article).toHaveStyle({
            backgroundColor: 'tomato'
        })
    })


})