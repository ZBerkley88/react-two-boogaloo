import React from "react";
import "./about.css";
 import ME from '../../assets/about-me.jpg'

import { FaUserGraduate } from "react-icons/fa"

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Zachary Berkley" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon"/>
              <h5>Experience</h5>
              <small>7+ years teaching</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon"/>
              <h5>Experience</h5>
              <small>7+ years teaching</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon"/>
              <h5>Experience</h5>
              <small>7+ years teaching</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur, provident libero, ipsa non vel consequatur dignissimos officiis a, exercitationem dolore commodi beatae id quas. Est similique et aliquid quis.
          </p>

          <a href="#contact" className="btn btn-primary">Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
