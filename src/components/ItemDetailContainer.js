import ItemDetail from "./ItemDetail"
import products from "../utilities/products"
import { useEffect, useState } from "react"
import myFetch from "../utilities/myFetch"

const ItemDetailContainer = () => {
  
  const [singleProd, setSingleProd] = useState({})

  useEffect(( ) => {
    myFetch(products[3])
    .then(data => setSingleProd(data))
    
  }, [])
  
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-evenly">
    <ItemDetail data={singleProd}/>
    </div>
  )
}
export default ItemDetailContainer;