import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../../context/CartContext";

import CartItem from "./CartItem";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


import Cabal from "../assets/img/cabal.png";
import MasterCard from "../assets/img/mastercard.png";
import TarjetShopping from "../assets/img/tarjeta-shopping.png";
import Naranja from "../assets/img/naranja.png";
import Visa from "../assets/img/visa.png";
import Maestro from "../assets/img/maestro.png";
import PagoFacil from "../assets/img/pagofacil.png";
import RapiPago from "../assets/img/rapipago.png";

import "./CartListContainer.css";

const CartListContainer = () => {

  function CoolPage() {
    return (
      <div>
        <ScrollToTop  smooth />
      </div>
    );
  }

  const { itemsCarrito, getTotal, clear, totalProducts } = useContext(GContext);

  const [delivery, setDelivery] = useState(false);

  const [loading, setLoading] = useState(false);

  const deliveryPrice = 1300;

  function ScrollTotop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (getTotal() > 15000) {
      setDelivery(true);
    } else {
      setDelivery(false);
    }
  }, [getTotal]);



  return (
    <section className="CartListContainer">
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div>
          {CoolPage()}
          {ScrollTotop()}
          <div>
            {itemsCarrito.length > 0 ? (
              <div className="Cart">
                <section>
                  <div className="CartItem">
                    <div className="CartItemLeft container">
                      <h3 className="CartTitle row col-8">Tu Carrito</h3>
                      <p className="TotalCartDetail">
                        TOTAL {"( "}
                        {totalProducts()}
                        {" Producto/s )"} por un total de{" "}
                        <span className="getTotal">${getTotal()}</span>
                      </p>
                      <p className="TotalCartDetailP">
                        Los artículos en tu carrito no están reservados. Terminá
                        el proceso de compra ahora para adquirirlos.
                      </p>
                    </div>
                  </div>
                  <div className="container mx-auto row">
                    {itemsCarrito.map((element) => (
                      <CartItem
                        key={element.item.id}
                        item={element.item}
                        quantity={element.quantity}
                        title={element.title}
                        price={element.price}
                      />
                    ))}
                  </div>
                </section>
                <section className="container-fluid mx-auto row">
                  <div className="CartItemRight col-lg-7 col-md-12 col-sm-12 mx-auto">
                    <Link to="/send-order" className="PayEnd">
                      <p>FINALIZAR COMPRA</p>
                      <BsArrowRight size={25} />
                    </Link>
                    <div className="ButtonFlex">
                      <Link to="/products/">
                        <Button variant="success" className="GoToPay">
                          Agregar productos
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="GoToPay"
                        onClick={clear}
                      >
                        Vaciar Carrito
                      </Button>
                    </div>
                    <p className="Resume">Resumen del pedido</p>
                    <div className="ProductsPriceFlex">
                      <p> {totalProducts()} producto/s </p>
                      <p> ${getTotal()} </p>
                    </div>
                    {delivery ? (
                      <div>
                        <div className="DeliveryFlex">
                          <p className="Delivery">
                            {" "}
                            <FaTruck size={28} /> ENTREGA
                          </p>
                          <p className="FreeOrPrice">Gratis</p>
                        </div>
                        <p>
                          La entrega es gratis porque la compra es mayor a
                          $15000
                        </p>
                      </div>
                    ) : (
                      <div className="DeliveryFlex">
                        <p className="Delivery">
                          {" "}
                          <FaTruck size={28} /> ENTREGA
                        </p>
                        <p className="FreeOrPrice"> ${deliveryPrice} </p>
                      </div>
                    )}
                    <hr></hr>
                    {delivery ? (
                      <div className="DeliveryFlex">
                        <p className="Delivery">Total</p>
                        <p className="FreeOrPrice">${getTotal()}</p>
                      </div>
                    ) : (
                      <div className="DeliveryFlex">
                        <p className="Delivery">Total</p>
                        <p className="FreeOrPrice">
                          ${deliveryPrice + getTotal()}
                        </p>
                      </div>
                    )}
                    <div className="CartPaymenthMethods">
                      <hr></hr>
                      <h6>Opciones de pago</h6>
                      <img alt="" src={Visa}></img>
                      <img alt="" src={Naranja}></img>
                      <img alt="" src={TarjetShopping}></img>
                      <img alt="" src={MasterCard}></img>
                      <img alt="" src={Cabal}></img>
                      <img alt="" src={Maestro}></img>
                      <img alt="" src={PagoFacil}></img>
                      <img alt="" src={RapiPago}></img>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <section className="EmptyCartContainer">
                <div className="EmptyCart">
                  <p className=" OffCanvasP EmptyCartP">
                    El carrito de compras se encuentra vacio
                  </p>
                  <Link className="AddMoreProducts" to="/products">
                    <Button variant="dark">Agregar Productos</Button>
                  </Link>
                </div>
                <div className="FlexIconsCartContainer">
                  <p>Visita nuestras redes</p>
                  <div className="FlexIconsCart">
                    <a
                      href="https://www.instagram.com/staylo_cba/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram color="black" size={25} />
                    </a>
                    <a
                      href="https://www.facebook.com/search/top?q=staylo_cba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook color="black" size={25} />
                    </a>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CartListContainer;
