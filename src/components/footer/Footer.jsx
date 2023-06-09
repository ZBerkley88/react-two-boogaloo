import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/zachary-berkley-aa5716240/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsLinkedin className="footer_icon" />
        </a>
        <a
          href="https://github.com/ZBerkley88"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/i.saw.these.things/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Zachary Berkley. 2023.</small>
      </div>
    </footer>
  );
};

export default Footer;
