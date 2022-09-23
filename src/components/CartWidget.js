import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {
    const ctx = useContext(CartContext);
    return(
        <div className="indicator">
            <div className="w-7">
            <ShoppingCartIcon/>
            </div>
            <span className="indicator-item badge">{ctx.cartList.reduce((acc, item)=> acc + item.quantity, 0)}</span>
        </div>
    );
}

export default CartWidget;
