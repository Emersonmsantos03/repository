import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Screen from './components/Screen'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Board from './components/Board'

function App() {

  return (
    <div>
   <Header />
   <Screen />
   <AboutMe />
   <div className='teste'>
   <Skills />
   <div className='teste3'>
   <Board />
   </div>
   </div>
   </div>
  )
}

export default App
