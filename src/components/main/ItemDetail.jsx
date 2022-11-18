import React from 'react'
import ItemCount from '../componentsSecondary/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
const ItemDetail = ({item}) => {

    const {addToCart, cantidadDelProducto} = useContext(CartContext);
    const [cantidad, setCantidad] = useState (0)
    const onAdd = (qty) => /* ese qty equivale al parametro Cantidad q esta puesto en ItemCount, el hijo le paso al padre el parametro, pero le pones otro nombre para
    que no se pise con el nombre cantidad de este useState */  {
        console.log(qty);
        setCantidad(qty)   
        addToCart(item,qty) 
    }
    const cantidad1= cantidadDelProducto(item.id) /* ese item.id es el parametro q pase en cartContext pa */
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
                    //aca quiero q siga todo igual
                    ? 
                    <div className="col-sm-2 mt-4">
                
                    <ItemCount stock = {item.stock} onAdd={onAdd} initial={cantidad1}/>

                    </div> 
                //de lo contrario
                    :
                    
                    <div className="col-sm-2 mt-4">
                        
                        {<ItemCount stock = {item.stock} onAdd={onAdd}/>}
                        <Link to='/cart'>
                        <button>Ir al carrito</button>
                        </Link>
                        <div className='fw-bold fontFamily'>Total: {cantidad} {item.title}</div> {/* //aca tendrias q poner el {texto} con un nuevo use state */}
                    </div>
                }
        </div>

    </div>
  )
}

export default ItemDetail