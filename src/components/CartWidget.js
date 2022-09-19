import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CartWidget = () => {
    return(
        <div className="indicator">
            <div className="w-7">
            <ShoppingCartIcon/>
            </div>
            <span className="indicator-item badge">8</span>
        </div>
    );
}

export default CartWidget;
