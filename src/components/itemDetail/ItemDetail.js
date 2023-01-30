import "./ItemDetail.css";

import Cabal from "../assets/img/cabal.png";
import MasterCard from "../assets/img/mastercard.png";
import TarjetShopping from "../assets/img/tarjeta-shopping.png";
import Naranja from "../assets/img/naranja.png";
import Visa from "../assets/img/visa.png";
import Maestro from "../assets/img/maestro.png";
import PagoFacil from "../assets/img/pagofacil.png";
import RapiPago from "../assets/img/rapipago.png";

import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

import ItemCount from "../itemCount/ItemCount";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import ItemSizes from "../itemSizes/ItemSizes";
import ItemHeart from "../itemHeart/ItemHeart";

const ItemDetail = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cantidadProductosAComprar, setCantidadProductosAComprar] = useState(0);

  const { id, name, price, img, stock, description, category } = props.data;

  const { addToCart } = useCartContext();

  const funcionDelHijoGuardarCantidad = (cantidadX) => {
    setCantidadProductosAComprar(cantidadX);
  };

  const onAdd = () => {

    if(cantidadProductosAComprar !== 0) {
      const product = {
        id: id,
        title: name,
        category: category,
        price: price,
        count: cantidadProductosAComprar,
      };
      addToCart(product);
    }else{
      alert("Debes agregar al menos un producto")
    }
  };



  return (
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
        <img alt="" className="ImageDetail" src={img}></img>
        
        <div className="DetailContainer">
        
          <nav className="NavDetail">
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/products/">Productos</Link>
            <span>/</span>
            <p> {name} </p>
            <ItemHeart  className="ItemHeartDetail"/>
            
          </nav>
          
          <h3> {name} </h3>
          <h4 className="Price"> ${price} </h4>
          <h5> {description} </h5>
          <p className="DiscountContainer">
            {" "}
            <span className="AmountDiscount">10%</span> de descuento pagando por
            transferencia bancaria
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
              <Modal.Title className="ModalTitle">FORMAS DE PAGO</Modal.Title>
            </Modal.Header>
            <Modal.Body className="ModalBody">
              <h6>Tarjetas de crédito</h6>
              <div className="CreditCardsContainer">
                <p>
                  Hasta 18 cuotas o 1 pago de{" "}
                  <span className="SpanClass">${price}</span>
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
                  Precio: <span className="SpanClass">${price}</span>
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
                  Precio: <span className="SpanClass">${price}</span>
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
            <Form.Select aria-label="Default select example">
              <option value="2">S</option>
              <option value="3">M</option>
              <option value="3">L</option>
              <option value="3">XL</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>COLOR</option>
              <option value="1">BLANCO</option>
              <option value="2">NEGRO</option>
            </Form.Select>
          </div>

          <Form.Group className="mt-3">
            <ItemCount
              stock={stock}
              guardarCantidadAComprar={funcionDelHijoGuardarCantidad}
            />
          </Form.Group>
          <p>
            Quedan <span className="StockProduct">{stock} </span> unidades
            disponibles de este producto{" "}
          </p>
          <Button className="OnAdd" variant="dark" onClick={onAdd}>
            Agregar al carrito <AiOutlineShoppingCart size={24} />
          </Button>
        </div>
      </article>
      <ItemSizes />
    </section>
  );
};

export default ItemDetail;
