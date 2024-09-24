//HOC
export const withAuth = (WrappedComponent) => {
    return (props) => {
        const isAutenticated = props.isAutenticated
        if(!isAutenticated){
            return <h1>Debes iniciar sesión</h1>
        }
        return <WrappedComponent {...props}/>
    }
}