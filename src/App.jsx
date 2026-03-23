import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div style={{height: '200vh'}} className='bg-[#FFFCF2]'>
      <Navbar />
      <div>
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App