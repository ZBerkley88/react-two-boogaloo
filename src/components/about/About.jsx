import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";

import { FaUserGraduate, FaPenFancy, FaChalkboardTeacher } from "react-icons/fa";


const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Zachary Berkley" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaChalkboardTeacher className="about_icon" />
              <h5>Educator</h5>
              <small>
                10+ years college and middle school teaching experience
              </small>
            </article>
            <article className="about_card">
              <FaPenFancy className="about_icon" />
              <h5>Editor</h5>
              <small>
                Investigative report writer for a private detective agency
              </small>
            </article>
            <article className="about_card">
              <FaUserGraduate className="about_icon" />
              <h5>Experience</h5>
              <small>
                Full Stack Web Developer Boot Camp Graduate
              </small>
            </article>
          </div>

          <h5 className="text-light blurb">
            I'm a former English teacher making a career pivot to web development. Recently, I graduated from the Full Stack Web Development program at UNC-Chapel Hill. Check out some of my projects below!
            <br />
            
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;
