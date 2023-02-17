import { createContext, useState } from "react";
export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setItemsCarrito(
        itemsCarrito.splice(
          itemsCarrito.findIndex((element) => element.item.id === item.id),
          1
        )
      );
    }
    setItemsCarrito([...itemsCarrito, { item, quantity }]);
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };

  const clear = () => {
    setItemsCarrito([]);
  };

  const removeItem = (itemId) => {
    setItemsCarrito(
      itemsCarrito.filter((element) => element.item.id !== itemId)
    );
  };

  const totalProducts = () => {
    const totalProducts = itemsCarrito.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    return totalProducts;
  };

  const getTotal = () => {
    let total = 0;
    itemsCarrito.forEach((e) => (total += e.quantity * e.item.price));
    return total;
  };

  return (
    <GContext.Provider
      value={{
        itemsCarrito,
        addItem,
        clear,
        totalProducts,
        removeItem,
        getTotal,
      }}
    >
      {children}
    </GContext.Provider>
  );
};

export default CartContext;
