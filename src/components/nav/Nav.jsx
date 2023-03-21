import React from "react";
import "./nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <BiHomeAlt />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experience">
        <BiBookBookmark />
      </a>
      <a href="#portfolio">
        <BiFolder />
      </a>
      <a href="#contact">
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
