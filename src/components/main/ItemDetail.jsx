import React from 'react'
import ItemCount from '../componentsSecondary/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState (0)
    const onAdd = (qty) => /* ese qty equivale al parametro Cantidad q esta puesto en ItemCount, el hijo le paso al padre el parametro, pero le pones otro nombre para
    que no se pise con el nombre cantidad de este useState */  {
        console.log(qty);
        setCantidad(qty)   
        addToCart(item,qty) 
    }
   
 return (
    
    <div className='fontFamily '>
        <div className="row justify-contente-center">
            <div className="col-md-5">
                <img src={item.img} className='detailResp' alt="" />
            </div>
            <div className="col-md-5 border-3 border pt-3">
                <p className='h3 fw-bold mb-3'>{item.title}</p>
                <p className='h4 fw-bold mb-3 ps-3'>${item.price}</p>
                <p className=' fw-bold mb-3 ps-3'>Stock: {item.stock}</p>
                <p className=' fw-bold mb-3 ps-3'>#{item.category}</p>
            </div>
                {
                    cantidad === 0 
                    //aca quiero q siga todo igual
                    ? 
                    <div className="col-sm-2 mt-4">
                
                    <ItemCount stock = {item.stock} onAdd={onAdd}/>

                    </div> 
                //de lo contrario
                    :
                    
                    <div className="col-sm-2 mt-4">
                        
                        {<ItemCount stock = {item.stock} onAdd={onAdd}/>}
                        <Link to='/cart'>
                        <button className='btn btn-secondary mt-4 marginCelu'>Ir al carrito</button>
                        </Link>
                        <Link to='/'>
                        <button className='btn btn-secondary mt-4'>Seguir comprando</button>
                        </Link>
                        
                        <div className='fw-bold fontFamily mt-3'>Total: + {cantidad} {item.title}</div> {/* //aca tendrias q poner el {texto} con un nuevo use state */}
                    </div>
                }
        </div>

    </div>
  )
}

export default ItemDetail