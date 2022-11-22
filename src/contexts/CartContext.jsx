import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

const CartProvider = ({children}) => {
   
    const [cart, setCart] = useState([])
   
    const addToCart = (item,qty) => {
        if (isInCart(item.id)) { 
        sumarCantidad(item,qty)
        } else {
            setCart([...cart,{...item,qty}]); 
            
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) 
    };
    const deleteAll = () => {
        setCart([])
    }
    const deleteOne = (id) => {
        const productoEliminado = cart.filter((prod)=> prod.id !== id)  
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
        const copia = [...cart]
        copia.forEach((prod) => {
            count= count + prod.qty;
            
        })
        return count;
    }
    const totalPrecio = () => {
        let count = 0;
        const copia = [...cart] 
        copia.forEach((prod) => {
            count= count + prod.qty * prod.price;
        })
        return count;
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
        }}> 
            {children} {}
        </CartContext.Provider>
    )    
}
export default CartProvider