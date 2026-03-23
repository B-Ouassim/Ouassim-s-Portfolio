import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Vivo Energy",
    role: "PFE - IT Support",
    date: "Feb 2026",
    location: "Casablanca, Maroc",
    desc: "Spearheaded technical troubleshooting and user assistance protocols. Gained deep insight into enterprise IT infrastructure and collaborative problem-solving within a high-stakes environment."
  },
  {
    company: "Capgemini Engineering",
    role: "Observation Internship",
    date: "June 2025 - July 2025",
    location: "Casablanca, Maroc",
    desc: "Immersed in Agile project management methodologies and large-scale software delivery lifecycles. Observed the synergy between cross-functional teams in a global engineering firm."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#FFFCF2] min-h-screen flex flex-col items-center">
      {/* Header with floating effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-[#53161D] uppercase tracking-tighter">
          Career Path
        </h2>
        <div className="h-2 w-24 bg-[#53161D] mx-auto mt-4" />
      </motion.div>

      <div className="relative max-w-5xl w-full px-6">
        {/* Central Timeline Line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#53161D]/10" />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* The Dot on the timeline */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#53161D] border-4 border-[#FFFCF2] z-10" />

              {/* Date Column */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0 px-12 text-left md:text-right">
                <span className={`text-[#53161D] font-mono font-bold text-2xl ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {exp.date}
                </span>
                <p className="text-[#53161D]/60 text-xs uppercase tracking-[0.2em] font-bold mt-1">
                  {exp.location}
                </p>
              </div>

              {/* Card Content */}
              <div className="w-full md:w-1/2 px-12">
                <div className="bg-white p-8 rounded-2xl shadow-[20px_20px_60px_#e6e3db,-20px_-20px_60px_#ffffff] hover:shadow-none transition-all duration-500 border border-[#53161D]/5 group">
                  <h3 className="text-2xl font-bold text-[#53161D] mb-1 group-hover:italic transition-all">
                    {exp.role}
                  </h3>
                  <p className="text-[#53161D] font-mono text-sm font-bold opacity-80 mb-4 italic">
                    @ {exp.company}
                  </p>
                  <p className="text-[#53161D]/50 leading-relaxed text-sm">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;