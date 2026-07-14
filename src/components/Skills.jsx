import { motion } from 'framer-motion';

const skills = [
  { 
    name: "Frontend",
    tools: [
      { name: "React", bg_color: "bg-[#61DAFB]/10", color: "text-[#61DAFB]", slug: "react" },
      { name: "JS", bg_color: "bg-[#F7DF1E]/10", color: "text-[#F7DF1E]", slug: "javascript" },
      { name: "Tailwind", bg_color: "bg-[#06B6D4]/10", color: "text-[#06B6D4]", slug: "tailwindcss" },
      { name: "HTML5", bg_color: "bg-[#E34F26]/10", color: "text-[#E34F26]", slug: "html5" },
    ],
    accent: "group-hover:shadow-[0_0_40px_rgba(97,218,251,0.15)]",
    dot: "bg-[#61DAFB]" 
  },
  { 
    name: "Backend", 
    tools: [
      { name: "Laravel", bg_color: "bg-[#FF2D20]/10", color: "text-[#FF2D20]", slug: "laravel" }, 
      { name: "Node.js", bg_color: "bg-[#339933]/10", color: "text-[#339933]", slug: "nodedotjs" }, 
      { name: "PHP", bg_color: "bg-[#777BB4]/10", color: "text-[#777BB4]", slug: "php" }, 
    ], 
    accent: "group-hover:shadow-[0_0_40px_rgba(255,45,32,0.15)]",
    dot: "bg-[#FF2D20]" 
  },
  { 
    name: "Database", 
    tools: [
      { name: "MySQL", bg_color: "bg-[#4479A1]/10", color: "text-[#4479A1]", slug: "mysql" }, 
      { name: "MongoDB", bg_color: "bg-[#47A248]/10", color: "text-[#47A248]", slug: "mongodb" } 
    ],
    accent: "group-hover:shadow-[0_0_40px_rgba(71,162,72,0.15)]",
    dot: "bg-[#47A248]" 
  },
  { 
    name: "Workflow", 
    tools: [
      { name: "Git", bg_color: "bg-[#F05032]/10", color: "text-[#F05032]", slug: "git" }, 
      { name: "GitHub", bg_color: "bg-white/10", color: "text-white", slug: "github" },
<<<<<<< HEAD
      { name: "Jira", bg_color: "bg-[#0052CC]/10", color: "text-[#0052CC]", slug: "jira" },
      { name: "Docker", bg_color: "bg-[#2496ED]/10", color: "text-[#2496ED]", slug: "docker" }
=======
      { name: "Jira", bg_color: "bg-[#0052CC]/10", color: "text-[#0052CC]", slug: "jira" } 
>>>>>>> 45197ca87a8758473ce6c7d0043fbcfe4f9615d4
    ],
    accent: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
    dot: "bg-white" 
  },
  { 
    name: "Game Dev", 
    tools: [
      { name: "Unreal", bg_color: "bg-white/10", color: "text-white", slug: "unrealengine" }, 
      { name: "Unity", bg_color: "bg-white/10", color: "text-white", slug: "unity" },
      { name: "Blender", bg_color: "bg-[#F5792A]/10", color: "text-[#F5792A]", slug: "blender" },
    ],
    accent: "group-hover:shadow-[0_0_40px_rgba(245,121,42,0.15)]",
    dot: "bg-[#F5792A]" 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#53161D] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-150 h-screen bg-[#FFFCF2]/5 blur-[150px] rounded-full -mr-64 -mt-64" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16 border-l-4 border-[#FFFCF2] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[#FFFCF2] uppercase tracking-tighter">
            Stack <span className="opacity-30 italic font-light">& Tools</span>
          </h2>
        </motion.div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {skills.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`break-inside-avoid p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 group ${category.accent}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-2 h-2 rounded-full ${category.dot} animate-pulse`} />
                <h4 className="text-sm font-mono font-bold text-[#FFFCF2]/50 uppercase tracking-[0.3em]">
                  {category.name}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.tools.map((t, id) => (
                  <motion.div 
                    key={id} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl ${t.bg_color} border border-transparent hover:border-white/10 transition-all cursor-default`}
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('text-[#', '').replace(']', '')}`} 
                      alt={t.name}
                      className="w-5 h-5 brightness-110"
                    />
                    <span className={`text-[13px] font-bold ${t.color}`}>
                      {t.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;