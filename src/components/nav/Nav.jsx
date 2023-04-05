import React from "react";
import { useState } from "react";
import "./nav.css";

// icons
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiFolder />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
