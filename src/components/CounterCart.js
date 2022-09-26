import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd, id, qty }) => { //Similar a itemCounter, este componente modifcará los valores del item, pero desde el carrito.

    const [Value, setValue] = useState(initial)
    const itemId = id
    const lessProduct = () => {

        if (Value > - qty) {//El contador está limitado entre el valor del quantity negativo (por este if) y el valor del stock menos quantity (por props).
            setValue(Value - 1);
        }
    }

    const moreProduct = () => {

        if (Value < stock) {
            setValue(Value + 1);
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

                <span className='text font-mono text-3xl'> {Value} </span>
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
                {(Value === 0) ? <button className="btn btn-primary w-11/12" disabled>Modificar producto</button>
                    : <button className="btn btn-primary w-11/12" onClick={() => { onAdd(Value, itemId); cleanCounter() }}>Modificar producto</button>}
                {/* La función onAdd de este componente recibe 2 parámetros, y el onClick ejecuta, además una limpieza del contador. */}
            </div>
        </div>
    )
}

export default ItemCount