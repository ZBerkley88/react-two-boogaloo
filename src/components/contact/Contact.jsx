import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9mfok6o",
        "template_tkiglq9",
        form.current,
        "iFFS1yd_HatPDN-9w"
      )
      e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:zachary.berkley@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <MdOutlineWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+16462750805"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
