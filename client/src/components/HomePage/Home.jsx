import React from 'react'
import HomeTop from './HomeTop'
import Chatbot from '../ChatBot'
import Nav from '../Nav'

// This home function used for call all the files of the home page
const Home = () => {
  return (
    <>
      <div className="hometop-call">
        <HomeTop/>
        <Chatbot/>
      </div>
    </>
  )
}

export default Home
