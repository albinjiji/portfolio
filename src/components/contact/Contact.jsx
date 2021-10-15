import "./contact.scss";
import img from "../images/connect1.jpg";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylbf3ez",
        "template_gsyultc",
        e.target,
        "user_aAf3eqNvw6c6ijt0voayI"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendMail}>
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
