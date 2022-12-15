import ItemList from "./ItemList"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import SyncLoader from "react-spinners/SyncLoader";
import {getDocs, query, where} from 'firebase/firestore'
import { collectionProd } from "../../firebaseConfig.jsx/firebase"
import Carrusel from "../header/Carrusel";
const ItemListContainer = ({img,img2,img3}) => {
    /* const {greeting} = props */
    //PROMISE
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();
    const [cargando,setCargando] = useState(true) /*Primero hacemos el estado de cargando, siempre arrancalo con true al rendering  */
 
    useEffect(() => {
        const peticion = 
        categoryName ?
        query(collectionProd, where('category','==', categoryName)) : /* ese category es el mismo q le pasaste a firestore */
        collectionProd
         getDocs(peticion)
        .then((res)=> { const products = res.docs.map((prod) => {
                    //console.log(prod);
                    //console.log(prod.data());
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);})
        .catch((error)=> console.log(error))
        .finally(() => {
            setCargando(false) /* lo q hace ese finally en false, es q cuando se carguen los productos en la pantalla, se corte el spinner tmb, entendes? o sea
            se renderiza el finally con los productos, por ende es lo q hace q se corte el loading o cargando.. */
        }) 

        /* getProducts(categoryName)
        .then((res) => setItems(res))
        .catch((error) => error)
        .finally(() => {
            setCargando(false); */ /* dsp le agregamos un finally para que la promesa, sin importar si fue al then o al catch, ejecute si o si lo del finally,
            pero lo ponemos en false. */
        /* } );  */


        return () => setCargando(true)    /* luego dentro del useEffect pero fuera de getProducts ponemos este return,
        q basicamente se ejecuta luego de q se ejecute x primera vez el useEffect, o algo asi */
    }
 
    ,[categoryName]); //entre corchetes ponés para q se renderice el dom de nuevo, de acuerdo al parámetro o variable q le pasa ahí, eso hace q dependa de tal variable para q se vuelva a renderizar el DOM
    
    if (cargando) { /* y dsp va este if, que lo q hace es ejecutarse antes que el return de abajo, y ahi pones que si
    cargando existe, o sea es true (fijate q el return anterior lo volvio a true) se va a ejecutar el FAMOSO CARGANDO */
        return (
            <div className="container">
                <h2 className="fontFamily colorVerde text-center"><SyncLoader/></h2>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <Carrusel img={img} img2={img2} img3={img3}/>
            <div className="container">
            <h3 className="text-center mt-5 mb-5 fontFamily text-center fw-bold">
            CATÁLOGO DE PRODUCTOS
            </h3>
                <div className="container fontFamily">
                    <ItemList items={items}/>
                </div>
            </div>
           
        </div>
    )
}
export default ItemListContainer