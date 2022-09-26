import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../contexts/CartContext'
import ItemLoader from '../utilities/ItemLoader'
import DataLoader from '../utilities/DataLoader'
import ButtonLoader from '../utilities/ButtonLoader';

const ItemDetail = ({ data }) => {//Los datos obtenidos desde su componente padre se imprimen en un card.

  const [itemCount, setItemCount] = useState(0);
  const ctx = useContext(CartContext);

  const onAdd = (qty) => {//Función que se ejecuta en el hijo ItemCounter, el objetivo es obtener los datos del contador para renderizado y montaje del array de carrito.

    ctx.addItem(data, qty);
    toast('Se han agregado ' + qty + ' productos al carrito!');
    setItemCount(qty);
    ctx.saveCart();

  }

  return (
    (data.title != undefined) ? //Mientras los datos no lleguen, se mostrará una pantalla de carga (ver línea 62).
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='w-full lg:w-3/6'><img className="object-cover" src={data.img} alt={data.title} /></figure>
        <div className="card-body bg-base-100">

          <h2 className="card-title">{data.title}</h2>
          <span className="font-semibold"> Cod. Num. 00{data.id}</span>
          <p><span className="font-semibold">Detalles:</span> {data.details}</p>
          <p><span className="font-semibold">Origen:</span> {data.origin}.</p>
          <p><span className="font-semibold">Beneficios:</span> {data.benefits}</p>
          <p><span className="font-semibold">Usos/preparación:</span> {data.uses}</p>
          <p><span className="font-semibold">Información nutricional:</span> {data.nutritionalFacts}</p>
          {/* En la línea 40, si no hay stock, se avisará con un badge en color rojo. No se podrá hacer la compra. */}
          <p><span className="font-semibold">Stock:</span> {data.stock === 0 ? <span className="badge badge-lg badge-error">SIN STOCK</span> : <>{data.stock} u.</>}</p>
          <div className="badge badge-lg badge-secondary">$ {data.price},00</div>

          {(itemCount === 0) ? //ItemCount y su renderizado condicional.
            <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd} />
            : <Link to={"/cart"}><button className="btn btn-info w-full">Ver compra</button></Link>

          }
        </div>
        <ToastContainer //Toast que aparece cuando se agregue algo al carrito, provee una mejor interfaz para el usuario.
          toastStyle={{ backgroundColor: '#3ABFF8', color: 'black' }}
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
      : <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='w-full lg:w-3/6'><ItemLoader /></figure>

        <div className="card-body bg-base-100 flex flex-col justify-between">
          <ButtonLoader />
          <DataLoader />
          <DataLoader />
          <ButtonLoader />
        </div>
      </div>
  )


}

export default ItemDetail