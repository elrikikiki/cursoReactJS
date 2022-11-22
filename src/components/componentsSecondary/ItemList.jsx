import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
    <div className='row'>
        {
            items.map ((product) => {
                return (
                  <div className='col-md-4 text-center' key={product.id}>
                    <Item  product={product}/> 
                    </div>
                    )
            })
        }
    
        </div>
  )
}
export default ItemList