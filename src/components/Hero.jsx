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
    <section id="home" className="h-screen flex flex-col items-center justify-center lg:pt-32 relative bg-[#FFFBFOF]">
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
    </section>
  );
};

export default Hero;