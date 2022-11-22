import React from 'react'
import ItemDetail from './ItemDetail'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  doc, getDoc } from 'firebase/firestore'
import { collectionProd } from '../../firebaseConfig.jsx/firebase'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {idProd} =  useParams()
    const [loading,setLoading] = useState(true);
    useEffect (() => {
  

        const ref = doc(collectionProd,idProd) 
        getDoc(ref)
        .then((res)=> {
          console.log(res)
          setItem(
            {
              id:res.id,
              ...res.data(),
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
    <div className='container'>
      ItemDetailContainer
    <h4>PRODUCTO SELECCIONADO</h4>
    <ItemDetail item={item}/>
    </div>
    
  )
}

export default ItemDetailContainer