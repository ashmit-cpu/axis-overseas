import React from 'react'
import Navbar from '../Components/Common/Navbar/Navbar'
import Herosection from '../Components/HomePage/Herosection/Herosection'
import AboutIntro from '../Components/HomePage/AboutIntro/AboutIntro'
import OurServices from '../Components/HomePage/OurServices/OurServices'
import StudyAbroad from '../Components/HomePage/StudyAbroad/StudyAbroad'
import Immigration from '../Components/HomePage/Immigration/Immigration'
import Footer from '../Components/HomePage/Footer/Footer'

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Herosection/>
        <AboutIntro/>
        <OurServices/>
        <StudyAbroad/>
        <Immigration/>
        <Footer/>
    </div>
  )
}

export default Home