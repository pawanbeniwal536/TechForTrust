import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the updated CSS file

const HomeTop = () => {
  const [text, setText] = useState('');
  const fullText = "Welcome to our website! Here, you'll find a variety of content that showcases our work, products, and services. We aim to provide an exceptional user experience and hope you enjoy exploring what we have to offer. Thank you for visiting us!";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const typingInterval = setInterval(() => {
      setText((prev) => {
        if (!isDeleting) {
          return fullText.substring(0, index);
        } else {
          return fullText.substring(0, index);
        }
      });

      if (!isDeleting) {
        index++;
      } else {
        index--;
      }

      if (index === fullText.length) {
        isDeleting = true;
      } else if (index === 0) {
        isDeleting = false;
        setTimeout(() => {
          setText(''); // Clear text before starting again
        }, 500); // Pause duration before starting to type again
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container-homeTop flex">
      <div className="left-side-homeTop flex-1 flex flex-col justify-between">
        <div className="heading-homeTop text-center">
          <p className="bg-white-800 text-5xl mb-4 scale-animation">Welcome! We are hiring</p>
        </div>
        <div className="typing-effect-homeTop text-center">
          <p>{text}</p>
        </div>
        <div className="home-top-left-bottom flex justify-around mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Internships</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">About Us</button>
        </div>
      </div>
      <div className="right-side-homeTop flex-1">
        <div className="triangle-divider">
          <h1 className="company-name">TechForTrust</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
