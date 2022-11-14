import React from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../mocks/products'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) //Ahi van llaves vacías xq se trata de un objeto el que queres traer, no un array de objetos, se entiende? 
    const {idProd} =  useParams()
    const [loading,setLoading] = useState(true);
    useEffect (() => {
        const getProduct = () => {
            return new Promise ((res,rej) => {
                const productoFind = products.find((jugador) => jugador.id === idProd )
              /*   const reference = idProd ? productoFind :   esto asi no va, no hace falta en este caso*/
                setTimeout(() => {
                    res(productoFind)
                }, 500);
                
            })
            
        };
        getProduct()
        .then((res) => setItem(res))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false)
        })
        return () => setLoading(true)
    },[idProd])

    if (loading) {
      return(
<div className='container'>
        <h3 className='fontFamily green mt-4 mb-4'>CARGANDO</h3>
      </div>
      ) 
    }

  return (
    <div className='container'>
      ItemDetailContainer
    <h4>PRODUCTO SELECCIONADO</h4>
    <ItemDetail item={item}/>
    </div>
    
  )
}

export default ItemDetailContainer