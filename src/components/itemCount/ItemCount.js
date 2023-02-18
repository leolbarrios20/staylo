import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd, product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [countProducts, setCountProducts] = useState(initial);

  const add = () => {
    if (countProducts < stock) {
      setCountProducts(countProducts + 1);
    }
  };

  const subtract = () => {
    if (countProducts > 0) {
      setCountProducts(countProducts - 1);
    }
  };

  return (
    <div className="CountContainer">
      <div className="BoxCount">
        <button className="Subtract" onClick={subtract}>
          -
        </button>
        <span>{countProducts}</span>
        <button className="Add" onClick={add}>
          +
        </button>
      </div>
      <div>
        <Button
          onClick={handleShow}
          disabled={countProducts === 0}
          className="OnAdd"
          variant="dark"
        >
          Agregar al Carrito <AiOutlineShoppingCart size={23} />
        </Button>
      </div>

      <>
        <Modal className="Modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="ModalTitle">
              Deseas agregar este producto al carrito?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <p>
              Producto: <span>{product.title}</span>{" "}
            </p>
            <p>
              Cantidad: <span>{countProducts}</span>{" "}
            </p>
            <p>
              Precio p/u: <span>${parseFloat(product.price).toFixed(2)}</span>{" "}
            </p>
            <p>
              Precio total:{" "}
              <span>
                ${parseFloat(product.price * countProducts).toFixed(2)}
              </span>{" "}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Cancelar
            </Button>
            <div onClick={() => onAdd(countProducts)}>
              <Button variant="success" onClick={handleClose}>
                Agregar
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

//Exports
export default ItemCount;
