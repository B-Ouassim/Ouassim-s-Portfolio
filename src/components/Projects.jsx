import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const projects = [
  { 
    title: "Enterprise System", 
    desc: "Enterprise-grade inventory and user tracking system featuring real-time data sync.", 
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Motion"],
    demo: "https://aymensiraj.github.io/Gestion-de-Stock-Entreprise",
    img: "gestion_stock"
  },
  { 
    title: "Inventory Tracker", 
    desc: "Enterprise-grade inventory tracking system featuring real-time data sync.",  
    tech: ["React", "Redux", "JSON", "Tailwind"],
    demo: "https://aymensiraj.github.io/Gestion-de-Stock-Entreprise",
    img: "game_project"
  },
  { 
    title: "Pizza Palace", 
    desc: "High-conversion landing page focused on fast load times and mobile UX.", 
    tech: ["React", "Tailwind", "Motion"],
    demo: "https://aymensiraj.github.io/Pizza-LandingPage/",
    img: "pizza"
  },
  // https://b-ouassim.github.io/Cafe-Landing-Page/    react
  // https://b-ouassim.github.io/Pizza-Landing-Page/   react
  // https://b-ouassim.github.io/Wealthome-Property-Lister/Wealthome-Project-main/  js
  // https://b-ouassim.github.io/JS-Weather-App/   js
  // https://b-ouassim.github.io/random-password-generator/Generate-Paswwords-main/   js
  // https://b-ouassim.github.io/JS-Local-Storage-ToDo-App/To-Do-List/    js
  // https://b-ouassim.github.io/JS-Interactive-Quiz-App/Quiz-App-main/   js
  // https://github.com/B-Ouassim/Python-Password-Generator-CLI  py
  // https://github.com/B-Ouassim/Python-Rock-Paper-Scissors-CLI  py
  // https://github.com/B-Ouassim/Python-CLI-Mad-Libs-Game   py
  // https://github.com/B-Ouassim/guess-the-number   py
  // https://b-ouassim.github.io/X-O-Game/X-O--Game-main/  js
  { 
    title: "Crispy Landing", 
    desc: "Clean, responsive landing page built with core web technologies.", 
    tech: ["HTML", "CSS", "JS"],
    demo: "https://wassim005.github.io/Crispy/Project_27/main-page.html",
    img: "crispy"
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  
  // Optional: Scroll progress bar logic
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="project" className="h-screen bg-[#FFFCF2] flex flex-col overflow-hidden border-b border-[#53161D]/10">
      
      {/* Fixed Header within the 100vh */}
      <div className="px-12 pt-12 flex justify-between items-end">
        <div>
          <h3 className="text-6xl md:text-8xl font-black text-[#53161D] uppercase tracking-tighter leading-none">
            Selected <span className="italic font-light opacity-60 text-5xl md:text-7xl">Works</span>
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#53161D] font-mono text-xs font-bold uppercase tracking-widest pb-2">
          <span>Scroll to explore</span>
          <FiArrowRight className="animate-bounce-x" />
        </div>
      </div>

      {/* The Horizontal Slider Container */}
      <div 
        ref={scrollRef}
        className="flex-1 flex gap-12 overflow-x-auto px-12 items-center snap-x snap-mandatory no-scrollbar pt-4 pb-12"
      >
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="min-w-[85vw] md:min-w-[60vw] h-[65vh] snap-center relative group overflow-hidden rounded-[3rem] bg-[#53161D] shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#53161D] via-transparent to-transparent opacity-90" />
            </div>

            {/* Project Details */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
              <div className="flex gap-3 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono font-bold text-[#FFFCF2] border border-[#FFFCF2]/20 px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">
                    {t}
                  </span>
                ))}
              </div>
              
              <h4 className="text-5xl md:text-7xl font-black text-[#FFFCF2] mb-4 tracking-tighter uppercase leading-none">
                {p.title}
              </h4>
              
              <p className="text-[#FFFCF2]/80 text-lg max-w-xl leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {p.desc}
              </p>

              <div className="flex items-center justify-between">
                <a 
                  href={p.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-4 bg-[#FFFCF2] text-[#53161D] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:pr-10 transition-all"
                >
                  View Live Case <FiArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
                </a>
                <span className="text-[#FFFCF2]/10 font-black text-9xl italic select-none absolute right-10 bottom-0 pointer-events-none">
                  0{i + 1}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Empty space at the end to allow the last card to center */}
        <div className="min-w-[10vw] h-full flex-shrink-0" />
      </div>

      {/* Progress Bar at the very bottom */}
      <motion.div 
        className="h-1 bg-[#53161D] origin-left"
        style={{ scaleX }}
      />
    </section>
  );
};

export default Projects;