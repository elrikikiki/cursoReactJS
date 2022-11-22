import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product}) => {

  return (
      <div key={product.id}>
        <div className='card'>
        <img src={product.img} className="imgResp" alt="" />
        <h5>{product.title}</h5>
        <p>${product.price}</p>
        <p> {product.category} </p>

      <p className='text-center'>
      <Link to={`/detail/${product.id}`} className="btn btn-danger text-center">Ver detalle</Link>
      </p>
      
        </div>
      </div>
  )
}

export default Item