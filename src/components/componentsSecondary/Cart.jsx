import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartSmall from "./CartSmall";
import { Link } from "react-router-dom";

const Cart = () => {

/*  const valorPasado=  useContext(Contexto)
    console.log(valorPasado); */
    const {deleteAll,cart,totalPrecio,totalUnidades} = useContext(CartContext);
    console.log(cart);
    const totalUni = totalUnidades()
     
/*     const [total, setTotal] = useState(0) */
    
    if (totalUni === 0) {
        /* este es el early return, acordate siempre de ponerle el return al if este pa */
        return /* ese return SIEMPRE */ <h1 className="container">Su carrito está vacío :/</h1>
        
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
            <button className="btn btn-success m-4" onClick={deleteAll}>Vaciar carrito</button>
                    <button><Link to='/checkout'>Comprar</Link></button>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Cart