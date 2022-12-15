import { NavLink, Link } from "react-router-dom";
import CartWidget from "../componentsSecondary/CartWidget";

const Navbar = /* (props) */  ({edad,saludo,nombre}) => {

   /*  const {productoss,nombre} = useContext(Contexto)
    console.log(nombre);
    console.log(productoss); */
/* const {edad,saludo,nombre} = props esta es otra forma de destructuring, pero ese props tiene q estar escrito arriba */
    return (

<nav id="mobile-back" className="bg-white navbar fontFamily navbar-expand-lg border-bottom sticky-top ">
      <div className="container">
        <Link  className='links fontFamily navbar-brand' to='/'>
       <p className="h3 fw-bold ">BIRREX</p>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between fw-bold mt-2 " id="navbarNav">
          <div className="nav-item col-sm-5 mb-4"></div>
          <div className="nav-item col-sm-1 mb-4 text-center  ">
            <NavLink className='links fw-bold fontFamily nav-link mouseHeaderGolden' aria-current="page" to='/category/Golden'>Golden</NavLink> 
            </div>
          <div class="nav-item col-sm-1 mb-4 text-center mouseHeaderBlack">
          <NavLink className='nav-link links fw-bold fontFamily'to='/category/Negra'>Black</NavLink>
          </div>
          <div class="nav-item col-sm-1 mb-4 text-center ">
          <NavLink className='nav-link links fw-bold fontFamily mouseHeaderRed' to='/category/Roja'>Red</NavLink> 
          </div>
          <div class="nav-item col-sm-1 mb-4 text-center marginNav">
          <Link className='nav-link links fw-bold fontFamily' to='/cart'>
               <CartWidget/> 
              </Link>
          </div>
        </div>
      </div>
    </nav>
        
    );
}
export default Navbar