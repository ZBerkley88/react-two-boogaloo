import React from "react";
import CV from "../../assets/ZMB Resume 2023.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  );
};

export default CTA;
