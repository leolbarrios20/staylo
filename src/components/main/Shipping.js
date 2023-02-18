import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import { FaTruck } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import Andreani from "../assets/img/andreani.png";
import CorreoArgentino from "../assets/img/correo-argentino.png";

import "./Shipping.css";



const Shipping = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="container-fluid">
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div className="ShippingContainer ">
          <div className=" mx-auto">
          <h3>Formas de envío</h3>
          <p className="Paragraph">El costo de envío se abona aparte y es a cargo del comprador</p>
          <ul className="ShipmentFlexImg">
            <li>
              <img alt="correo-argentino" src={CorreoArgentino}></img> a
              domicilio/sucursal <span>A TODO EL PAÍS</span> {" "}
            </li>
          </ul>
          <ul className="ShipmentFlexImg">
            <li>
              <img alt="andreani" src={Andreani}></img> a domicilio/sucursal <span>A TODO EL PAÍS</span>{" "}
            </li>
          </ul>
          </div>
          <div className="IconFlexContainer">
            <div className="IconFlex IconFlexFirst">
              <FaTruck className="Icon" size={40}/>
              <div>
                <h6>ENVIAMOS TU COMPRA</h6>
                <p>Entregas a todo el país</p>
              </div>
            </div>
            <div className="IconFlex IconFlexCenter">
              <FaRegCreditCard className="Icon" size={40}/>
              <div>
                <h6>PAGÁ COMO QUIERAS</h6>
                <p>Tarjetas de crédito o efectivo</p>
              </div>
            </div>
            <div className="IconFlex">
              <FaLock className="Icon" size={40} />
              <div>
                <h6>COMPRÁ CON SEGURIDAD</h6>
                <p>Tus datos siempre protegidos</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shipping;
