import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({title, id, description, price, img}) => {
    
  return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <Link to={`/item/${id}`}><figure><img src={img} alt={title} /></figure></Link>
          <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <p> Cod. Num. 00{id}</p>
              <div className="flex justify-between place-items-center">
              <div className="badge badge-lg badge-secondary">$ {price},00</div>
              <Link to={`/item/${id}`}><button className="btn btn-primary">Ver más</button></Link>
              </div>
          </div>
      </div>
  )
}

export default Item