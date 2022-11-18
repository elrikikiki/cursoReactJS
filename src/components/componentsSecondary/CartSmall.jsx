import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartSmall = ({prod}) => {

    const {deleteOne} = useContext(CartContext)

    
  return (
    <div>
          <img src={prod.img} className="imgResp zoomImg" alt="" />
          <div>
          <div className='ms-2 mt-2'>
          <div>Precio: ${prod.price}</div>
          <div>ID: {prod.id}</div>
          <div>Categoría: {prod.category}</div>
          <div>Litros: {prod.litters}</div>
          <div>Cantidad: {prod.qty}</div>
          <div>Total: ${prod.qty * prod.price}</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteOne(prod.id)} width="16" height="16" fill="currentColor" class="bi bi-trash ms-2" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    
        {/* el callback ese va cuando le tengo q pasar un parametro a mi funcion, sino no va */}
</div>
<button>Comprar</button>
</div>
  )
}

export default CartSmall