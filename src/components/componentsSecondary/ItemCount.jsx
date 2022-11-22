import React, {useState} from 'react'

const ItemCount = ({stock,onAdd}) => { 
    const [cantidad, setCantidad] = useState(1) ;
  
    const sumar = () => {
        if (cantidad >= stock) {
            
        } else{
            setCantidad( cantidad + 1)
        }
    }
    const restar = () => {
        if (cantidad === 1) {

            
        } else
        setCantidad (cantidad - 1)

    }

    const agregar = () => {
        onAdd(cantidad)
    }

  return (
    <div>
        <button className='btn btn-secondary mb-2' onClick={sumar}>+</button>
        <div className='mb-2 fontFamily'>{cantidad}</div>
        <button className='b-2 btn btn-secondary' onClick={restar}>-</button>
       <button className=' mt-3 btn btn-warning fw-bold fontFamily mb-2' onClick={agregar}>Agregar al carrito</button> 
    </div>
  )
}

export default ItemCount