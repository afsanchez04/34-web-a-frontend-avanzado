import { mayorDeEdad, titleCase } from "../components/CardUser"

describe('funciones dentro de cardUser', () => {

    describe("titleCase", () => {

        test('Debe retornar un string', () => {
            const result = titleCase("Un valor")
            expect(typeof result).toBe("string")
        })

        test('debe retornar el string transformado', () => {
            expect(titleCase("el velóz murciélago hindú")).toBe("El Velóz Murciélago Hindú")
        })

        test("debe devolver un string vacío si recibe un string vacío", () => {
            expect(titleCase("")).toBe("")
        })



    })

    describe("mayorDeEdad", () => {

        test("debe devolver un boolean", () => {
            expect(typeof mayorDeEdad(19)).toBe('boolean')
        })
        test('si es mayor de edad devuelve true', () => {
            expect( mayorDeEdad(34) ).toBeTruthy()
        })
        test('si la edad es 18 devuelve true', () => {
            expect( mayorDeEdad(18)).toBeTruthy()
        })
        test( "si es menor de edad devuelve false", () => {
            expect( mayorDeEdad(5) ).toBeFalsy()
        } )
        test( "si la edad es negativa devuelve un null", () => {
            expect( mayorDeEdad(-20) ).toBeNull()
        } )

    })

})