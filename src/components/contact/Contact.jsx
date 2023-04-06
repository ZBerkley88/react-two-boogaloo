import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>zachary.berkley@gmail.com</h5>
            <a
              href="mailto:zachary.berkley@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>555-555-5555</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+16462750805"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>PLACEHOLDER</h4>
            <h5>PLACEHOLDER</h5>
            <a href="" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* FORM */}
        <form action="">
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
