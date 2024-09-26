

export const Footer = ({theme, textos}) => {
    return (
        <footer className={`card-footer ${theme}`}>
            <h4>{textos.footerTitle}</h4>
        </footer>
    )
}
