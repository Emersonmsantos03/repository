import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import LandingPage from './components/LandingPage'
import Advantages from './components/Advantages'
import Interescted from './components/Interescted'
import Footer from './components/Footer'

function App() {

  const landing = document.querySelector('landingPage-container')

  return (
    <div>
   <Header />
   <AboutMe />
   <LandingPage/>
   <Advantages />
   <Skills />
   <Interescted/>
   <Footer />
   
   </div>
  )
}

export default App
