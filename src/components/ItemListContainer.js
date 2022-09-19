/* This example requires Tailwind CSS v2.0+ */
import ItemList from "./ItemList"
import products from "../utilities/products"
import { useEffect, useState } from "react"
import myFetch from "../utilities/myFetch"
import { useParams } from "react-router-dom"

export default function Example() {
  
  const [listProducts, setListProducts] = useState([])
  const { category } = useParams()
  console.log('hola')
  console.log(category)
  
  useEffect(( ) => {
    if(category == undefined){
      console.log('first') 
    myFetch(products)
    .then(data => setListProducts(data))}
    else if (category == 'vegan'){
      myFetch(products.filter(prod => prod.categories.vegan==true))
      .then(data => setListProducts(data))
    }else if(category == 'nuts'){
      myFetch(products.filter(prod => prod.categories.nuts==true))
      .then(data => setListProducts(data))
    }else if(category == 'frozen'){
      myFetch(products.filter(prod => prod.categories.frozen == true))
        .then(data => setListProducts(data))
    }else if (category == 'celiac'){
      myFetch(products.filter(prod => prod.categories.celiac == true))
      .then(data => setListProducts(data))
    }else if (category == 'breakfast'){
      myFetch(products.filter(prod => prod.categories.breakfast == true))
      .then(data => setListProducts(data))
    }
    
  }, [category])
  console.log(listProducts)
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-evenly">
    <ItemList products={listProducts}/>
    </div>
  )
}