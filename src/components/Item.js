import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, id, description, price, img}) => {
    
  return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={img} alt={title} /></figure>
          <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <p> Cod. Num. 00{id}</p>
              <div className="badge badge-secondary">$ {price}</div>
              <ItemCount stock={Math.floor(Math.random() *20) + 5}/>
              {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar ahora</button>
              </div> */}
          </div>
      </div>
  )
}

export default Item