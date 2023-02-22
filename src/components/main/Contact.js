import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

import { Spinner } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {

  function CoolPage() {
    return (
      <div>
        <ScrollToTop/>
      </div>
    );
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function ScrollTotop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <div className="container ContactContainer">
      {CoolPage()}
      {ScrollTotop()}
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <form id="contact" action="" method="post">
          <h3>Enviá tu consulta</h3>
          <h4>
            Si querés personalizar una remera, envianos un mensaje y te
            contactamos.
          </h4>
          <fieldset>
            <input
              placeholder="Nombre"
              type="text"
              tabIndex="1"
              required
              autoFocus
            ></input>
          </fieldset>
          <fieldset>
            <input
              placeholder="Email"
              type="email"
              tabIndex="2"
              required
            ></input>
          </fieldset>
          <fieldset>
            <input
              placeholder="Telefono (opcional)"
              type="tel"
              tabIndex="3"
            ></input>
          </fieldset>
          <fieldset></fieldset>
          <fieldset>
            <textarea
              placeholder="Escribe tu consulta aquí...."
              tabIndex="4"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button disabled>
              Enviar
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Contact;
