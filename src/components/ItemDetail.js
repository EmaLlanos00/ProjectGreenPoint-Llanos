import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({ data }) => {
  console.log(data)
  
    if(data.title != undefined){
      return(
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={data.img} alt={data.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p> Cod. Num. 00{data.id}</p>
        <p>{data.details}</p>
        <div className="badge badge-secondary">$ {data.price}</div>
        <ItemCount stock={Math.floor(Math.random() * 20) + 5} />
      </div>
    </div>
    )
  }
  
}

export default ItemList