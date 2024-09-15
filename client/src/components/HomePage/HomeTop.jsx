// src/TypingEffectPage.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the updated CSS file

const HomeTop = () => {
  const [text, setText] = useState('');
  const fullText = "WWelcome to our website! Here, you'll find a variety of content that showcases our work, products, and services. We aim to provide an exceptional user experience and hope you enjoy exploring what we have to offer. Thank you for visiting us!";


  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {  
      setText(prev => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        index = 0; // Reset index for looping
        setText(''); // Clear text to restart typing
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container-homeTop mt-28">
      <div className="left-side-homeTop">
      <div className="heading-homeTop text-center">
          <p className="bg-white-800 text-5xl mb-4 scale-animation">Welcome! We are hiring</p>
        </div>
        <div className="typing-effect-homeTop text-center ">
          <p>{text}</p>
        </div>
      </div>
      <div className="right-side-homeTop">
        <div className="triangle-divider">
          <h1 className="company-name">TechForTrust</h1>
        </div>

        {/* <img 
          src="https://st3.depositphotos.com/1643295/18528/i/1600/depositphotos_185282380-stock-photo-silhouette-software-developer-reading-text.jpg" 
          alt="Developer" 
          className="image-homeTop" 
        /> */}
      </div>
    </div>
  );
};

export default HomeTop;
