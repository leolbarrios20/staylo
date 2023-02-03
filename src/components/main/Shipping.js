import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

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
    <section>
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div className="ShippingContainer">
          <h3>Envios</h3>
        </div>
      )}
    </section>
  );
};

export default Shipping;
