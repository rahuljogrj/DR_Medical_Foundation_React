import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import WhyChooseUS from '../components/WhyChooseUs'
import Contact from './Contact.jsx'


const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel />
      <Services />
      <WhyChooseUS />
     <Contact />
    </div>
  )
}

export default Home
