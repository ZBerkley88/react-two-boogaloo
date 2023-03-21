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
        <BsLinkedin />
      </a>
      <a href="https://github.com/ZBerkley88" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/i.saw.these.things/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default Socials;