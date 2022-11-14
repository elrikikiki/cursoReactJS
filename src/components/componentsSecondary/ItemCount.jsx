import React, {useState} from 'react'

const ItemCount = ({stock,onAdd}) => {
    const [cantidad, setCantidad] = useState(1) /* El USE STATE hace q se modifique el ESTADO de mi variable, q en este caso es cantidad */;
    /*  useEffect(() => {
        console.log("me renderizo ultimo");
    },[])
    console.log("me renderizo primero");
     */
    const sumar = () => {
        if (cantidad >= stock) {
            /* el stock si necesita un props, xq va a variar */
        } else{
            setCantidad( cantidad + 1)
        }
    }
    const restar = () => {
        if (cantidad === 1) {
            /* Si la cantidad es igual a cero, acá no pongo nada, xq la idea es q no se ejecute nada, xq sino me va a dar -1 */
            /* el limite siempre va a ser 0, no hace falta hacer un props */
            
        } else
        setCantidad (cantidad - 1)
        /* Pero si la cantidad es mayor a cero, ahi si habilito para poder restar */
    }

    /* const [texto, setTexto] = useState('') */
    const agregar = () => {
        onAdd(cantidad) //asi le paso un valor de hijo a su padre
    }

    /* cuando trabajamos con eventos, tengo que pasar una arrow function desde un Componente hacia otro, lo hago mediente Props, pero si o si tiene q ser una
    arrow, asi se genera un call back de parámetros : Clase 9 a partir de 1:20hs mira como lo explica */
  return (
    <div>
        <div>
        <button className='btn btn-secondary mb-2' onClick={sumar}>+</button>
        <div className='mb-2 fontFamily'>{cantidad}</div>
        <button className='b-2 btn btn-secondary' onClick={restar}>-</button>
        </div>
       <button className=' mt-3 btn btn-warning fw-bold fontFamily mb-2' onClick={agregar}>Agregar al carrito</button>
       
       
    </div>
  )
}

export default ItemCount