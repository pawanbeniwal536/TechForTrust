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
<div className="flex justify-center items-center bg-cover bg-center h-[25rem] max-sm:grid grid-cols-1 mt-5 max-sm:mt-0">
    {imageSets[currentIndex].map((image, idx) => (
      <a
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
        className="flex animate-bounce-in-left flex-col max-w-[14.7rem] border-colorD border-2 w-50 h-50 p-4 m-5 rounded-xl bg-bgColorA ml-10 mr-10 transition-transform duration-500 transform hover:scale-[1.1] hover:translate-y-1"
        href={imageSets.url}
      >
        <img
          style={{ height: "150px" }}
          alt={image.alt}
          width="200"
          height="150"
          src="data:image/jpeg;base64,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"
          className="rounded-xl"
        />
        <div className="mt-5 text-center">{image.alt}</div>
        <h5 className="text-sm text-lightdark text-center">{image.role}</h5>
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