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
{      /*
<Offcanvas  className="OffCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header className="OffCanvasHeader" >
          <Offcanvas.Title className="OffCanvasTitle">Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="OffCanvasBody">
          {itemsCarrito.length > 0 ? (
            <div>
              <section className="Cart">
                {itemsCarrito.map((element) => (
                  <CartItem
                    key={element.item.id}
                    item={element.item}
                    quantity={element.quantity}
                  />
                ))}
              </section>
              <p>Total a pagar : ${getTotal()} </p>
              <div className="ClearCartButton">
              <Link className="AddMoreProducts" onClick={handleClose}  to="/products">Agregar mas productos</Link>
                <Button  variant="dark" onClick={() => clear()}>
                  Vaciar carrito
                </Button>
                
              </div>
              <div className="GoToPay">
                <Link >
                  <Button variant="success">Ir a pagar</Button>
                </Link>
              </div>
              
            </div>
          ) : (
            <div className="EmptyCart">
              <p className="mb-0 OffCanvasP">
                El carrito de compras se encuentra vacio
              </p>
              <Link className="AddMoreProducts" onClick={handleClose} to="/products">
                <Button variant="dark" >Agregar Productos</Button>
                </Link>
                
            </div>
            
          )}
        </Offcanvas.Body>
          </Offcanvas>*/}
    </div>
  );
};

export default CartWidget;
