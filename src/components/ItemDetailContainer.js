import ItemDetail from "./ItemDetail"
import products from "../utilities/products"
import { useEffect, useState } from "react"
import myFetch from "../utilities/myFetch"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  
  const [singleProd, setSingleProd] = useState({})
  const { id } = useParams()
  console.log(id)
  useEffect(( ) => {
    myFetch(products.find(prod => prod.id == id))
    .then(data => setSingleProd(data))
    
  }, [])
  
  return (
    <div className="w-8/12 flex justify-center m-auto">
    <ItemDetail data={singleProd}/>
    </div>
  )
}
export default ItemDetailContainer;