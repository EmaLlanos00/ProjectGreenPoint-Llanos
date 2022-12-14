import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => { //Recibe por props valores para el counter y la función onAdd para el botón de compra.

    const [Value, setValue] = useState(initial)
    const lessProduct = () => {

        if (Value >= 1) {
            setValue(Value - 1);
        }
    }

    const moreProduct = () => {

        if (Value < stock) {
            setValue(Value + 1);
        }
    }

    return (
        <div /* className='flex justify-between flex-row-reverse  gap-3' */>
            <div className="flex flex-row justify-between w-11/12 m-auto">
                <button className="btn btn-square btn-outline" onClick={() => lessProduct()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13L18 13" /></svg>
                </button>
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
                {(Value === 0) ? <button className="btn btn-primary w-11/12" disabled>Agregar al carrito</button>
                    : <button className="btn btn-primary w-11/12" onClick={() => onAdd(Value)}>Agregar al carrito</button>}

            </div>
        </div>
    )
}

export default ItemCount