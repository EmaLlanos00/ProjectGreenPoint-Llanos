import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'


const Cart = () => {
    const ctx = useContext(CartContext);
    let total = ctx.cartList.reduce((acc,item)=> acc + item.price * item.quantity, 0);
    return (
        <>
            
            <div className="alert alert-info shadow-lg">
            { (ctx.cartList.length === 0) ?
                <div className="w-full flex justify-between">
                    <div>
                    <span>Hi, I'm a Cart. I currently have no content, but that'll change if you add some products here. Feel free to buy ;) .</span>
                    </div>
                    <div>
                        <Link to={'/'}><button className="btn btn-error">Comprar algo</button></Link>
                    </div>      
                </div>
                :
                <div className="w-full flex justify-between">
                    <div>
                    <span className='card-title'>Total: $ {total},00</span>{(total<6000) ? <span>Recuerda que superando los $6000 tenés envío gratis.</span> : <span>Perfecto, ya tenés envíos gratis en tu compra.</span>}
                    </div>
                    <div>
                        <button className="btn btn-error" onClick={()=>ctx.clearCart()}>Vaciar carrito</button>
                    </div>      
                </div>
                }
            </div>
            {
                ctx.cartList.map(item => <div key= {item.id} className="card card-side bg-base-100 shadow-xl">
                    <figure className="w-1/6"><img src={item.img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title} (${item.price},00)</h2>
                        <p>{item.details}</p>
                        <p>Total: $ {item.price * item.quantity},00 (Por {item.quantity} unidades).</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error" onClick={()=> ctx.deleteItem(item.id)}>Borrar</button>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
}

export default Cart