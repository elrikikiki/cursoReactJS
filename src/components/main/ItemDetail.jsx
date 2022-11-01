import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../componentsSecondary/ItemCount'
import { Link } from 'react-router-dom'
const ItemDetail = ({item}) => {

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
            <div className="col-sm-2 mt-4">
                <ItemCount stock = {item.stock}/>
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail