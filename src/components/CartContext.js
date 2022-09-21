import { createContext, useState } from "react";

 export const CartContext = createContext();
 
 
 const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const addItem = (product, qty) => {
     
      const itemsId = cartList.map(item=>item.id)
      console.log(itemsId)
      if(itemsId.includes(product.id)){
        console.log('producto ya incluido')
        const item = cartList.find(item=>item.id==product.id)
        const itemIndex = cartList.indexOf(item);
        console.log(cartList[itemIndex].quantity = cartList[itemIndex].quantity + qty)
      }else{
        console.log('producto no existía')
        let objQuantity = {quantity: qty}
        let newProduct = {
            ...product,
            ...objQuantity
        }
        setCartList([...cartList, newProduct])

      }
    }
    const deleteItem = (id) => {
  
        const item = cartList.find(item=>item.id==id)
        const itemIndex = cartList.indexOf(item);
        cartList.splice(itemIndex, 1)
        setCartList([...cartList])

        /* setCartList(cartList.filter((item)=>item.id!=id)) */
        
    }
    const clearCart = () => {
      setCartList([]);
    }
   return (
     <CartContext.Provider value={{cartList, addItem, deleteItem, clearCart}}>
        {children}
     </CartContext.Provider>
   );
 }
 
 export default CartContextProvider;