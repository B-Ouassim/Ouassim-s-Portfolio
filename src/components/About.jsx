import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const About = () => {
  return (
    <section id="about" className="flex items-center bg-[#53161D] relative overflow-hidden border-b border-[#FFFCF2]/10 min-h-screen py-20">
      
      {/* Decorative Background Text - Adds a "Designer" feel */}
      <div className="absolute top-10 left-0 text-[15rem] font-black text-[#FFFCF2]/5 select-none leading-none tracking-tighter uppercase whitespace-nowrap">
        Creative Mind
      </div>

      {/* Soft Glow Ambient Light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFFCF2]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Image with Dynamic Frame */}
        <MotionDiv 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group"
        >
          {/* Decorative Border Frame */}
          <div className="absolute -inset-4 border border-[#FFFCF2]/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-[#2A0B0E]">
            <img 
<<<<<<< HEAD
              src="person.avif"
=======
              src="/your-image-path.jpg" // Add your pfp2 path here
>>>>>>> 45197ca87a8758473ce6c7d0043fbcfe4f9615d4
              alt="Aymen Working" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#53161D]/80 via-transparent to-transparent" />
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-[#FFFCF2] text-[#53161D] p-6 rounded-full font-mono font-bold text-xs tracking-tighter shadow-xl hidden md:block"
          >
            BASED IN <br/> MOROCCO
          </motion.div>
        </MotionDiv>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 space-y-10">
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >            
            <h2 className="text-[5rem] md:text-[8rem] font-black text-[#FFFCF2] tracking-tighter uppercase leading-[0.85] italic">
              About <span className="block not-italic opacity-50">Me.</span>
            </h2>
          </MotionDiv>

          <MotionDiv 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-[#9FB2AC] text-2xl md:text-3xl leading-tight font-light">
              I'm a <span className="text-[#FFFCF2] font-medium">Full-Stack Developer</span> crafting high-performance digital experiences. 
              With a toolkit centered around <span className="italic text-[#FFFCF2]">React, Node.js, and Laravel</span>, I bridge the gap between complex logic and elegant design.
            </p>
            
            <div className="h-[1px] w-20 bg-[#FFFCF2]/30 my-8" />

            <p className="text-[#9FB2AC] text-lg font-mono uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9FB2AC]" />
              Turning complex problems into simple, beautiful code.
            </p>
          </MotionDiv>

          {/* Minimal Stats or Tags */}
          <MotionDiv
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex gap-8 pt-4"
          >
            <div>
<<<<<<< HEAD
              <p className="text-[#FFFCF2] font-black text-3xl">Graduated</p>
=======
              <p className="text-[#FFFCF2] font-black text-3xl">PFE</p>
>>>>>>> 45197ca87a8758473ce6c7d0043fbcfe4f9615d4
              <p className="text-[#9FB2AC] text-xs uppercase font-mono mt-1 font-bold">Current Status</p>
            </div>
            <div className="w-[1px] h-12 bg-[#FFFCF2]/10" />
            <div>
              <p className="text-[#FFFCF2] font-black text-3xl">2026</p>
              <p className="text-[#9FB2AC] text-xs uppercase font-mono mt-1 font-bold">Available for Work</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;