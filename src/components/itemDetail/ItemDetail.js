import "./ItemDetail.css";

import Cabal from "../assets/img/cabal.png";
import MasterCard from "../assets/img/mastercard.png";
import TarjetShopping from "../assets/img/tarjeta-shopping.png";
import Naranja from "../assets/img/naranja.png";
import Visa from "../assets/img/visa.png";
import Maestro from "../assets/img/maestro.png";
import PagoFacil from "../assets/img/pagofacil.png";
import RapiPago from "../assets/img/rapipago.png";

import Select from "react-select";
import { GContext } from "../../context/CartContext";

import React, { useState, useEffect, useContext } from "react";

import ItemCount from "../itemCount/ItemCount";
import ItemSizes from "../itemSizes/ItemSizes";
import ItemHeart from "../itemHeart/ItemHeart";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

const ItemDetail = ({ item }) => {
  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const { addItem } = useContext(GContext);

  const onAdd = (cant) => {
    addItem(item, cant);
  };

  function CoolPage() {
    return (
      <div>
        <ScrollToTop smooth />
      </div>
    );
  }
  //useState de bootstrap react, para Modal.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //////////////////////////////////////////////////////

  //useState para loader.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  //useState para form en talle.

  const [selectedSizes, setSelectedSizes] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSizes(value);
  };

  const sizes = [
    { label: "S", value: "Small" },
    { label: "M", value: "Medium" },
    { label: "L", value: "Large" },
    { label: "XL", value: "Extra Large" },
    { label: "XXL", value: "Extra Extra Large" },
  ];

  return (
    <div>
      {ScrollToTop()}
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <section>
          <article className="Container container row mx-auto">
            {/* 
          <div className="ColumnImage">
          <Link>
            <img alt="" src={img}></img>
          </Link> 
          <Link>
            <img alt="" src={Imagen2}></img>
          </Link>
          <Link>
            <img alt="" src={Imagen3}></img>
          </Link>
          <Link>
            <img alt="" src={Imagen4}></img>
          </Link>
          <Link>
            <img alt="" src={Imagen5}></img>
          </Link>
        </div>
        */}
            <img alt="" className="ImageDetail" src={item.img}></img>

            <div className="DetailContainer">
              <nav className="NavDetail">
                <Link to="/">Inicio</Link>
                <span>/</span>
                <Link to="/products/">Productos</Link>
                <span>/</span>
                <p> {item.title} </p>
              </nav>

              <div className="TitleHeartFlex">
                <h3> {item.title} </h3>
                <ItemHeart />
              </div>

              <h4>${item.price}</h4>

              <h5 className="DetailDescription"> {item.description} </h5>
              <p className="DiscountContainer">
                {" "}
                <span className="AmountDiscount">10%</span> de descuento pagando
                por transferencia bancaria
                <span className="IconContainer">
                  <FaRegMoneyBillAlt size={25} />
                </span>
              </p>

              <Link
                className="PaymentsMethods"
                variant="primary"
                onClick={handleShow}
              >
                Ver formas de pago
              </Link>

              <Modal
                className="Modal"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="ModalTitle">
                    FORMAS DE PAGO
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="ModalBody">
                  <h6>Tarjetas de crédito</h6>
                  <div className="CreditCardsContainer">
                    <p>
                      Hasta 18 cuotas o 1 pago de{" "}
                      <span className="SpanClass">${item.price}</span>
                    </p>
                    <div className="CreditCardsImg">
                      <img alt="" src={MasterCard}></img>
                      <img alt="" src={Naranja}></img>
                      <img alt="" src={Cabal}></img>
                      <img alt="" src={TarjetShopping}></img>
                    </div>
                  </div>
                  <h6>Tarjetas de débito</h6>
                  <div className="CreditCardsContainer">
                    <p>
                      Precio: <span className="SpanClass">${item.price}</span>
                    </p>
                    <div className="CreditCardsImg">
                      <img alt="" src={Maestro}></img>
                      <img alt="" src={Visa}></img>
                      <img alt="" src={Cabal}></img>
                      <img alt="" src={MasterCard}></img>
                    </div>
                  </div>
                  <h6>Efectivo</h6>
                  <div className="CreditCardsContainer">
                    <p>
                      Precio: <span className="SpanClass">${item.price}</span>
                    </p>
                    <div className="CreditCardsImg">
                      <img alt="" src={PagoFacil}></img>
                      <img alt="" src={RapiPago}></img>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose} variant="danger">
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="FormContainer">
                <div>
                  <p className="SizeParagraph"> Talle: {selectedSizes} </p>
                  <Select
                    className="Select"
                    defaultValue={{
                      label: "Seleccioná un talle",
                      value: "Seleccion",
                    }}
                    options={sizes}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>

              <Form.Group className="mt-3">
                <ItemCount
                  product={item}
                  stock={item.stock}
                  onAdd={onAdd}
                  initial={0}
                />
              </Form.Group>
              <p>
                Quedan <span className="StockProduct">{item.stock} </span>{" "}
                unidades disponibles de este producto{" "}
              </p>
            </div>
          </article>
          <ItemSizes />
          {CoolPage()}
        </section>
      )}
    </div>
  );
};

export default ItemDetail;
