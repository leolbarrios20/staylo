import "./FooterBottom.css";

import { GoMarkGithub } from "react-icons/go";



const FooterBottom = () => {
  return (
    <div className="FooterBottom">
      <p>Sitio creado por Leo López Barrios, Web Developer Front End</p>
      <a
        href="https://github.com/leolbarrios20"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub color="white" size={23} />
      </a>
    </div>
  );
};

export default FooterBottom;
