import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const CartWidget = () => {
    const ctx = useContext(CartContext);
    return (
        <div className="indicator">
            <div className="w-7">
                <ShoppingCartIcon />
            </div>
            <span className="indicator-item badge">{ctx.totalQuantity}</span>
        </div>
    );
}

export default CartWidget;
