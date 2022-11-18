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
    /* esta funcion devuelve true o false (usa some) y hace q si es true, es decir q coinciden los ids, le tengo q sumar la cantidad,
    pero si es false (distintos ids), lo manda al carrito sin ningun problema */
    const addToCart = (item,qty) => {
        if (isInCart(item.id)) { /* le podes pasar el item.id, porque acordate que este AddToCart funciona dsp en ItemDetail, en donde esta pasado por props el ITEM */
        sumarCantidad(item,qty)
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
    /* { } */
    const sumarCantidad = (itemPorAgregar, qty) => {
        const cartActualizado = cart.map((prodDelCarrito)=>{
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    qty: prodDelCarrito.qty + qty,
                    
                 }
                 return productoActualizado;
            } else {
                return prodDelCarrito
            } 
         })
         setCart(cartActualizado)
    }

    const totalUnidades = () => {
        let count = 0;
        const copia = [...cart] /* no puedo hacer un for each de cart solo, por eso hago una copia, sino tendria q ser un map pero aca no te sirve */
        copia.forEach((prod) => {
            count= count + prod.qty;
        })
        return count;
    }
    const totalPrecio = () => {
        let count = 0;
        const copia = [...cart] /* no puedo hacer un for each de cart solo, por eso hago una copia, sino tendria q ser un map pero aca no te sirve */
        copia.forEach((prod) => {
            count= count + prod.qty * prod.price;
        })
        return count; /* no es recomendable hacer un reduce */
    }
    const cantidadDelProducto = (id) => {
        const product = cart.find((prod)=> prod.id ===id)
            return product?.qty /* ?optional change se llama ese simbolo, es cuando sabes q puede tirar undefined */
        
    }

    console.log(cart);
    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            deleteAll,
            deleteOne,
            mostrarCantidad, 
            totalUnidades, 
            totalPrecio,
            cantidadDelProducto 
        }}> {/* ese cart ya va a tener todo resuelto xq la logica va antes de ese cart, de esa manera vas a estar pasando un estado con toda
        la logica "resulta" desde aca, dsp obvio se adapta a cada route o componente */}
            {children} {/* Esto vale toda mi aplicacion pa juju */}
        </CartContext.Provider>
    )    
}
export default CartProvider