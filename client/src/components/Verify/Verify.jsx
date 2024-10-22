import React, { useState, useEffect } from 'react';
import './Verify.css';
import Typed from 'typed.js';
import { useRef } from 'react'; 


const Verify = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [certificateData, setCertificateData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const element = useRef(null);

  useEffect(() => {

    const typed = new Typed(element.current, {
     strings: ["Account/Joining Information with us", "Certificate Issue with us"],
     typeSpeed: 100,
     backSpeed: 20,
     backDelay: 2000,
      loop: true,
     loop: true,
   });
   
   return  () => {
     typed.destroy();
   }
   }, []);

  useEffect(() => {
    // Apply dark mode class to the body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleInputChange = (e) => {
    setCode(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError('Please enter a 6-digit code.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/verify-code/${code}`);
      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setCertificateData(data);
      } else {
        setError(data.message || 'Invalid verification code.');
      }
    } catch (err) {
      setError('Error verifying the code.');
    }
  };
  const handleBack = () => {
    setSuccess(false);
  }

  return (
    <div className={`verify-container ${isDarkMode ? 'dark' : ''} flex flex-col`} id='verify'>
    <p className=' text-4xl font-bold mb-8'>
          Verify <span className='element' ref={element}></span>
        </p>
      <div className="verify-box">
        <h1 className="verify-title">Account Verification</h1>
        {success ? (
          <div className="verify-success">
            <p className="success-message text-center">Your account is successfully verified!</p>
            {certificateData && (
              <div className="certificate-details">
                <p><strong>Certificate ID:</strong> {certificateData.certificateId}</p>
                <p><strong>Name:</strong> {certificateData.name}</p>
                <p><strong>Domain:</strong> {certificateData.domain}</p>
                <p><strong>Duration:</strong> {certificateData.duration}</p>
                <p><strong>Date of Joining:</strong> {new Date(certificateData.dateOfJoining).toLocaleDateString()}</p>
                <button onClick={handleBack} className='bg-blue-700 p-2 rounded-xl w-full'>Go BACK</button>
              </div>
            )}
           
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="form-label">Enter Verification Code</label>
            <input
              type="text"
              value={code}
              onChange={handleInputChange}
              className="form-input"
              maxLength="6"
              placeholder="6-digit code"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-primary">Verify Code</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Verify;
