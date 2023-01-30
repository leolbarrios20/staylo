import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import "./AboutUs.css";

const Us = () => {
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
          <Spinner loading={loading} />
        </div>
      ) : (
        <div className="AboutUsContainer">
          <h3>Nosotros</h3>
        </div>
      )}
    </section>
  );
};

export default Us;
