import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import { FaRegCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

import { BiLockAlt } from "react-icons/bi";

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
    <section className="container">
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div className="ShippingContainer col-12">
          <div className=" mx-auto">
            <h3>Formas de envío</h3>
            <div className="ShippingParagraphContainer">

            <p className="Paragraph">
              El costo de envío se abona aparte y es a cargo del comprador
            </p>
            <p className="Paragraph">
              Cuando los pedidos superen los $15000, el envío es gratis
            </p>



            </div>

            <div className="ShipmentFlexImgContainer">
              <ul className="ShipmentFlexImg">
                <li>
                  <img alt="correo-argentino" src={CorreoArgentino}></img> a
                  domicilio/sucursal <span>A TODO EL PAÍS</span>{" "}
                </li>
              </ul>
              <ul className="ShipmentFlexImg">
                <li>
                  <img alt="andreani" src={Andreani}></img> a domicilio/sucursal{" "}
                  <span>A TODO EL PAÍS</span>{" "}
                </li>
              </ul>
            </div>
          </div>
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
                <p className="ParagraphIconFlex">Tarjetas de crédito o efectivo</p>
              </div>
            </div>
            <div className="IconFlex IconFlexLast">
              <BiLockAlt className="Icon" size={50} />
              <div>
                <h6>COMPRÁ CON SEGURIDAD</h6>
                <p className="ParagraphIconFlex">Tus datos siempre protegidos</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shipping;
