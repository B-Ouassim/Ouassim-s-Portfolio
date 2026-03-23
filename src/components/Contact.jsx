import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#53161D] flex flex-col justify-between relative overflow-hidden">
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-black text-[#FFFCF2]/5 uppercase select-none pointer-events-none leading-none">
        Connect
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[#FFFCF2] text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8">
            Let's <br /> <span className="italic font-light opacity-50">Talk.</span>
          </h2>
          
          <p className="text-[#FFFCF2]/60 font-mono text-lg mb-12 max-w-lg mx-auto uppercase tracking-widest">
            Currently looking for new opportunities and interesting projects to build.
          </p>

          {/* Large Magnetic-style Email Button */}
          <motion.a
            href="mailto:babakhaliouassim@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-[#FFFCF2] text-[#53161D] px-12 py-8 rounded-full text-2xl md:text-4xl font-black uppercase tracking-tighter hover:bg-white transition-all shadow-2xl"
          >
            Start a project
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#53161D] text-[#FFFCF2] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <FiArrowUpRight size={32} />
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Branding & Socials */}
      <footer className="w-full px-12 py-12 border-t border-[#FFFCF2]/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Copyright / Info */}
        <div className="text-[#FFFCF2]/40 font-mono text-xs uppercase tracking-widest text-center md:text-left">
          <p>© 2026 Ouassim Babakhali</p>
          <p className="mt-1 italic">Handcrafted with React & Framer Motion</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-10">
          {[
            { icon: <FiGithub size={24}/>, link: "https://github.com/B-Ouassim" },
            { icon: <FiLinkedin size={24}/>, link: "https://www.linkedin.com/in/ouassim-babakhali-69bb272b4" },
            { icon: <FiMail size={24}/>, link: "mailto:babakhaliouassim@example.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#FFFCF2" }}
              className="text-[#FFFCF2]/40 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Location / Status */}
        <div className="text-right hidden md:block">
          <p className="text-[#FFFCF2] font-mono text-xs font-bold uppercase tracking-widest">Casablanca, Morocco</p>
          <div className="flex items-center justify-end gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[#FFFCF2]/40 text-[10px] font-mono uppercase font-bold">Available for Work</span>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Contact;