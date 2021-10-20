
import React, {useState, useEffect} from 'react'

import Hero from './sections/hero/Hero.component'
import Offer from './sections/offer/Offer.component'
import CourseStructure from './sections/courseStructure/CourseStructure.component'
import ElementaryEgzam from './sections/elementaryEgzam/ElementaryEgzam.components'
import Finals from './sections/finals/Finals.component'
import Contests from './sections/contests/Contest.component'
import CurrentMaterial from './sections/currentMaterial/CurrentMaterial.component'
import Contact from './sections/contact/Contact.components'
import Navbar from './navbar/Navbar.component'
import Footer from './sections/footer/Footer.component'
import GetScreenSize from './getScreenSize/getScreenSize'

import {thematicScope, sectionTexts} from '../mock/data'

import '../style/main.scss'



const Layout = () => {
  
  const [scopeData, setScope] = useState({})
  const [texts, setText] = useState({})
  const [scrSize, setScrSize] = useState('small')

  useEffect(() => {
    setScope(thematicScope);
    setText(sectionTexts);
    setScrSize(GetScreenSize())
  }, [])

// console.log(scrSize)

  return (
    <>
      <Navbar />
      <Hero />
      <Offer scrSize={scrSize}/>
      <CourseStructure />
      <ElementaryEgzam info={scopeData.elementaryEgzam} paragraph={texts.elementaryEgzam}/>
      <Finals scrSize={scrSize} info={scopeData.finals} paragraph={texts.finals}/>
      <Contests paragraph={texts.contest}/>
      <CurrentMaterial paragraph={texts.currentMaterial}/>
      <Contact />
      <Footer />
    </>
  )
}


export default Layout
