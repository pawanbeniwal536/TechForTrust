import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './About.css';
import 'aos/dist/aos.css';
import Nav from '../Nav';

const About = () => {
 

  const imageSets = [
    [
      { src: '/Ankit.png', alt: 'Ankit' , role:"CEO",url:"https://www.linkedin.com/in/ankitsingh1421/"},
      { src: '/pawan.png', alt: 'Pawan',role:"DIRECTOR" },
      { src: '/vishesh.png', alt: 'Vishesh ' ,role:"MANAGER"},
      { src: '/sakshi.jpeg', alt: 'Sakshi ',role:"HR EXECUTIVE" },

    ],
    [
      { src: 'https://d20rzw95v74l8a.cloudfront.net/aboutus/t6.webp', alt: 'pawan ' ,role:"manager"},
      { src: 'https://d20rzw95v74l8a.cloudfront.net/aboutus/t6.webp', alt: 'sakshi ' ,role:"hr"},
    ],
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const handleButtonClick = (index) => {
    setCurrentIndex(index);


    if (intervalId) {
      clearInterval(intervalId);
    }


    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 2000); // Change every 1 second

    setIntervalId(id);
  };

  useEffect(() => {

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  return (
    <div id='about'>
      <Nav />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center pt-36 hero-features-gap">
        <div className="w-[51rem] max-sm:w-[19rem] max-md:w-[35rem] max-lg:w-[42rem]">
          <h3 data-aos="fade-up" className="gradient-text font-heading leading-[3.8rem] text-[44px] max-sm:text-3xl font-semibold">
            On A Mission To Help Billions Through Providing Internships
          </h3>
          <h5 data-aos="fade-up" className="text-[22px] leading-8 max-sm:text-sm mt-3 text-lightGrey">
          We are a dynamic company offering valuable internships and creating innovative software solutions.
          </h5>
        </div>
      </div>

      {/* Features Section */}
      <div data-aos="fade-up" className="flex justify-evenly max-sm:flex-col p-20">
        {['Innovative Solutions', 'Hands-On Learning', 'Affordable Pricing', 'Efficient Implementation'].map((feature, index) => (
          <div key={index} className="flex flex-col mt-20">
            <img
              alt={feature}
              src={`https://d20rzw95v74l8a.cloudfront.net/aboutus/Icon%20(${index}).webp`}
              className="self-center"
              width={70}
              height={70}
            />
            <h3 className="mt-10 self-center text-[1.2rem] w-[100%] text-center text-lightGrey">{feature}</h3>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div class="container">
    <div class="heading-section">
        <h2>We Are Registered And Certified</h2>
        <p>Incorporated with the Ministry of Corporate Affairs, we operate with full compliance and transparency.</p>
    </div>
    
    <div class="cards-wrapper">

        <div className="card">
            <img src="https://octanet.in/storage/2024/06/startup-india-logo1-02-1024x265.png" alt="Startup India Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/iso-9001-logo.png" alt="ISO 9001 Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/aicte.png" alt="AICTE Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/IAF-logo-300x193-compressed.webp" alt="IAF Logo"/>
        </div>


        <div className="card">
            <img src="https://octanet.in/storage/2024/06/startup-india-logo1-02-1024x265.png" alt="Startup India Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/iso-9001-logo.png" alt="ISO 9001 Logo"/>
        </div>
    </div>
</div>

      {/* Vision Section */}
      <div className="flex flex-col items-center mt-32 max-sm:p-5 max-sm:mt-10">
        <div className="flex justify-evenly max-sm:flex max-sm:flex-col max-sm:items-center mb-28">
          <img
            alt="Vision"
            src="https://d20rzw95v74l8a.cloudfront.net/aboutus/theme2.webp"
            className="self-center animate-up-down"
            width={260}
            height={260}

          />
          <div className="w-[55rem] max-lg:w-[40rem] max-md:w-[25rem] max-sm:w-[20rem] max-sm:mt-5 max-sm:justify-center">
            <h2 className="text-[42px] max-sm:text-[26px] font-heading mb-5">Our Vision</h2>
            <p className="text-[22px] max-sm:text-[16px] text-lightGrey">
            In the longer run, Tech for Trust aims to redefine the technology landscape by developing innovative software solutions and providing valuable internships. We focus on creating impactful technologies that address current deficiencies and empower the next generation of tech professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex justify-evenly flex-row-reverse mb-28">
        <img
          alt="Mission "
          src="https://d20rzw95v74l8a.cloudfront.net/aboutus/theme1.webp"
          className="self-center animate-up-down"
          width={160}
          height={160}
        />
        <div className="w-[55rem] max-lg:w-[40rem] max-md:w-[25rem] max-sm:w-[20rem] max-sm:mt-5 max-sm:justify-center">
          <h2 className="text-[42px] max-sm:text-[26px] font-heading mb-5">Our Mission</h2>
          <p className="text-[22px] max-sm:text-[16px] text-lightGrey">
We develop cutting-edge software solutions and provide impactful internships to empower talent and advance technology. Our goal is to drive innovation and career growth in the tech industry.
          </p>
        </div>
      </div>
      {/* Team Section */}
<div className="flex flex-col items-center justify-center text-center mt-20">
  <div className="w-[51rem] max-sm:w-[19rem] max-md:w-[35rem] max-lg:w-[42rem]">
    <h3 data-aos="fade-up" className="gradient-text font-heading leading-[3.8rem] text-[44px] max-sm:text-3xl font-semibold">
      Say Hello to Our Team Members
    </h3>
    {/* Removed margin from the h5 element to eliminate space */}
    <h5 data-aos="fade-up" className="text-[22px] leading-8 max-sm:text-sm mt-1 text-lightGrey">
      Meet the skilled professionals who drive our business forward
    </h5>
  </div>
</div>

<div className="relative flex flex-col items-center bg-[url('https://d20rzw95v74l8a.cloudfront.net/aboutus/tile-bg.webp')] bg-cover bg-center h-[34rem] mt-3">
<div className="flex justify-center items-center bg-cover bg-center h-[34rem] max-sm:grid grid-cols-1 mt-5 max-sm:mt-0 ">
  {imageSets[currentIndex].map((image, idx) => (
    <a
      key={idx}
      target="_blank"
      rel="noopener noreferrer"
      className="flex animate-bounce-in-left flex-col max-w-[14.7rem] border-colorD border-2 w-80 h-50 p-4 m-5 rounded-xl bg-bgColorA ml-10 mr-10 transition-transform duration-500 transform hover:scale-[1.1] hover:translate-y-1"
      href={imageSets.url}
    >
      <img
        className="w-full h-auto max-sm:w-[100px] max-sm:h-[100px] object-contain"
        alt={image.alt}
        src='data:image/jpeg;base64,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'
      />
    </a>
  ))}                   
</div>
  <div className="flex mt-10 absolute bottom-5 space-x-2">
    <button
      className="w-3 h-3 rounded-full border-2 border-lightdark"
      onClick={() => handleButtonClick(0)}
    ></button>
    <button
      className="w-3 h-3 rounded-full bg-lightGrey"
      onClick={() => handleButtonClick(1)}
    ></button>
  
  </div>
</div>

    </div>
  );
};

export default About;