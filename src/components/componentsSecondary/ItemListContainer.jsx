import ItemList from "./ItemList"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import SyncLoader from "react-spinners/SyncLoader";
import {getDocs, query, where} from 'firebase/firestore'
import { collectionProd } from "../../firebaseConfig.jsx/firebase"
const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();
    const [cargando,setCargando] = useState(true) 
 
    useEffect(() => {
        const peticion = 
        categoryName ?
        query(collectionProd, where('category','==', categoryName)) :
        collectionProd
         getDocs(peticion)
        .then((res)=> { const products = res.docs.map((prod) => {

                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);})
        .catch((error)=> console.log(error))
        .finally(() => {
            setCargando(false) 
        }) 

     
        return () => setCargando(true)  
    }
 
    ,[categoryName]);
    
    if (cargando) { 
        return (
            <div className="container">
                <h2 className="fontFamily colorVerde text-center"><SyncLoader/></h2>
            </div>
        )
    }

    return (
        <div className="container">
            <h3 className="col-3 text-center mb-5 fontFamily fw-bold">
            {greeting}
        </h3>
                <div className="container fontFamily">
                    <ItemList items={items}/>
                </div>

        </div>
    )
}
export default ItemListContainer