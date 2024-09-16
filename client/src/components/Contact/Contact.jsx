import React, { useEffect, useRef } from 'react';
import './Contact.css';
import Typed from 'typed.js';

const Contact = () => {
  // Create a ref for the element that will have the typing effect
  const el = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(el.current, {
      strings: ["This is the Contact page.", "Feel free to get in touch with us."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Destroy Typed instance on component unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <span className="element" ref={el}></span> {/* This will contain the typed text */}
    </div>
  );
};

export default Contact;
