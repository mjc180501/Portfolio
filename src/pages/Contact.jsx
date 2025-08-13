import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you!</p>
      <form action="https://formspree.io/f/mrbljypn" method="POST" className="contact-form">
        <label>
          Your Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;