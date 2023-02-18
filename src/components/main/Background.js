import { Link } from "react-router-dom";
import "./Background.css";

const Background = (props) => {
  return (
    <section className="Background">
      <div>
        <h1>{props.brand}</h1>
        <h2>{props.specs}</h2>
        <Link to="/products" className="SeeProducts">
          Ver productos
        </Link>
      </div>
    </section>
  );
};

export default Background;
