import "./Brand.css";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="BrandContainer me-5">
      <Link to="/" className="LogoSpecsContainer">
        <span>S</span> <p>taylo</p>
      </Link>
    </div>
  );
};

export default Brand;
