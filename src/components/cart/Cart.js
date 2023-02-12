import React from "react";
import { useContext } from "react";
import { GContext } from "../../context/CartContext";
import CartItem from "./CartItem";

import "./Cart.css"

const Cart = () => {
    const {itemsCarrito} = useContext(GContext)
    return ( 
        <section className="Cart">
            
            {itemsCarrito.map(element => <CartItem item = {element.item} quantity = {element.quantity} />)}
            
            
        </section>

     );
}
 
export default Cart;