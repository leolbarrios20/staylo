import React, { useContext } from "react";

import { GContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

import { GiShoppingCart } from "react-icons/gi";

import "../header/CartWidget.css";

import "../cart/CartListContainer";

export const CartWidget = () => {
  
  const { itemsCarrito, totalProducts } = useContext(GContext);

  return (
    <div className="CartWidgetContainer">
      <Link to="/cart" className="CartWidget">
        <GiShoppingCart size={35} color="white" />
        {itemsCarrito.length > 0 && (
          <>
            <div className="Circle"> {totalProducts()} </div>
          </>
        )}
      </Link>

    </div>
  );
};

export default CartWidget;
