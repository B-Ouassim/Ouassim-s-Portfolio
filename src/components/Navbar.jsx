import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");
<<<<<<< HEAD
=======
  const activeStyle = 'text-[#53161D] relative flex flex-col items-center text-xs uppercase tracking-[0.2em] font-black transition-all duration-300';
>>>>>>> 3f644925b00696f40b63b58b31c21a2756fc1e89

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'project' },
<<<<<<< HEAD
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
=======
  ];
  
  const handleSetActive = (item) => {
    setActive(item);
  }

  return (
    <nav className='fixed bg-[#FFFCF2] left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-full hidden md:flex gap-8 text-sm font-medium text-gray-400 items-center border-b-2 border-black py-5 px-20 justify-between'>
        <div className="text-4xl font-black tracking-tighter text-[#53161D] w-2xl">
            Ouassim<span className="text-[#53161D]">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center justify-between w-6xl">
            {navItems.map((item) => (
                <Link 
                    key={item.target}
                    to={item.target}
                    spy={true}     
                    smooth={true}
                    duration={100}
                    offset={-80}
                    onSetActive={handleSetActive} 
                    className='relative flex flex-col items-center cursor-pointer'
                    onClick={() => setActive(item.target)}
                    >
                    <p className={`${active === item.target ? activeStyle : 'hover:text-[#53161D] font-bold transition-all text-l uppercase tracking-[0.2em] hover:tracking-[0.3em] duration-300'}`}>
                        {item.name}
                    </p>
                    
                    <span 
                        className={`absolute -bottom-1 w-7 h-0.5 bg-[#53161D] rounded-full shadow-[0_0_2px_#53161D,0_0_20px_#53161D] transition-all duration-500 ease-out 
                        ${active === item.target ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
                    />
                </Link>
        ))}
        </div>
    </nav>
  )
}

export default Navbar
>>>>>>> 3f644925b00696f40b63b58b31c21a2756fc1e89
