import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
            >Ir al Cart</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-outline-primary"  
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount

