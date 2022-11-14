import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartSmall from "./CartSmall";

const Cart = () => {

/*  const valorPasado=  useContext(Contexto)
    console.log(valorPasado); */
    const {deleteAll,cart} = useContext(CartContext);
    console.log(cart);
     
/*     const [total, setTotal] = useState(0) */
    
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
            <button className="btn btn-success m-4" onClick={deleteAll}>Vaciar carrito</button>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Cart