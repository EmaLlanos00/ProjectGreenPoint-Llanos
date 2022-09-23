import React from 'react'
import ItemsLoader from '../utilities/ItemsLoader'
import Item from "./Item"

const ItemList = ({products}) => {
  return ( (products.length != 0) ?
    <>{products.map( (product) =>(
        <Item title={product.title} id={product.id} description={product.details} price={product.price} img={product.img} key={product.id}/>
    ))}</>
    : <ItemsLoader/>
  )
}

export default ItemList