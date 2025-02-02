

export const Main = ({theme, textos, auth}) => {
    
    return (
        <main className={`card-body ${theme}`}>
            { auth ? <h1>{textos.mainHello}</h1> : <h1>{textos.mainWelcome}</h1> } 
            <p>{textos.mainContent}</p>
        </main>
    )
}
