import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product}) => {
  return (
<div>
     
 <div className="card" key={product.id}>
    <img src={product.img} className="card-img-top" alt={product.title}/>
      <div className="card-body">
        <h5  className="card-title">{product.title}</h5>
          <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Tipo: {product.category}</p>
              <p className="card-text">Envase: {product.liters}</p>
          <Link to={`/detail/${product.id}`} className="btn btn-danger text-center">Ver detalle</Link> {/* //fijate si van los 2 puntitos */}
        </div>
      </div>
  </div>
  )
}

export default Item