# Configuración Jest en proyecto de react (Vite)

### 1. Instalar Jest en dev dependencies

```bash
npm i jest -D
```

### 2. Añadir script en `package.json`

```json
//package.json
{
  "name": "react-jest",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "jest"  // <-----------------------🟢
  },
  //...Resto de las configuraciones
```

### 3. Instalar @testing-library/jest-dom en dev dependencies

```bash
npm i -D @testing-library/jest-dom
```

- Permite escribir pruebas más legibles y específicas para el DOM. Esto simplifica las pruebas de elementos y su estado dentro de un árbol DOM en los componentes de React.

### 4. Instalar @testing-library/react en dev dependencies:

```bash
npm i -D @testing-library/react
```

- Proporciona métodos como `render`, `fireEvent`, y `screen` para renderizar componentes de React y simular eventos (como clics, input, etc.) en un entorno de prueba. Por ejemplo:React Testing Library promueve pruebas centradas en el comportamiento del usuario y en la accesibilidad.

### 5. Instalar jest-environment-jsdom en dev dependencies

```bash
npm i -D jest-environment-jsdom
```

- Define el **entorno de pruebas de Jest** para emular un DOM como si estuvieras en un navegador. Esto es crucial para probar componentes de React en un entorno sin navegador (como en Node.js).

### 6. Instalar babel en dev dependencies

```bash
npm i -D @babel/preset-env @babel/preset-react
```

- Estos son **presets de Babel** que configuran cómo tu código se transpila para funcionar en diferentes entornos.
    - **`@babel/preset-env`**: Transpila el código a una versión compatible con las versiones de JavaScript necesarias para el entorno de ejecución de Jest.
    - **`@babel/preset-react`**: Transpila código JSX y otras características de React a JavaScript.
- Jest necesita transpilar el código JSX de React y las características modernas de JavaScript para ejecutar las pruebas. Estos presets permiten que Babel convierta tu código de React y ECMAScript moderno en un formato que Jest pueda interpretar correctamente.

### 7. Crear archivo de 📄 babel.config.json configuración de babel (en la raíz del proyecto)

📁 root / 📄 babel.config.json

```jsx
//babel.config.json
{
    "presets": [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {
                "runtime": "automatic" //para que Babel puede compilar JSX sin que se tenga que importar React en cada archivo.
            }
        ]
        
    ]
}
```

### 8. Crear carpeta 📁 test y dentro 📄 fileMock.js

📁 src / 📁 test / 📄 fileMock.js 

```jsx
//fileMock.js

export default {
    __esModule: true,
    default: "test-file-stub"
}
```

**Este mock** para Jest, utilizado para simular archivos que no se necesitan para las pruebas, como imágenes, archivos de estilo (CSS), o cualquier otro tipo de archivo estático (ej., `.jpg`, `.svg`, `.png`, etc.).

Cuando Jest encuentra este `export default`, está simulando cualquier archivo estático que se importa en el código fuente con un valor por defecto. En este caso, `default: "test-file-stub"` reemplaza el archivo que estás tratando de importar con un simple string `"test-file-stub"`. Esto evita que Jest intente procesar archivos que no necesita, lo cual sería innecesario para la lógica de las pruebas.

**Componentes clave del mock:**

1. `__esModule: true` le indica a Jest que este mock está exportando un módulo ES6 (ECMAScript Module).
2. `default: "test-file-stub"` es el valor con el que Jest reemplaza cualquier archivo importado durante las pruebas.

### 9. Instalar identity-obj-proxy en dev dependencies

```bash
npm i -D identity-obj-proxy
```

- Este paquete es un **mock para importar archivos de estilos CSS/SCSS** en las pruebas. Jest normalmente no sabe cómo manejar estos archivos porque no son JavaScript. **identity-obj-proxy** soluciona esto al devolver un objeto vacío, pero con las clases correctamente asignadas (como una simulación del estilo). Esto evita que los estilos rompan las pruebas.

### 10. Crear dentro de 📁 test / 📄 setupTests.js

📁 src / 📁 test / 📄 setupTests.js 

Dentro importar solo @testing-library/jest-dom

```jsx
//setupTests.js

import '@testing-library/jest-dom'
```

- Inicializa configuraciones globales para el entorno de pruebas, en este caso, añadiendo los matchers (funciones de Jest) de `@testing-library/jest-dom`. Al importarlo en **`setupTests.js`**, estos matchers personalizados quedan disponibles **globalmente** en todas las pruebas, sin necesidad de importarlos manualmente en cada archivo de prueba individual.

### 11. Ir a 📄 jest.config.json y añadir vinculación con setupTests y testEnvironment

```jsx
// jest.config.json

{
    "setupFilesAfterEnv": [
        "<rootDir>/src/test/setupTests.js"
    ],
    "testEnvironment": "jest-environment-jsdom",
    "moduleNameMapper": {
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    }
}
```

**`setupFilesAfterEnv`**:

- Especifica un archivo o archivos que se ejecutan **después** de que el entorno de prueba de Jest haya sido configurado, pero **antes** de ejecutar las pruebas. Estos archivos se utilizan para configurar globalmente el entorno de pruebas.

**`testEnvironment`**:

- Especifica el **entorno** en el que se ejecutarán las pruebas. En este caso, es `jest-environment-jsdom`, lo que indica que Jest debe usar **jsdom** como entorno de prueba.

**`moduleNameMapper`**:

- Es utilizado por Jest para manejar la resolución de módulos cuando intenta importar archivos no JavaScript como imágenes o estilos CSS. En lugar de intentar cargar los archivos reales, Jest los mapea a **mocks**.

---

# 👨🏻‍💻 Ejemplo de prueba test a componente App.jsx

```jsx
//App.test.js

import App from "./App";
import { render, screen } from "@testing-library/react";

test("always true test", () => {
  expect(true).toBe(true);
});

test("heading should be Vite + React", () => {
  render(<App />);

  const headingElement = screen.getByText("Vite + React");

  expect(headingElement).toBeInTheDocument();
});
```

### Ejecutar test en la terminal

```bash
npm test
```