import Background from "./Background";

import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import "./Main.css";

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <main className="Main">
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner animation="border"
            loading={loading}
          />
        </div>
      ) : (
        <Background brand="Staylo" specs="Remeras Personalizadas" />
      )}
    </main>
  );
};

export default Main;
