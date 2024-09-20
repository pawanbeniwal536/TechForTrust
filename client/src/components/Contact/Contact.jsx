import React, { useRef } from 'react';
import './Contact.css';
import Typed from 'typed.js';
import { useEffect } from 'react';

const Contact = () => {

  const el = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(el.current, {
      strings: ["How we can help you ? ", "Feel free to get in touch with us."],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay:2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };

  }
)

  return (

    <div id="contact" className="contact-section-home p-10 pt-28  text-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-5xl font-bold mb-6 text-center animate-fade-in-down">Contact Us</h2>
      <p className="contact-description text-center mb-10 text-lg animate-fade-in-up">
  Welcome ! Thanks for Contacting to us . <span ref={el}></span>
      </p>
      <form className="contact-form-home max-w-lg mx-auto space-y-6">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" className="input-field" />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Your Email" className="input-field" />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Your Message" className="input-field resize-none h-32"></textarea>
        </div>
        <button type="submit" className="submit-btn w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
