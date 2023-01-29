//useContext (Utiliza el contexto creado), createContext (Crear el contexto de la aplicacion) => react
import { useContext, createContext, useState } from "react";

//Crear el contexto
//Exportar el contexto creado
export const CartContext = createContext([]);

//Crear nuestra funcion para poder usar el context
//Podemos definirlo como un Hook Personalizado.
//Exportar la funcion que almacena el Hook useContext
export const useCartContext = () => useContext(CartContext);

//Crear el componente del contexto proveedor
const CartProvider = ({ children }) => {
  //Estado del CartProvider
  const [items, setItems] = useState([]);

  //Funciones de nuestro CartProvider
  console.log(items);

  /*

  const cartList = () =>{
    return items
  }

  const itemsInCart = () =>{
    return items.length
  }
*/
  const addToCart = (data) => {
    if (validateProduct(data.id)) {
      alert("El producto ya esta en el carrito");
    } else {
      const currentList = items;
      currentList.push(data);
      setItems(currentList);
      console.log(items);
    }
  };

/*

  const deleteFromCart = (id) => {
    const newList = items.filter((e) => e.id !== id);
    setItems(newList);
  };

  const cleanCart = () => {
    setItems([]);
  };

*/ 
  
  const validateProduct = (id) => {
    if (items.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  //Render de mi CartProvider
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
