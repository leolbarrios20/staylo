import React, { useContext } from "react";

import { GContext } from "../../context/CartContext";

import { Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

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
    <section className="row col-lg-4 col-md-6 col-sm-12 mx-auto">
      <Card className="Card">
        <Card.Title className="CardTitle">{item.title}</Card.Title>
        <Card.Img className="Image" src={item.img} />
        <Card.Body>
          <div className="QuantityFlex">
            <Card.Text className="CardPriceBefore">
              Antes: {item.priceBefore}{" "}
            </Card.Text>
            <FaTrash
              size={25}
              className="RemoveItem"
              onClick={() => removeItem(item.id)}
            />
          </div>
          <Card.Text className="CardPrice">${item.price.toFixed(2)} </Card.Text>
          <h6> {item.description} </h6>
          <Card.Text className="CardDesc"> </Card.Text>
          <div className="QuantityFlex">
            <h6>Cantidad: {quantity} </h6>
            <h6>Total: ${item.price * quantity} </h6>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CartItem;
