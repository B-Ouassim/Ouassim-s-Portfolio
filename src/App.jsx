<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/MouseMove';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // This ensures we can't scroll while the page is loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className='bg-[#FFFCF2] min-h-screen selection:bg-[#53161D] selection:text-[#FFFCF2]'>
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* The main content only renders once loading is done, 
          or stays hidden behind the loader */}
      <main>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
    </div>
  );
};

export default App;
=======
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
>>>>>>> 3f644925b00696f40b63b58b31c21a2756fc1e89
