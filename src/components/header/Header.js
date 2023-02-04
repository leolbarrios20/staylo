import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Brand from "./Brand";
import CartWidget from "./CartWidget";
import SocialMedia from "./SocialMedia";
import TopHeader from "../header/TopHeader";

import "./NavBar.css";
import "./hover.css"



function Header() {

  return (
    <header>
      <TopHeader />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"className="Header py-0  ">
        <Container>
          <Navbar.Brand className="py-0">
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle  className="NavBarToggle py-0" aria-controls="basic-navbar-nav" variant="light" bg="light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="NavBarCollapse">
            <Nav className="NavBar me-auto  mt-2">
              <Nav.Link className="hvr-underline-from-left" href="/#">Inicio</Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/products"  >Productos</Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/shipping">Envios</Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/services">Servicios</Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/about-us">Nosotros</Nav.Link>
            </Nav>
            <hr></hr>
            <Nav className="CartSocialFlex ">
              <SocialMedia />
              <CartWidget amount= {0} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
/*
import TopHeader from "../header/TopHeader";
import Brand from "./Brand";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import SocialMedia from "./SocialMedia";

import "../header/Header.css";

const Header = () => {
  return (
    <header className="Header ">
      <TopHeader />
      <div className="HeaderFlex">
        <Brand/>
        <NavBar />
        <CartWidget amount="3"/>
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
*/
