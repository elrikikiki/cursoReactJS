import React from 'react'
import ItemDetail from './ItemDetail'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  doc, getDoc } from 'firebase/firestore'
import { collectionProd } from '../../firebaseConfig.jsx/firebase'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) //Ahi van llaves vacías xq se trata de un objeto el que queres traer, no un array de objetos, se entiende? 
    const {idProd} =  useParams()
    const [loading,setLoading] = useState(true);
    useEffect (() => {
   /*      const getProduct = () => {
            return new Promise ((res,rej) => {
                const productoFind = products.find((jugador) => jugador.id === idProd ) */
              /*   const reference = idProd ? productoFind :   esto asi no va, no hace falta en este caso*/
                /* setTimeout(() => {
                    res(productoFind)
                }, 500);
                
            })
            
        };
        getProduct()
        .then((res) => setItem(res))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false)
        }) */

        const ref = doc(collectionProd,idProd) /* esto es lo q cambia, tengo q usar el metodo doc para traer UN solo objeto */
        getDoc(ref)
        .then((res)=> {
          console.log(res)
          setItem(
            {
              id:res.id,
              ...res.data(),/* con el data, te ahorras de hacer un find, o de mapear, pero acordate que esto es solo cuando usas firebase */
            }
          )
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(()=> {
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
    <div className='container mt-5 mb-5'>
    <ItemDetail item={item}/>
    </div>
    
  )
}

export default ItemDetailContainer