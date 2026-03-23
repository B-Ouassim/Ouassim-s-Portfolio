import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const activeStyle = 'text-[#53161D] relative flex flex-col items-center text-xs uppercase tracking-[0.2em] font-black transition-all duration-300';

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'project' },
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