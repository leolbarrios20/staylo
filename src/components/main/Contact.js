import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
<div class="container ContactContainer">  
{loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <form id="contact" action="" method="post">
    <h3>Enviá tu consulta</h3>
    <h4>Si querés personalizar una remera, envianos un mensaje y te contactamos.</h4>
    <fieldset>
      <input placeholder="Nombre" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Email" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Telefono (opcional)" type="tel" tabindex="3" ></input>
    </fieldset>
    <fieldset>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
    </fieldset>
  </form>

      )}
  
</div>

  );
};

export default Contact;





