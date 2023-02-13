
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";


import { GContext } from "../../context/CartContext";

import { BsTrash } from "react-icons/bs";

import "./CartItem.css";

const CartItem = ({ item, quantity }) => {

  const {removeItem} = useContext(GContext)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="CartItem">
      {loading ? (
            <div className="SpinnerContainer">
            <Spinner />
          </div>
      ):(
        <div className="CartSpecsContainer">
        <img className="CartItemImg" src={item.img} alt=""></img>
        <div className="DetailCart">
          <h5 className="ItemTitle">{item.title}</h5>
            <p>Talle:</p>
            <p>Cantidad: {quantity} </p>
          <p>Precio p/u: ${parseFloat(item.price).toFixed(2)} </p>
          <p>Precio total: ${parseFloat(item.price * quantity).toFixed(2)} </p>
        </div>
        <div>
          <p className="RemoveItem" onClick={()=>removeItem(item.id)}><BsTrash size={25}/></p>
          
        </div>
        
      </div>
      
      )
    }
      
    </section>
  );
};

export default CartItem;
