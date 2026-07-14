import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'project' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-[100] flex items-center justify-between py-6 px-12 bg-[#FFFCF2]/80 backdrop-blur-md border-b border-[#53161D]/10'>
      
      {/* Brand Logo */}
      <div className="text-3xl font-black tracking-tighter text-[#53161D]">
        Ouassim<span className="italic font-light text-[#53161D]/40">.</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 items-center">
        {navItems.map((item) => (
          <Link 
            key={item.target}
            to={item.target}
            spy={true}     
            smooth={true}
            duration={500} // Increased for a smoother glide
            offset={-80}
            onSetActive={() => setActive(item.target)} 
            className='relative group cursor-pointer'
          >
            <motion.p 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                active === item.target ? 'text-[#53161D]' : 'text-[#53161D]/40 group-hover:text-[#53161D]'
              }`}
            >
              {item.name}
            </motion.p>
            
            {/* Animated Underline */}
            {active === item.target && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#53161D] shadow-[0_0_10px_rgba(83,22,29,0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Status/CTA - Optional aesthetic touch */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[9px] font-mono font-bold text-[#53161D]/60 uppercase tracking-widest">
          Available for hire
        </span>
      </div>

    </nav>
  );
};

export default Navbar;