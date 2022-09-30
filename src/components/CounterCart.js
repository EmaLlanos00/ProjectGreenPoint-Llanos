import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, deleteItem, onAdd, id, qty }) => { //Similar a itemCounter, este componente modifcará los valores del item, pero desde el carrito.

    const [Value, setValue] = useState(qty)
    const itemId = id


    const lessProduct = () => {

        if (qty >= 0) {
            qty -= 1
            setValue(qty)
            onAdd(qty, itemId)
        }
    }

    const moreProduct = () => {

        if (qty <= stock) {
            qty += 1
            setValue(qty)
            onAdd(qty, itemId)
        }
    }
    const cleanCounter = () => {//Función extra para limpiar el contador si se modifica el producto.
        setValue(0);
    }

    return (
        <div className='flex justify-between flex-row-reverse  gap-3'>
            <div className="flex flex-row justify-between w-11/12 m-auto">
                {(Value === -qty) ?
                    <button className="btn btn-square btn-outline" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13L18 13" /></svg>
                    </button>
                    : <button className="btn btn-square btn-outline" onClick={() => lessProduct()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13L18 13" /></svg>
                    </button>}

                <span className='text font-mono text-3xl mx-5'> {Value} </span>
                {(Value === stock) ?
                    <button className="btn btn-square btn-outline" disabled >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13L18 13 M12 7L12 19" /></svg>
                    </button>
                    : <button className="btn btn-square btn-outline" onClick={() => moreProduct()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13L18 13 M12 7L12 19" /></svg>
                    </button>
                }
            </div>
            <div className="card-actions justify-center">
                {(Value === 0) && <button className="btn btn-primary w-11/12" onClick={() => (deleteItem(itemId))}>Eliminar</button>}
            </div>
        </div>
    )
}

export default ItemCount