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
        if (mail===mail2) {
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
    else{
        alert("Los mails no coinciden")
    }
        }
    if (orden) {
       return (
        <div className='container'>
            <h3>Compra realizada, tu orden de seguimiento es: {orden}</h3>
            <Link to='/'><button> Volver al home</button></Link>
        </div> 
        )  
    }
    
    /* si pongo un if antes del return, lo q hace es que si mi condicion del if se cumple, se muestra ese id, sino se muestra el return de abajo */
  return (
    <div className='container'>
         <form action="" onSubmit={enviarDatos} >
            <input type="text" className='m-3' onChange={handleName} value={name} placeholder="Nombre" name="nombre"/>
            <input type="text" className='m-3' onChange={handleLastName} value={lastName} placeholder="Apellido" name="apellido"/>
            <input type="text" className='m-3' onChange={handleAddres} value={addres} placeholder="Dirección" name="direccion"/>
            <input type="mail" className='m-3' onChange={handleMail} value={mail} placeholder="Correo" name="mail"/>
            <input type="mail" className='m-3' onChange={handleMail2} value={mail2} placeholder="Correo2" name="mail2"/>
            <button>Enviar</button> {/* ya si hay un boton dentro del form, ya se envian bien los datos, xq esta puesto el OnSubmit */}
        </form> 
    </div>
  )
}

export default Form