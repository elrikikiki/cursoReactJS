import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { db } from '../../firebaseConfig.jsx/firebase'
import { Link } from 'react-router-dom'
const Form = () => {
    const {cart,totalPrecio, deleteAll} = useContext(CartContext)
    const totalCarrito= totalPrecio()
    const [orden, setOrden] = useState('')
    /* const datos = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }  */
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [addres,setAddres] = useState('')
    const [mail, setMail] = useState('')
    const [mail2, setMail2] = useState('')
   
    const handleName = (e) => {
        return setName(e.target.value) /* ese e.target.value es la forma de extraer los datos q el usuario pone en el input */
    }
    const handleLastName = (e) => {
        return setLastName(e.target.value) 
    }
    const handleAddres = (e) => {
        return setAddres (e.target.value)
    }
    const handleMail = (e) => {
        return setMail (e.target.value)
    }
    const handleMail2 = (e) => {
        return setMail2 (e.target.value)
    }
    const enviarDatos = (e) => { /* este esta relacionado con el onSubmit, aestos son los datos q envio a mi base de datos(firestore) */
        e.preventDefault();
        const objOrden= {
            comprador: {
                name,
                lastName,
                addres,
                mail,
                mail2
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp() /* le pongo la fecha que me da la base de datos, no la fecha de aca de react */
            
        } 
        const orderCollection = collection(db, 'ordenes')
        if ( name !== "" && lastName !== "" && mail === mail2 ) {
            addDoc(orderCollection, objOrden) /* fijate que addDoc(agregar documento) es una promesa, pero tmb usa el metodo post, o sea q le envio algo al servidor, no uso el getDoc para esto */
    .then((res)=> {
        console.log(res);
        deleteAll()
        setOrden(res.id)
    })
    .catch((error)=> {
        console.log(error);
    })
    .finally()
    } 
    else {
        alert("Por favor completar datos")
    }
        }
    if (orden) {
       return (
        <div className='container fontFamily mt-4 mb-4'>
            <h3>Compra realizada, tu orden de seguimiento es: <span className='fw-bold'>{orden}</span> </h3>
            <Link to='/'><button className='btn btn-success'> Volver al home</button></Link>
        </div> 
        )  
    }
    
    /* si pongo un if antes del return, lo q hace es que si mi condicion del if se cumple, se muestra ese id, sino se muestra el return de abajo */
  return (
    <div className='container mt-4 mb-4 fontFamily'>
        <p className='h4 fw-bold text-center'>Cheack-Out</p>
         <form action="" onSubmit={enviarDatos} >
            <input type="text" className='m-3 border border-2 border-dark' onChange={handleName} value={name} placeholder="Nombre" name="nombre"/>
            <input type="text" className='m-3 border border-2 border-dark' onChange={handleLastName} value={lastName} placeholder="Apellido" name="apellido"/>
            <input type="text" className='m-3 border border-2 border-dark' onChange={handleAddres} value={addres} placeholder="Dirección" name="direccion"/>
            <input type="mail" className='m-3 border border-2 border-dark' onChange={handleMail} value={mail} placeholder="Correo" name="mail"/>
            <input type="mail" className='m-3 border border-2 border-dark' onChange={handleMail2} value={mail2} placeholder="Correo" name="mail2"/>
            <button className='btn btn-secondary'>Enviar</button> {/* ya si hay un boton dentro del form, ya se envian bien los datos, xq esta puesto el OnSubmit */}
        </form> 
    </div>
  )
}

export default Form