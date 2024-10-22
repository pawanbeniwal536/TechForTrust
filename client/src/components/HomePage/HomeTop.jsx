import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the updated CSS file
import { Link } from 'react-scroll';
import Banner from '../../Assets/Banner.jpg'

const HomeTop = () => {
  const [text, setText] = useState('');
  const fullText = " Here, you'll find a variety of content that showcases our work, products, and services. We aim to provide an exceptional user experience and hope you enjoy exploring what we have to offer. Thank you for visiting us!";

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
    }, 40); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container-homeTop flex" id="home">
      <div className="left-side-homeTop flex-1 flex flex-col justify-between">
        <div className="heading-homeTop text-center">
          <div className="fixed-box">
            <p className="scale-animation">Welcome! We are Hiring</p>
          </div>
        </div>

        <div className="typing-effect-homeTop text-center fixed-box-homeTop">
          <p>Welcome to our webite ! {text}</p>
        </div>
        <div className="home-top-left-bottom flex justify-around ">
          <Link to='internship' className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Internships</Link>
          <Link to='about' className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">About Us</Link>
        </div>
      </div>
      <div className="right-side-homeTop flex-1 relative">
        <div className="absolute inset-0 clip-left-diagonal">
          <img
            className="w-full h-full object-cover"
            src={Banner}

            alt="Image                                                                        "
          />
        </div>
      </div>

      <div className="right-side-homeTop2">
        <img 
        src={Banner}
            alt="Image" />
      </div>
    </div>
  );
};

export default HomeTop;
