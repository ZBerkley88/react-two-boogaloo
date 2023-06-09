import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>
      <div className="container experience__container">
        {/* FRONTEND SECTION */}

        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <FaSass className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND SECTION */}

        <div className="experience__backend">
          <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="experience__details">
              <DiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>

        {/* ADD DATABASE SKILLS - TEACHING SKILLS */}
      
      </div>
    </section>
  );
};

export default Experience;
