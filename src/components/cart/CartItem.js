import React, { useContext } from "react";

import { GContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";

import "./CartItem.css";

const CartItem = ({ item, quantity }) => {
  const { removeItem } = useContext(GContext);

  /*
  const [quantityItem, setQuantityItem] = useState(quantity);

  const add = () => {
    setQuantityItem(quantityItem + 1);
    console.log(quantity);
  };

  const subtract = () => {
    if (quantityItem > 0) {
      setQuantityItem(quantityItem - 1);
    }
    if (quantityItem < 2) {
      removeItem(item.id);
    }
  };
*/
  return (
    <section className="CartItem">
      <div className="CartSpecsContainer">
        <div className="CartFlex">
          <img className="CartImg" alt="" src={item.img}></img>
          <div className="CartDetailFlex">
            <h6>Producto: {item.title} </h6>
            <h6>Precio p/u: ${item.price} </h6>
            <h6>Precio total: ${item.price * quantity} </h6>
            <h6> {item.description} </h6>
            <div className="QuantityFlex">
              <p>Cantidad: {quantity} </p>
              <BsTrash size={25}
                className="RemoveItem"
                onClick={() => removeItem(item.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
