/* This example requires Tailwind CSS v2.0+ */
import ItemList from "./ItemList"
import products from "../utilities/products"
import { useEffect, useState } from "react"
import myFetch from "../utilities/myFetch"

export default function Example() {
  
  const [listProducts, setListProducts] = useState([])

  useEffect(( ) => {
    myFetch(products)
    .then(data => setListProducts(data))
    
  }, [])
  console.log(listProducts)
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-evenly">
    <ItemList products={listProducts}/>
    </div>
  )
}