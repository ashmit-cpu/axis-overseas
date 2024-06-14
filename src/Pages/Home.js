import React from 'react'
import Navbar from '../Components/Common/Navbar/Navbar'
import Herosection from '../Components/HomePage/Herosection/Herosection'
import AboutIntro from '../Components/HomePage/AboutIntro/AboutIntro'
import OurServices from '../Components/HomePage/OurServices/OurServices'

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Herosection/>
        <AboutIntro/>
        <OurServices/>
    </div>
  )
}

export default Home