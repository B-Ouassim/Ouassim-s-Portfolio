// import pfp from "../assets/pfp.jpeg";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const roles = ["Full-Stack Developer", "Creative Coder", "UI/UX Enthusiast"];
  const texts = ["I love making things", "I enjoy solving problems", "I am passionate about design"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
<<<<<<< HEAD
    <section id="home" className="h-screen flex flex-col items-center justify-center lg:pt-32 relative bg-[#FFFCF2]">
=======
    <section id="home" className="h-screen flex flex-col items-center justify-center lg:pt-32 relative bg-[#FFFBFOF]">
>>>>>>> 3f644925b00696f40b63b58b31c21a2756fc1e89
      <div className="text-center z-10">
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg lg:text-4xl text-[#53161D] font-mono tracking-widest uppercase"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-7xl md:text-8xl lg:text-[180px] font-black text-[#53161D] tracking-tighter leading-none uppercase"
        >
          Ouassim <br /> Babakhali
        </motion.h1>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative mt-10 w-full h-48 text-center group"
      >
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="text-lg lg:text-l text-[#53161D] font-mono tracking-widest uppercase"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
      </motion.div>
<<<<<<< HEAD

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#53161D]/40 uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-[#53161D]/20 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#53161D]" />
        </motion.div>
      </motion.div>
=======
>>>>>>> 3f644925b00696f40b63b58b31c21a2756fc1e89
    </section>
  );
};

export default Hero;