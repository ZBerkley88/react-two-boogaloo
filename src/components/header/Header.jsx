import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Zack Berkley</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="Zack Berkley" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
