import { motion } from 'framer-motion';

const certs = [
  "HTML and CSS in depth - Meta",
  "Building Web Applications in PHP - Michigan", 
  "Version Control - Meta", 
  "SQL - Michigan",
  "React Basics - Meta",
  "Cybersecurity Essentials - IBM",
  "Foundations of Cybersecurity - Google",
  "JS Programming - Meta",
  "Python Fundamentals - Microsoft",
  "Front-End Intro - Meta",
  "Cybersecurity - Cisco",
];

// Split the certs into two groups for the two rows
const firstRow = certs.slice(0, 6);
const secondRow = certs.slice(6);

const Certificates = () => {
  return (
    <section className="py-24 bg-[#FFFCF2] border-y border-[#53161D]/10 overflow-hidden relative">
      
      {/* Background Stylized Label */}
      <div className="absolute top-10 left-10 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-[#53161D]/20" />
        <span className="text-[10px] font-mono font-bold text-[#53161D]/40 uppercase tracking-[0.4em]">
          Academic & Professional Validation
        </span>
      </div>

      <div className="flex flex-col gap-8 mt-12">
        {/* Row 1: Moves Left */}
        <div className="flex overflow-hidden relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 pr-12"
          >
            {[...firstRow, ...firstRow].map((c, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-[#53161D]/50 uppercase tracking-tighter hover:text-[#53161D] transition-all duration-500 cursor-default select-none group cursor-pointer">
                {c} <span className="ml-12 opacity-20 group-hover:opacity-100 italic">/</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex overflow-hidden relative">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 pr-12"
          >
            {[...secondRow, ...secondRow].map((c, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-[#53161D]/50 uppercase tracking-tighter hover:text-[#53161D] transition-all duration-500 cursor-default select-none group cursor-pointer">
                {c} <span className="ml-12 opacity-20 group-hover:opacity-100">/</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative center piece */}
      <div className="mt-16 flex flex-col items-center">
         <h2 className="text-2xl font-black text-[#53161D] uppercase tracking-widest italic">
           Certificates
         </h2>
         <div className="w-1 h-12 bg-[#53161D] mt-4" />
      </div>

    </section>
  );
};

export default Certificates;