import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../header/CartWidget.css";

export const CartWidget = (props) => {
  return (
    <div className="CartWidgetContainer">
      <Link to="/cart" className="CartWidget">
        <GiShoppingCart size={35} color="white" />
        <div className="Circle"> {props.amount} </div>
        <p>Ver carrito</p>
      </Link>
    </div>
  );
};

export default CartWidget;
