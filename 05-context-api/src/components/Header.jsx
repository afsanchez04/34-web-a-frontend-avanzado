



export const Header = ({ theme, handleTheme, textos, handleLanguage, auth, handleAuth}) => {

    return (
        <header className={`card-header ${theme}`}>
            <h2>{textos.headerTitle}</h2>
            <h4>{textos.headerSubtitle}</h4>

            <select name="language" onChange={handleLanguage}>
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
                    {textos.headerLight}
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
                    {textos.headerDark}
                </label>
            </div>

            <button onClick={handleAuth}>
                {auth ? textos.buttonLogout : textos.buttonLogin }
            </button>

        </header>
    )
}
