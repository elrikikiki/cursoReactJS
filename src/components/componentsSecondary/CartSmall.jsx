import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartSmall = ({prod}) => {

    const {deleteOne} = useContext(CartContext)

    
  return (
    <>
      <div className="col-md-1 border ">
        <img src={prod.img} className='respCarrito' alt="" />
      </div>
      <div className="col-md-4 bg-light border">
        <p className='text-center pt-4'>{prod.title}</p>
      </div>
      <div className="col-md-2 bg-light border">
        <p className='text-center pt-4'>Cantidad: {prod.qty}</p>
      </div>
      <div className="col-md-2 bg-light border">
        <p className='text-center pt-4'>Total: ${prod.qty * prod.price}</p>
      </div>
      <div className="col-md-2 bg-light border text-center">
      <button className='mt-4 none-border1' onClick={() => deleteOne(prod.id)}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
          </button>
      </div>
         {/*  <div>Total: ${prod.qty * prod.price}</div> */}
          
          {/* <button onClick={() => deleteOne(prod.id)}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" class="bi bi-trash ms-2" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
          </button> */}
        {/* el callback ese va cuando le tengo q pasar un parametro a mi funcion, sino no va */}


</>
  )
}

export default CartSmall