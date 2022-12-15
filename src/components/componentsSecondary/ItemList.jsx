import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
    <div className='row'>
        {
            items.map ((product) => {
                return (
                  <div className='col-md-3 text-center mb-4' key={product.id}>
                    <Item  product={product}/> {/* //aca le paso las props o propertys y la keys con su id, para poder diferenciar cada producto */}
                    </div>
                    )
            })
        }
    
        </div>
  )
}
export default ItemList