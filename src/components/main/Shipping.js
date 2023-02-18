import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

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
        <div className="ShippingContainer">
          <h3>Formas de envío</h3>
          <p>El costo de envío se abona aparte y es a cargo del comprador</p>
          <ul className="ShipmentFlexImg">
            <li>
              <img alt="correo-argentino" src={CorreoArgentino}></img> a
              domicilio/sucursal A TODO EL PAÍS{" "}
            </li>
          </ul>
          <ul className="ShipmentFlexImg">
            <li>
              <img alt="andreani" src={Andreani}></img> a domicilio/sucursal A
              TODO EL PAÍS{" "}
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Shipping;
