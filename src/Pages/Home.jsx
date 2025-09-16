import React from 'react'
import Hero from '../Components/Herosection'
import Products from '../Components/Products'
import TestimonialCard from '../Components/TestimonialCard'
import Newsletter from '../Components/Newsletter'
import Appointment from '../Components/Appointment'
import InfoSection from '../Components/InfoSection'
import Icon from '../Components/Icon'
import Testimonial from '../Components/Testimonial'
import Navbar from '../Components/NavBar'
const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <InfoSection />
    <TestimonialCard />
    <Icon />
    <Testimonial />
    <Newsletter />
    <Appointment />
    

    </>
  )
}

export default Home