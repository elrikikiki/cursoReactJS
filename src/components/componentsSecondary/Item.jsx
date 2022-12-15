import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product}) => {

  return (
      <div key={product.id}>
        <div className='card'>
        <img src={product.img} className="imgResp" alt="" />
        <h5 className='mt-2'>{product.title}</h5>
        <p className='fw-bold mt-2'>${product.price}</p>
        <p className='p-2 text-white bg-success'>#{product.category} </p>

      <p className='text-center'>
      <Link to={`/detail/${product.id}`} className="btn btn-danger text-center">Ver</Link>
      </p>
       {/* //fijate si van los 2 puntitos */}
      
        </div>
      </div>
  )
}

export default Item