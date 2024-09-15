import React, { useState, useEffect } from 'react';
import InternData from '../../data/internCoursedata.json'
import InternshipCards from './InternshipCards'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Internship.css';

const Internship = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const textArray = ["Pursuing/College Students", "Freshers"];


  // for scrolling

useEffect(()=>{
  AOS.init({ easing:"ease-in-shine" , duration:800 , delay:0 })
},[])
  
  // function for write a text
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className='intern-container mt-28'>
      <header className='h-28 bg-[#606470] content-center text-center ml-6 mr-6 rounded-lg' data-aos='fade-up'>
        <p className='text-[##f7f7f7] text-4xl font-bold'>
          Internships for {text}
        </p>
      </header>
      <div className="intern-training-info flex justify-around pt-8 pb-8 bg-[#606470] ml-6 mr-6 rounded-lg mt-1">
        <div className='p-4 bg-[#363b4e] rounded-lg internship-available'>
            <p className=' text-white text-center '>Work from Home Internships</p>
        </div>
        <div className='p-4 bg-[#363b4e] rounded-lg internship-available'>
            <p className=' text-white text-center'>Internship With Training</p>
        </div>
      </div>
      <div className="intern-card-container ">
        {
            InternData.map((data)=>(
            <InternshipCards key={data.id} img={data.img} title={data.title}/>
        ))
    }
    </div>
    </div>
  );
};

export default Internship;
