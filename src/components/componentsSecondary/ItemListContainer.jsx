import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { getProducts,products } from "../mocks/products"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../header/Header"
const ItemListContainer = ({greeting}) => {
    /* const {greeting} = props */
    //PROMISE
    const [items, setItems] = useState([]);
 const {categoryName} = useParams();
 
    useEffect(() => {
        getProducts(categoryName)
        .then((res) => setItems(res))
        .catch((error) => error)
    },[categoryName]); //entre corchetes ponés para q se renderice el dom de nuevo, de acuerdo al parámetro o variable q le pasa ahí, eso hace q dependa de tal variable para q se vuelva a renderizar el DOM
    

    return (

        <div className="">

            <h3 className="col-3 text-center mb-5 fontFamily fw-bold">
            {greeting}
        </h3>
        <div className="container">
            <div className="row text-center">
                <h3>ItemList</h3>
                <div className="col">
                </div>
            </div>
                <div>
                    <ItemList items={items}/>
                </div>
        </div>

        </div>
    )
}
export default ItemListContainer