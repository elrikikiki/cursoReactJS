import React from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../mocks/products'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) //Ahi van llaves vacías xq se trata de un objeto el que queres traer, no un array de objetos, se entiende? 
    const {idProd} =  useParams()
    useEffect (() => {
        const getProduct = () => {
            return new Promise ((res,rej) => {
                const productoFind = products.find((jugador) => jugador.id === idProd )
              /*   const reference = idProd ? productoFind :   esto asi no va, no hace falta en este caso*/
                setTimeout(() => {
                    res(productoFind)
                }, 2000);
                
            })
            
        };
        getProduct()
        .then((res) => setItem(res))
        .catch((error) => console.log(error))
    },[idProd])
  return (
    <div className='container'>ItemDetailContainer
   
    <ItemDetail item={item}/>
    </div>
    
  )
}

export default ItemDetailContainer