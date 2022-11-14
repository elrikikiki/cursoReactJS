import { useState } from "react";
import { createContext } from "react";


export /* Exportamos para así usarla en App */const CartContext = createContext();

/* aca tiene q estar toda la logica de los estados */
/* puedo pasar Estados(UseState) y funciones(call back) por el Context */
const CartProvider = ({children}) => {
    /* const {children} = propens */ /* destructuring */
    const [cart, setCart] = useState([])
    /* ese cart esta bien pasado en Value, pero no el setCart, NUNCA SE PASA EL SETCART porque sino me va a dar estados diferentes a medida que lo voy pasando de un componente a otro
    o sea por ejemplo yo quiero pasar la misma cantidad que se sumo en item detail al carrito, 
    entonces para eso hago primero la logica(un callback) con el setCart Desde su componente Padre, o sea
    acá, y luego por medio de Value paso ese callback, de esa forma no se pierde el valor real que el usuario va manejando. Clase 10 1:14hs maome */

    /* ahora creamos la funcion */
    const addToCart = (item,qty) => {
        if (isInCart(item.id)) { /* le podes pasar el item.id, porque acordate que este AddToCart funciona dsp en ItemDetail, en donde esta pasado por props el ITEM */
        alert('sumale la cantidad flaco')
        } else {
            setCart([...cart,{...item,qty}]); //ahi hago el spread para que me envuelva todo dentro de un solo objeto
            
        }
        
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) /* si coincide el ID, debería sumarle la cantidad al objeto, y no hacerme un nuevo objeto con el mismo Id */
    };
    const deleteAll = () => {
        setCart([])
    }
    const deleteOne = (id) => {
        const productoEliminado = cart.filter((prod)=> prod.id !== id)  /* Clase 11 1:48 fijate que haces eso para tener todos los ID, menos el que estas eligiendo, por eso va el signo
        de exclamacion, xq es diferente */
        setCart(productoEliminado)
    }
    const mostrarCantidad = (qty) => {
        const prodCant = cart.filter((prod) => prod.qty === qty)
        setCart(prodCant)
    }
/*     const totalCost = (item,qty) => {
        setCart(item.price * qty)

    } */

    console.log(cart);
    return (
        <CartContext.Provider value={{cart, addToCart, deleteAll,deleteOne,mostrarCantidad}}> {/* ese cart ya va a tener todo resuelto xq la logica va antes de ese cart, de esa manera vas a estar pasando un estado con toda
        la logica "resulta" desde aca, dsp obvio se adapta a cada route o componente */}
            {children} {/* Esto vale toda mi aplicacion pa juju */}
        </CartContext.Provider>
    )    
}
export default CartProvider