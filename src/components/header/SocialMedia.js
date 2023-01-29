import "../header/SocialMedia.css"

import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div className="SocialMedia">
      <a
        href="https://www.instagram.com/staylo_cba/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram color="black" size={22} />
      </a>
      <a
        href="https://www.facebook.com/search/top?q=staylo_cba"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook color="black" size={23} />
      </a>
      <a
        href="https://github.com/leolbarrios20"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub color="black" size={23} />
      </a>
    </div>
  );
};

export default SocialMedia;
