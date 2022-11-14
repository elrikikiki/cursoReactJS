import { NavLink, Link } from "react-router-dom";
import CartWidget from "../componentsSecondary/CartWidget";
const Navbar = /* (props) */  ({edad,saludo,nombre}) => {

   /*  const {productoss,nombre} = useContext(Contexto)
    console.log(nombre);
    console.log(productoss); */
/* const {edad,saludo,nombre} = props esta es otra forma de destructuring, pero ese props tiene q estar escrito arriba */
    return (
        <div className="container-fluid bg-warning pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 m-2">
                        <Link  className='links fontFamily' to='/'>
                        <h4 className="fw-bold ">{saludo}</h4>
                        </Link>
                    </div>
                    <div className="col-sm-1 m-2">
                        <NavLink className='links fw-bold fontFamily' to='/category/Golden'>Golden</NavLink>

                    </div>
                    <div className="col-sm-1 m-2">
                    <NavLink className='links fw-bold fontFamily'to='/category/Negra'>Negra</NavLink>
                        
                    </div>
                    <div className="col-sm-1 m-2">
                    <NavLink className='links fw-bold fontFamily' to='/category/Roja'>Roja</NavLink>
                        
                    </div>
                    
                    <div className="col-6"></div>

                    <div className="col-1">
                        <Link className='links fw-bold fontFamily' to='/cart'>
                        <CartWidget/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar