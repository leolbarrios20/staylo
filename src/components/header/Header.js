import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Brand from "./Brand";
import CartWidget from "./CartWidget";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import React from "react";

import "./NavBar.css";
import "./hover.css";
import "./Header.css";

function Header() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="Header py-0  "
      >
        <Container>
          <Navbar.Brand className="py-0">
            <Brand />
          </Navbar.Brand>
          <Link to="/cart" className="CartWidgetNone">
            <CartWidget />
          </Link>
          <Navbar.Toggle
            className="NavBarToggle py-0"
            aria-controls="basic-navbar-nav"
            variant="light"
            bg="light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="NavBarCollapse">
            <Nav className="NavBar me-auto  mt-2">
              <Nav.Link className="hvr-underline-from-left" href="/#">
                Inicio
              </Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/products">
                Productos
              </Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/shipping">
                Envios
              </Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/services">
                Servicios
              </Nav.Link>
              <Nav.Link className="hvr-underline-from-left" href="/#/contact">
                Contacto
              </Nav.Link>
              <Nav.Link href="/#/cart">
                <div className="CartSocialFlex ">
                  <div className="CartSocialResp">
                    <CartWidget />
                  </div>
                </div>
              </Nav.Link>
              <SocialMedia />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
