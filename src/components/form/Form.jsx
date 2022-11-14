import React from 'react'
import { useState } from 'react'
const Form = () => {
    /* const datos = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    } */
    /* const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [texto, setTexto] =useState('');
    const handleName = (e) => {
        return setName(e.target.value)
        
    }
    const handleLastName = (e) => {
        return setLastName(e.target.value) 
    }
    const enviarDatos = (e) => {
        e.preventDefault();
        const obj= {
            comprador: {
                nombre: name,
                apellido: lastName
            }
        }
    } 
    console.log(name);
    const onAdd = () => {
        if (name) {
            setTexto(name)
        }else{

        }
    }
    console.log(lastName); */
    
  return (
    <div className='container'>
        {/* <form action="" onSubmit={enviarDatos} >
            <input type="text" className='m-3' onChange={handleName} value={name} placeholder="Nombre" name="nombre"/>
            <input type="text" className='m-3' onChange={handleLastName} value={lastName} placeholder="Apellido" name="apellido"/>
            <button onClick={onAdd}>Enviar</button>
            <div>{texto}</div>
        </form> */}
    </div>
  )
}

export default Form