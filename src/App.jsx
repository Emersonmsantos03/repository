import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Screen from './components/Screen'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {

  return (
    <div>
   <Header />
   <Screen/>
   <AboutMe/>
   <Skills/>
   </div>
  )
}

export default App
