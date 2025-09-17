import React from 'react'
import Hero from '../Components/Herosection'
import Products from '../Components/Products'
import TestimonialCard from '../Components/TestimonialCard'
import Newsletter from '../Components/Newsletter'
import Appointment from '../Components/Appointment'
import InfoSection from '../Components/InfoSection'
import Icon from '../Components/Icon'
import Testimonial from '../Components/Testimonial'
import NavBar from '../Components/NavBar'
const Home = () => {
  return (
    <>
    <NavBar textColor="text-black"/>
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