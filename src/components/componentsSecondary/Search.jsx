import { useState } from "react"
import axios from "axios"
import { products } from "../mocks/products";
import { useEffect } from "react";
const Search = () => {
    const [products1, setProducts1] = useState([]);
    const [tableProducts, setTableProducts] = useState([]);
    const [search1,setSearch1] = useState("");

    useEffect(() => {
        const getProductsTable = () => {
            return new Promise ((res,rej) => {
                res(products)
            })
        }
    
            getProductsTable()
            .then((res) => setProducts1(res))
            .catch((error) => console.log(error))
    

    },[])
    
  return (
    <div>Search</div>
  )
}

export default Search