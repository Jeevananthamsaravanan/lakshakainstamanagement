import React, { Fragment } from 'react'
import Nav from '../Components/Nav'
import LandingSection from '../Components/LandingSection'
import About from './About'
import Footer from '../Components/Footer'

const Home = () => {
  return (
   <Fragment>
       <Nav/>
       <LandingSection/>
       <About/>
       <Footer/>
   </Fragment>
  )
}

export default Home