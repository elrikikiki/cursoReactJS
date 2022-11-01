import CartWidget from "../componentsSecondary/CartWidget";
import { NavLink, Link } from "react-router-dom";
const Navbar = (props) => {
const {edad} = props
    return (
        <div className="container-fluid bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 m-2">
                        <Link  className='links fontFamily' to='/'>
                        <h4 className="fw-bold ">BIRREX</h4>
                        </Link>
                    </div>
                    <div className="col-sm-1 m-2">
                        <NavLink className='links fw-bold fontFamily' to='/category/Golden'>Golden </NavLink>
                        
                    </div>
                    <div className="col-sm-1 m-2">
                    <NavLink className='links fw-bold fontFamily'to='/category/Negra'>Negra</NavLink>
                        
                    </div>
                    <div className="col-sm-1 m-2">
                    <NavLink className='links fw-bold fontFamily' to='/category/Roja'>Roja</NavLink>
                        
                    </div>
                    
                    <div className="col-6"></div>

                    <div className="col-1">
                        <NavLink className='links fw-bold fontFamily' to='/CartWidget'><CartWidget/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar