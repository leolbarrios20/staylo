import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../../context/CartContext";

import CartItem from "./CartItem";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

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
  const { itemsCarrito, getTotal, clear, totalProducts } = useContext(GContext);

  const [delivery, setDelivery] = useState(false);

  const [loading, setLoading] = useState(false);

  const deliveryPrice = 1300;

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
          <div>
            {itemsCarrito.length > 0 ? (
              <div className="Cart">
                <section>
                  <div className="CartItem">
                    <div className="CartItemLeft">
                      <h3 className="CartTitle">Tu Carrito</h3>
                      <p>
                        TOTAL
                        <strong>
                          {" "}
                          {"( "}
                          {totalProducts()}
                          {" Producto/s )"}{" "}
                        </strong>
                        por un total de ${getTotal()}
                      </p>
                      <p>
                        Los artículos en tu carrito no están reservados. Terminá
                        el proceso de compra ahora para adquirirlos.
                      </p>
                    </div>
                  </div>
                  {itemsCarrito.map((element) => (
                    <CartItem
                      key={element.item.id}
                      item={element.item}
                      quantity={element.quantity}
                    />
                  ))}
                </section>
                <div className="CartItemRight">
                  <Button variant="dark" className="GoToPay">
                    <Link className="PayEnd">FINALIZAR COMPRA</Link>

                    <BsArrowRight size={25} />
                  </Button>
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
                    <p> {totalProducts()} productos </p>
                    <p> ${getTotal()} </p>
                  </div>
                  {delivery ? (
                    <div>
                      <div className="DeliveryFlex">
                        <p className="Delivery">ENTREGA</p>
                        <p className="FreeOrPrice">Gratis</p>
                      </div>
                      <p>
                        La entrega es gratis porque la compra es mayor a $15000
                      </p>
                    </div>
                  ) : (
                    <div className="DeliveryFlex">
                      <p className="Delivery">ENTREGA</p>
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
              </div>
            ) : (
              <div className="EmptyCart">
                <p className="mb-0 OffCanvasP EmptyCartP">
                  El carrito de compras se encuentra vacio
                </p>
                <Link className="AddMoreProducts" to="/products">
                  <Button variant="dark">Agregar Productos</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CartListContainer;
