import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'

function App() {
 

  return (
    <>
    
    <div style={{border:'10px solid red', height:'300px', width:'200px',backgroundColor: 'white'}}>
      <h2 style={{color:'red'}}><u>ABES Engineering collage</u></h2>
      <p style={{color:'red'}}>Name :Om kesarwani
               B.TECH(CSE-AIML)
      </p>
      <p style={{color:'red'}}>Roll_NO:2400321530138</p>
      <p style={{color:'red'}} >DOB:29-7-2006</p>
      <p style={{color:'red'}}>BLOOD GROPU:O+</p>
    </div>
      
    </>
  )
}

export default App

