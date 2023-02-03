import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import ImgServices from "../assets/img/servicio.jpg";

import "./Services.css";

const Services = () => {
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
          <Spinner/>
        </div>
      ) : (
        <div className="ServicesContainer container">
          <img className="col-12" alt="" src={ImgServices}></img>
        </div>
      )}
    </section>
  );
};

export default Services;
