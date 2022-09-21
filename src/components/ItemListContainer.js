/* This example requires Tailwind CSS v2.0+ */
import ItemList from "./ItemList"
import products from "../utilities/products"
import { useEffect, useState } from "react"
import myFetch from "../utilities/myFetch"
import { useParams } from "react-router-dom"

export default function Example() {
  
  const [listProducts, setListProducts] = useState([])
  const { category } = useParams()
  
  useEffect(()=>{
  if(category == undefined){
    myFetch(products)
    .then(data=> setListProducts(data))}
    else if(category !== undefined){
      myFetch(products.filter(prod => prod.categories[category]==true))
      .then(data => setListProducts(data))
    }

  
}, [category])
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-evenly">
    <ItemList products={listProducts}/>
    </div>
  )
}