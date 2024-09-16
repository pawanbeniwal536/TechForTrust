import React from 'react'
import HomeTop from './HomeTop'
import Chatbot from '../ChatBot'
import Internship from '../Internship/Internship'
import About from '../About/About'
import Footer from '../Footer/Footer'

// This home function used for call all the files of the home page
const Home = () => {
  return (
    <>
      <div className="hometop-call">
        <HomeTop/>
        <About/>
        <Internship/>
        <Chatbot/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
