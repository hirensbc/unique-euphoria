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

import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair5 from "../../src/assets/Images/hair5.jpg";
import Hair2 from "../../src/assets/Images/Hair2.jpg";

const info = [
  {
    img: Hair4,
    title: "Choose Your <br /> Perfect Hair",
    desc: "Find the perfect match from our premium collection of 100% Raw hair.  Whether you're looking for volume, length, or a complete transformation, we have it all.",
    reverse: false,
    button: "View Collection",
  },
  {
    img: Hair5,
    title: "Easily place <br /> your order",
    desc: "Enjoy a seamless shopping experience with our secure checkout and fast shipping.  Choose your preferred length, texture, and style with just a few clicks.",
    reverse: true,
    button: "Order Now",
  },
  {
    img: Hair2,
    title: "Style With <br /> Confidence",
    desc: "Unleash your beauty with premium quality hair that speaks volumes! Whether you love sleek and straight, bold and curly, or luxurious waves, Unique Euphoria has the perfect bundles to match your vibe.",
    reverse: false,
    button: "Explore Styling Tips",
  },
];
const Home = () => {
  return (
    <>
    <NavBar textColor="text-black"/>
    <Hero />
    <Products />
    <InfoSection info={info} />
    <TestimonialCard />
    <Icon />
    <Testimonial />
    <Newsletter />
    <Appointment />
    

    </>
  )
}

export default Home