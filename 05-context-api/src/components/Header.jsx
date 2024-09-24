

export const Header = ({ theme, handleTheme }) => {
    return (
        <header className={`card-header ${theme}`}>
            <h2>Mi aplicación de React (Sin contex)</h2>
            <h4>Subtítulo</h4>

            <select name="language">
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>

            <div className="form-check d-flex justify-content-center gap-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="light"
                    onClick={handleTheme}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Light
                </label>
            </div>
            <div className="form-check d-flex justify-content-center gap-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="dark"
                    onClick={handleTheme}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Dark
                </label>
            </div>

            <button>Inicio de Sesión</button>

        </header>
    )
}
