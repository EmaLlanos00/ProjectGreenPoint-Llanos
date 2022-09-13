import React from 'react'
import Item from "./Item"

const ItemList = ({products}) => {
    console.log(products)
  return (
    <>{products.map( (product) =>(
        <Item title={product.title} id={product.id} description={product.details} price={product.price} img={product.img}/>
    ))}</>
  )
}

export default ItemList