import { createContext, useState } from "react";

export const CartContext = createContext();
//Este es el contexto principal del proyecto, desde acá se gestiona la información relativa al carrito.
//Una particularidad de mi carrito es que quería evitar que se reinicie la SPA cuando se actualiza la página.
//Para lograr esto simplemente cree la variable CartFromStorage para interactuar con sessionStorage;
// si la variable existe, su contenido se imprime en el estado.
const CartContextProvider = ({ children }) => {
  const cartFromStorage = JSON.parse(sessionStorage.getItem('savedCart'));

  const [cartList, setCartList] = useState((cartFromStorage != null) ? cartFromStorage : []);

  const addItem = (product, qty, boolean) => {//Envía un elemento al array de context. Si elemento existe, solamente se actualizará su cantidad.
    const isInCart = boolean//Sí esta función es llamada desde el carrito, la cantidad de modificará de otra manera, para reutilizar la función (principio DRY).
    const itemsId = cartList.map(item => item.id);

    if (itemsId.includes(product.id)) {

      const item = cartList.find(item => item.id == product.id);
      const itemIndex = cartList.indexOf(item);
      isInCart ? cartList[itemIndex].quantity = qty : cartList[itemIndex].quantity += qty;  //Actualizando qty
      setCartList([...cartList]);

    } else {//Todos los objetos de cartList son objetos nuevos creados con los datos de product y quantity.

      let objQuantity = { quantity: qty };
      let newProduct = {
        ...product,
        ...objQuantity
      };
      cartList.push(newProduct);
      setCartList([...cartList]);

    }
  }

  const deleteItem = (id) => {//Borrando un item, guardando los cambios en storage.

    const item = cartList.find(item => item.id == id)
    const itemIndex = cartList.indexOf(item);
    cartList.splice(itemIndex, 1)
    setCartList([...cartList])
    saveCart();


  }

  const clearCart = () => {//Borrando todo el carrito seteando el length del array en 0, limpiando storage.

    cartList.length = 0
    setCartList([...cartList]);
    sessionStorage.clear();
  }

  const saveCart = () => {//Función para crear el par valor-clave del storage o re escribirlo. Para mis propósitos, manipular el localStorage no es necesario.

    sessionStorage.setItem('savedCart', JSON.stringify(cartList));

  }
  const totalQuantity = cartList.reduce((acc, item) => acc + item.quantity, 0)
  const totalCost = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartList, addItem, deleteItem, clearCart, saveCart, totalQuantity, totalCost }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;