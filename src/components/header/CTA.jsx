import React from "react";
import CV from "../../assets/ZMB Resume 2023.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">DOWNLOAD CV</a>
      <a href="#contact" className="btn btn-primary">CONTACT ME</a>
    </div>
  );
};

export default CTA;
