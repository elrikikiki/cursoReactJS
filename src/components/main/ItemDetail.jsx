import React from 'react'
import ItemCount from '../componentsSecondary/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState (0)
    const onAdd = (qty) =>  {
        console.log(qty);
        setCantidad(qty)   
        addToCart(item,qty) 
    }
   
 return (
    
    <div className='fontFamily '>
        <h4>ItemDetail</h4>
        <div className="row">
            <div className="col-sm-2 p-2 bg-warning rounded">
                <img src={item.img} className="rounded imgResp" alt={item.title} />
                <p className='mt-1 fw-bold'>
                {item.title}
                    
                </p>
                <p>
                    Tipo: {item.category}
                </p>
                <p>
                   Precio: ${item.price}
                </p>
                <p>
                    Envase: {item.liters}
                </p>
                <p>
                    Stock: {item.stock}
                </p>
                <p className='text-center'>
                <Link to='/' className='btn btn-secondary fontFamily'>Volver</Link>
                </p>
            </div>
                {
                    cantidad === 0 

                    ? 
                    <div className="col-sm-2 mt-4">
                
                    <ItemCount stock = {item.stock} onAdd={onAdd}/>

                    </div> 

                    :
                    
                    <div className="col-sm-2 mt-4">
                        
                        {<ItemCount stock = {item.stock} onAdd={onAdd}/>}
                        <Link to='/cart'>
                        <button>Ir al carrito</button>
                        </Link>
                        <Link to='/'>
                        <button className='mt-4'>Seguir comprando</button>
                        </Link>
                        
                        <div className='fw-bold fontFamily'>Total: + {cantidad} {item.title}</div>
                    </div>
                }
        </div>

    </div>
  )
}

export default ItemDetail