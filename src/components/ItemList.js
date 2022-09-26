import React from 'react'
import ItemsLoader from '../utilities/ItemsLoader'
import Item from "./Item"

const ItemList = ({ products }) => {//ItemList envía por props los datos de productos. Pero si los datos están en espera renderiza un svg que simula la carga del contenido.

  return ((products.length != 0) ?
    <>{products.map((product) => (
      <Item title={product.title} id={product.id} description={product.details} price={product.price} img={product.img} key={product.id} stock={product.stock} />
    ))}</>
    : <ItemsLoader />
  )
}

export default ItemList