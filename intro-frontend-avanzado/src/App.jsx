//rafc (snippet)
import './styles/estilosBootstrap.scss'

export const App = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-primary'>Bootstrap</h1>
                <p>Hola bootstrap</p>
                <button className='btn btn-primary'>Click</button>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-secondary">Go somewhere</a>

                    </div>
            </div>
        </>
    )
}
