import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartSmall from "./CartSmall";
import { Link } from "react-router-dom";

const Cart = () => {

    const {deleteAll,cart,totalPrecio,totalUnidades} = useContext(CartContext);
    console.log(cart);
    const totalUni = totalUnidades()

    if (totalUni === 0) {
        return  <h1 className="container">Su carrito está vacío :/</h1>
        
    }
    return (
        <div className="container">
           
            <div className="fw-bold">
                <h3> CARRITO DE COMPRAS</h3>
                <div className="row mb-3">
                    {
                    cart.map((prod) => {
                        return (
                            <div className="col-md-3 mb-4">
                                <CartSmall prod={prod}/>
                            </div>
                        )
                    })
                    }
                </div>
                <h3>TOTAL: ${totalPrecio()}</h3>
                <Link to='/checkout'><button className="btn btn-warning">Comprar</button></Link>
            <button className="btn btn-success m-4" onClick={deleteAll}>Vaciar carrito</button>
                    
                <div>
                </div>
            </div>
        </div>
    )
}

export default Cart