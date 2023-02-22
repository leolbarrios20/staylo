import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaRegCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

import { BiLockAlt } from "react-icons/bi";

import ServicesImg from "../assets/img/servicio.jpg";

import "./Services.css";

const Services = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <section className="container-fluid">
      {ScrollToTop()}
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div className="ShippingContainer col-12">
          <div className="mx-auto">
            <h3>Servicios</h3>
            <div className="FlexServices col-12 mx-auto">
              <p className="ParagraphServices">
                Ofrecemos un servicio de sublimación y estampado. Podes darnos
                las prendas, los diseños y nosotros nos encargamos del resto.
              </p>
              <img
                className="ServicesImg col-12"
                src={ServicesImg}
                alt=""
              ></img>
            </div>
          </div>
          <Link className="ContactLink" to="/contact/">
            Contactanos
          </Link>
          <div className="IconFlexContainer">
            <div className="IconFlex IconFlexFirst">
              <TbTruckDelivery className="Icon" size={50} />
              <div>
                <h6>ENVIAMOS TU COMPRA</h6>
                <p className="ParagraphIconFlex">Entregas a todo el país</p>
              </div>
            </div>
            <div className="IconFlex IconFlexCenter">
              <FaRegCreditCard className="Icon" size={40} />
              <div>
                <h6>PAGÁ COMO QUIERAS</h6>
                <p className="ParagraphIconFlex">
                  Tarjetas de crédito o efectivo
                </p>
              </div>
            </div>
            <div className="IconFlex IconFlexLast">
              <BiLockAlt className="Icon" size={50} />
              <div>
                <h6>COMPRÁ CON SEGURIDAD</h6>
                <p className="ParagraphIconFlex">
                  Tus datos siempre protegidos
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
