import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({ data }) => {
  console.log(data)
  
    if(data.title != undefined){
      return(
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className='w-full lg:w-3/6'><img className="object-contain" src={data.img} alt={data.title} /></figure>
      <div className="card-body bg-base-100">
        <h2 className="card-title">{data.title}</h2>
        <span className=" font-semibold"> Cod. Num. 00{data.id}</span>
        <p><span className=" font-semibold">Detalles:</span> {data.details}</p>
        <p><span className=" font-semibold">Origen:</span> {data.origin}</p>
        <p><span className=" font-semibold">Beneficios:</span> {data.benefits}</p>
        <p><span className=" font-semibold">Información nutricional:</span> {data.nutritionalFacts}</p>
        <div className="badge badge-lg badge-secondary">$ {data.price},00</div>
        <ItemCount stock={Math.floor(Math.random() * 20) + 5} />
      </div>
    </div>
    )
  }
  
}

export default ItemList