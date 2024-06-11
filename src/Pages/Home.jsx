import React, { Fragment } from 'react'
import Nav from '../Components/Nav'
import LandingSection from '../Components/LandingSection'
import About from './About'
import Footer from '../Components/Footer'
import Sections from '../Components/Home/Sections'

const Home = () => {
  return (
   <Fragment>
       <LandingSection/>
       <Sections/>
   </Fragment>
  )
}

export default Home