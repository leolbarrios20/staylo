import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../header/CartWidget.css";
import { Nav } from "react-bootstrap";

export const CartWidget = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


    <div className="CartWidgetContainer">
      <Link onClick={handleShow} className="CartWidget">
        <GiShoppingCart size={35} color="white" />
        <div className="Circle"> {props.amount} </div>
        <p>Ver carrito</p>
      </Link>
      <Offcanvas className="OffCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header className="OffCanvasHeader" closeButton>
          <Offcanvas.Title className="OffCanvasTitle">Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="OffCanvasBody">
          <p className="mb-0 OffCanvasP">El carrito de compras está vacio</p>
          <Nav.Link className="OffCanvasLink" href="/#/products">
            Volver a la tienda
          </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartWidget;
