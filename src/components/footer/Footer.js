import "./Footer.css";

import Cabal from "../assets/img/cabal.png";
import MasterCard from "../assets/img/mastercard.png";
import TarjetShopping from "../assets/img/tarjeta-shopping.png";
import Naranja from "../assets/img/naranja.png";
import Visa from "../assets/img/visa.png";
import Maestro from "../assets/img/maestro.png";
import PagoFacil from "../assets/img/pagofacil.png";
import RapiPago from "../assets/img/rapipago.png";
import CorreoArgentino from "../assets/img/correo-argentino.png";
import Andreani from "../assets/img/andreani.png";

import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

import FooterBottom from "./FooterBottom";
import TopFooter from "./TopFooter";

function Footer() {
  return (
    <footer>
      <TopFooter />
      <section className="Footer">
        <div className="FooterLeft">
          <div className="PaymentsMethods">
            <p className="FooterTitles">Medios de pago</p>
            <div className="PaymentsMethodsImg">
              <img alt="" src={Cabal}></img>
              <img alt="" src={MasterCard}></img>
              <img alt="" src={TarjetShopping}></img>
              <img alt="" src={Naranja}></img>
              <img alt="" src={Visa}></img>
              <img alt="" src={Maestro}></img>
              <img alt="" src={PagoFacil}></img>
              <img alt="" src={RapiPago}></img>
            </div>
          </div>
          <div className="PaymentsMethods">
            <p className="FooterTitles">Medios de envio</p>
            <div className="PaymentsMethodsImg">
              <img alt="" src={CorreoArgentino}></img>
              <img alt="" src={Andreani}></img>
            </div>
          </div>
        </div>
        <div className="FooterRight">
          <p className="FooterTitles">Nuestras redes sociales </p>
          <div className="FlexIcons">
            <a
              href="https://www.instagram.com/staylo_cba/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram color="white" size={18} />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=staylo_cba"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook color="white" size={18} />
            </a>
          </div>

          <p className="FooterTitles">Contacto </p>
          <div className="ContactFlex">
            <a
              href="https://www.instagram.com/staylo_cba/"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail color="white" size={17} className="me-1" />
            </a>
            <p>stayloremeras@outlook.com.ar</p>
          </div>
          <div className="ContactFlex">
            <a
              href="https://www.instagram.com/staylo_cba/"
              target="_blank"
              rel="noreferrer"
            >
              <GoLocation color="white" size={17} className="me-1" />
            </a>
            <p>Córdoba, Argentina</p>
          </div>
        </div>
      </section>
      <FooterBottom />
    </footer>
  );
}

export default Footer;
