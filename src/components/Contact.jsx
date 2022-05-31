import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ExternalLink } from "react-external-link";

export default function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    setMessage(true)

    emailjs.sendForm('portfolio_4897', 'template_qdvjmqh', form.current, 'Yxw10Sh1Kantu_tif')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/pacificnorthwestart.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name"  name="name" />
          <input type="text" placeholder="Email"name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP 🙂 </span>}
        </form>
        <div className="links">
          <span><ExternalLink href="https://www.linkedin.com/in/ross-scharbach/">linkedin.com/in/ross-scharbach/</ExternalLink></span>
          <span><ExternalLink href="https://github.com/Ross024">github.com/Ross024</ExternalLink></span>
        </div>
      </div>
    </div>
  )
}
