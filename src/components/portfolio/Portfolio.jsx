import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio-placeholder.jpg";
import IMG1 from "../../assets/ecommerce-screenshot.png";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Project preview" />
          </div>
          <h3>eCommerce Back End</h3>
          <p>
            Back-end for an e-commerce site which uses Express.js and
            Sequelize to interact with a SQL database.
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ZBerkley88/ecommerce-back-end"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="portfolio_item-icon" />
            </a>
            {/* <a
              href="https://github.com/ZBerkley88"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink className="portfolio_item-icon" />
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ZBerkley88"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="portfolio_item-icon" />
            </a>
            <a
              href="https://github.com/ZBerkley88"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink className="portfolio_item-icon" />
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ZBerkley88"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="portfolio_item-icon" />
            </a>
            <a
              href="https://github.com/ZBerkley88"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink className="portfolio_item-icon" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
