import "../header/NavBar.css";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Nav className="NavBar me-4">
      <ul className="d-flex justify-content-around">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/shipping">Envios</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/about-us">Nosotros</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
