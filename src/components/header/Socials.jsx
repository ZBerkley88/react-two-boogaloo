import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/zachary-berkley-aa5716240/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="header_icon" />
      </a>
      <a href="https://github.com/ZBerkley88" target="_blank" rel="noreferrer">
        <BsGithub className="header_icon" />
      </a>
      <a
        href="https://www.instagram.com/i.saw.these.things/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="header_icon" />
      </a>
    </div>
  );
};

export default Socials;