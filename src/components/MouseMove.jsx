import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring configuration for that "heavy" high-end feel
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Detect if we are hovering over a link or button
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%', 
        translateY: '-50%',
      }}
    >
      {/* The Main Dot */}
      <motion.div 
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(83, 22, 29, 0.1)" : "#53161D"
        }}
        className="w-3 h-3 rounded-full relative"
      >
        {/* The Outer Ring (Only visible on hover) */}
        <motion.div 
          animate={{
            scale: isHovering ? 1.5 : 0,
            opacity: isHovering ? 1 : 0
          }}
          className="absolute inset-0 border border-[#53161D] rounded-full"
        />
      </motion.div>

      {/* Subtle Ambient Glow */}
      <div className={`
        absolute w-12 h-12 bg-[#53161D]/10 rounded-full blur-xl transition-opacity duration-500
        ${isHovering ? 'opacity-100' : 'opacity-0'}
      `} />
    </motion.div>
  );
};

export default CustomCursor;