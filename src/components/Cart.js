import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'
import CounterCart from './CounterCart';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utilities/firebaseConfig';

const Cart = () => {//Este componente mostrará la información alojada en context, array de carrito, y totales. 
    //Le agregué un contador con una lógica ligeramente distinta al contador de ItemDetail.

    const ctx = useContext(CartContext);


    const onAdd = (qty, id) => {

        const product = ctx.cartList.filter((item) => item.id == id);
        const newQty = product[0].quantity + qty;

        if (newQty !== 0) {

            const product = ctx.cartList.filter((item) => item.id == id)
            ctx.addItem(product[0], qty)
            ctx.saveCart();

        } else if (newQty === 0) {

            ctx.deleteItem(id);

        }
    }
    let itemsForDb = ctx.cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        stock: item.stock,
        quantity: item.quantity
    }))
    const createOrder = async () => {
        console.log('holaa')
        let order = {
            buyer: {
                name: 'comprador1',
                email: 'algun@email.com',
                phone: '464646464',
            },
            items: itemsForDb,
            date: serverTimestamp(),
            total: ctx.totalCost,
        }
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        itemsForDb.forEach(async (item) => {
            const updateItem = doc(db, "products", item.id)
            await updateDoc(updateItem, {
                stock: increment(-item.quantity)
            })
        })
        ctx.clearCart();
        console.log('Your order has been created. This is your ID\'s order:' + newOrderRef.id)
    }

    return (
        <>
            <div className="alert alert-info shadow-lg">
                {(ctx.cartList.length === 0) ? //Renderizado condicional: si no hay nada en el carrito, el componente será distinto.
                    <div className="w-full flex justify-between">
                        <div>
                            <span className='font-semibold text-lg'>Ups, tu carrito está vacío, hacé clic en "Comprar algo" y encontrá algo rico ;).</span>
                        </div>
                        <div>
                            <Link to={'/'}><button className="btn btn-primary">Comprar algo</button></Link>
                        </div>
                    </div>
                    :
                    <div className="w-full flex justify-between">{/* Más renderizado condicional */}
                        <div>
                            <span className='card-title'>Total: $ {ctx.totalCost},00</span>{(ctx.totalCost < 8000) ? <span>Recuerda que superando los $8000 tenés envío gratis.</span> : <span>Perfecto, ya tenés envíos gratis en tu compra.</span>}
                        </div>
                        <div>
                            <button className="btn btn-primary ml-3" onClick={() => createOrder()}>Finalizar compra</button>
                            <button className="btn btn-error ml-3" onClick={() => ctx.clearCart()}>Vaciar carrito</button>
                        </div>
                    </div>
                }
            </div>
            {
                ctx.cartList.map(item => <div key={item.id} className="card card-side bg-base-100 shadow-xl border border-gray-500/75 m-2">
                    <figure className="w-3/6 lg:w-1/6 max-w-[15rem] min-w-[5rem]"><img src={item.img} alt={item.title} /></figure>
                    <div className="card-body w-3/6 md:w-auto">
                        <h2 className="card-title">{item.title} (${item.price},00)</h2>
                        <p>{item.details}</p>
                        <p>Total: $ {item.price * item.quantity},00 (Por {item.quantity} unidades).</p>
                        <div className='flex justify-end'>
                            <div className='flex flex-col lg:flex-row justify-between gap-3 w-full'>
                                <div className="card-actions">
                                    <CounterCart stock={item.stock - item.quantity} initial={0} onAdd={onAdd} id={item.id} qty={item.quantity} />
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-error w-full md:w-3/6 lg:w-fit" onClick={() => ctx.deleteItem(item.id)}>Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
}

export default Cart