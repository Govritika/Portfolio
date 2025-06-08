import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import Github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";

import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    emailjs
      .sendForm("service_n7ozdj6", "template_lr31d3p", form.current, {
        publicKey: "ca3MuUvYuj-ByNi0W",
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };


  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="title">Get In Touch</h1>
        <span className="desc">
          Have a project in mind or just want to say hello? Feel free to reach
          out using the form below. I’ll get back to you as soon as possible!
          You can also connect with me on social media through the links below.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="btn">
            Submit
          </button>
          <div className="links">
            <a href={`mailto:${import.meta.env.EMAIL}`}>
              <img src={gmail} alt="gmail" className="link" />
            </a>
            <a href={`https://wa.me/${import.meta.env.WHATSAPP_NO}`}>
              <img src={whatsapp} alt="whatsapp" className="link" />
            </a>
            <a href={`https://github.com/${import.meta.env.GITHUB_USERNAME}`}>
              <img src={Github} alt="github" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/vritika-jangir-3a1616303/">
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
            <a href="">
              <img src={FacebookIcon} alt="facebook" className="link" />
            </a>

            <a href="">
              <img src={TwitterIcon} alt="twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
