import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
    <div className='fw-bold row'>ItemList
    <div className='col-4'>
        {
            items.map ((product) => {
                return (
                    <Item key={product.id} product={product}/> //aca le paso las props o propertys y la keys con su id, para poder diferenciar cada producto
                )
            })
        }
        
    </div>
    </div>
  )
}

export default ItemList