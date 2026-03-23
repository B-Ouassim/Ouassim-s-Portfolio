import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  // Smooth counter logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 1000); // Small pause at 100%
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of the loader
    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh", // Curtain reveal effect
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-[#53161D] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Stylized "OB" Initials */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[40vw] font-black text-[#FFFCF2]">OB</h1>
      </div>

      <div className="relative z-10 w-full max-w-xs md:max-w-md px-6">
        
        {/* The Percentage Counter */}
        <div className="flex items-end justify-between mb-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-[#FFFCF2] italic tracking-tighter"
          >
            {progress}%
          </motion.span>
          <span className="text-[#FFFCF2]/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
            Loading Experience
          </span>
        </div>

        {/* High-End Progress Bar */}
        <div className="relative h-[2px] w-full bg-[#FFFCF2]/10 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-[#FFFCF2] shadow-[0_0_15px_#FFFCF2]"
          />
        </div>

        {/* Staggered Text Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-between items-center"
        >
          <p className="text-[#FFFCF2]/60 font-mono text-[10px] uppercase tracking-widest">
            Portfolio v2.0
          </p>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-1 h-1 bg-[#FFFCF2] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Border Frame */}
      <div className="absolute inset-8 border border-[#FFFCF2]/5 pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;