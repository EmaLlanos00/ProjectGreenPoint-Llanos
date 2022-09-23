import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
  const cartFromStorage = JSON.parse(sessionStorage.getItem('savedCart'));
  console.log(cartFromStorage)
  const [cartList, setCartList] = useState((cartFromStorage != null) ? cartFromStorage : []);
  const addItem = (product, qty) => {

    const itemsId = cartList.map(item => item.id)

    if (itemsId.includes(product.id)) {
      console.log('ya incluido, debe guardarse en storage')
      const item = cartList.find(item => item.id == product.id)
      const itemIndex = cartList.indexOf(item);
      cartList[itemIndex].quantity = cartList[itemIndex].quantity + qty
      setCartList([...cartList])

    } else {
      console.log('nuevo, debe guardarse en storage')
      let objQuantity = { quantity: qty }
      let newProduct = {
        ...product,
        ...objQuantity
      }
      cartList.push(newProduct)
      setCartList([...cartList])

    }
  }
  const deleteItem = (id) => {

    const item = cartList.find(item => item.id == id)
    const itemIndex = cartList.indexOf(item);
    cartList.splice(itemIndex, 1)
    setCartList([...cartList])
    saveCart();
    /* setCartList(cartList.filter((item)=>item.id!=id)) */

  }
  const clearCart = () => {
    cartList.length = 0
    setCartList([...cartList]);
    sessionStorage.clear();
  }
  const saveCart = () => {
    sessionStorage.setItem('savedCart', JSON.stringify(cartList))
  }
  return (
    <CartContext.Provider value={{ cartList, addItem, deleteItem, clearCart, saveCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;