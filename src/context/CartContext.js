//useContext (Utiliza el contexto creado), createContext (Crear el contexto de la aplicacion) => react
import { useContext, createContext, useState } from "react";

//Crear el contexto
//Exportar el contexto creado
export const CartContext = createContext([]);

//Crear nuestra funcion para poder usar el context
//Podemos definirlo como un Hook Personalizado.
//Exportar la funcion que almacena el Hook useContext
export const useCartContext = () => useContext((CartContext));

//Crear el componente del contexto proveedor
 const CartProvider = ( {children} ) => {
  //Estado del CartProvider
  const [cart, setCart] = useState([]);

  const mostrarMensaje = () =>{
    console.log("Mensaje proveniente del proovedor del contexto");
  }

  //Funciones de nuestro CartProvider
  console.log(cart);
  


  const addToCart = (data) => { //Data no esta definida en CartContext, la definimos en ItemDetail. 

      console.log(data);


  };

  const cleanCart = () => {
    setCart([]);
  };


  /*

  
  const cartList = () =>{ 
    return cart
  }

  

  const itemsInCart = () =>{
    console.log(cart) 
  }

  const deleteFromCart = (id) => {
    const newList = cart.filter((e) => e.id !== id);
    setCart(newList);
  };

  

  
  const validateProduct = (id) => {
    if (cart.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  */

  //Render de mi CartProvider
  return (
    <CartContext.Provider value={{ cart, mostrarMensaje, addToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
