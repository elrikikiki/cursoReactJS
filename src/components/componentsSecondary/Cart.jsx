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
        return /* ese return SIEMPRE */ <div className="container fontFamily mt-5 mb-5">
            <div className="row text-center justify-content-center">
                <div className="col-md-2">
                <p className="h5 fw-bold mb-4">Todavía no ha seleccionado ningún producto</p>
                <Link to='/' className="sinSubrayado text-black bg-dark text-white p-1 rounded mt-3 ">Ir al catálogo</Link>
                </div>
            </div>
            </div>
        
    }
    return (
        <div className="container fontFamily">
                <h3 className="mt-4 mb-4 text-center fw-bold"> SHOP</h3>
                    {
                    cart.map((prod) => {
                        return (
                            <div className="row mt-4 fontFamily">
                                <CartSmall prod={prod}/>
                            </div>
                        )
                    })
                    }
                    <div className="row mt-4 mb-4">
                    <div className="col-md-2 ">
                    <h4 className="">TOTAL: ${totalPrecio()}.-</h4>
                    </div>
                    <div className="col-md-1 mb-4">
                    <Link to='/checkout'>
                    <button className="btn btn-danger">Comprar</button>
                    </Link>
                    </div>
                    <div className="col-md-2 mb-4">
                    <button className="btn btn-success " onClick={deleteAll}>Limpiar carrito</button>
                    </div>
                    </div>
                <div>
                </div>
            </div>
    )
}

export default Cart