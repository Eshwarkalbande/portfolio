import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  Code2, 
  User, 
  ChevronRight, 
  ExternalLink,
  GraduationCap,
  Cpu,
  Globe,
  PenTool,
  Download
} from 'lucide-react';
import HeroScene from './components/HeroScene';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full shadow-2xl">
        <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
        <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-blue-400 font-mono text-sm md:text-base tracking-widest uppercase mb-4">
            Computer Science Student
          </motion.h2>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-6">
            Eshwar <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Kalbande
            </span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md bg-slate-950/20 py-2 border-y border-transparent">
            Full-Stack Developer building user-centric, scalable digital solutions. Proficient in MERN stack, Java (DSA), and modern web architectures.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3.5 bg-white text-slate-950 hover:bg-slate-200 transition font-bold rounded-full text-sm">
              View Work
            </a>
            <a href="/resume.pdf" download="Eshwar_Kalbande_Resume.pdf" className="px-8 py-3.5 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 transition font-bold rounded-full text-sm flex items-center gap-2">
              <Download size={16} /> Download CV
            </a>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Eshwarkalbande" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="mailto:eshwarkalbande@gmail.com" className="text-slate-300 hover:text-teal-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-500 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10"
    >
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-400 mb-2">
            <User size={24} />
            <h2 className="text-3xl font-black text-white">About Me</h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
            I am a highly motivated and disciplined learner, eager to learn new skills and adapt fast. I am committed to continuous self-improvement and technical excellence.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
            My journey is driven by a passion for solving complex problems through technology and a proactive approach to mastering new skills, from software architecture to hardware innovation.
          </p>
          <div className="pt-4 border-t border-slate-800 flex gap-12">
            <div>
              <span className="block text-3xl font-black text-white">1+</span>
              <span className="text-sm text-slate-500 font-mono mt-1 block">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-black text-white">10+</span>
              <span className="text-sm text-slate-500 font-mono mt-1 block">Projects Built</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              {[
                { label: "Location", value: "Nagpur, India" },
                { label: "Email", value: "eshwarkalbande@gmail.com" },
                { label: "Education", value: "B.Tech in Computer Science" },
                { label: "Availability", value: "Open for Opportunities" },
              ].map((fact, i) => (
                <li key={i} className="group flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0 hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <span className="text-slate-500 font-mono text-sm group-hover:text-slate-400">{fact.label}</span>
                  <span className="text-slate-200 font-medium text-right group-hover:text-white">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/50 border-y border-slate-800/50 relative z-10"
    >
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-3 text-blue-400 mb-12"
        >
          <Briefcase size={28} />
          <h2 className="text-4xl font-black text-white px-2">Experience</h2>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-slate-950 border-4 border-blue-500 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
              <span className="text-blue-400 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full w-fit">Sept 2025 - Aug 2026</span>
            </div>
            
            <h4 className="text-lg text-slate-300 font-medium mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-slate-700"></span>
              Axiom TechGuru LLC, Nagpur
            </h4>
            
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3 hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
                <ChevronRight className="shrink-0 text-teal-500 mt-1" size={16} />
                <span><strong className="text-white">1-Year Extended Internship:</strong> Role extended based on project performance and rapid mastery of corporate software workflows.</span>
              </li>
              <li className="flex items-start gap-3 hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
                <ChevronRight className="shrink-0 text-teal-500 mt-1" size={16} />
                <span><strong className="text-white">Full-Stack Contributions:</strong> Actively adopted the MERN stack for scalable corporate digital solutions and internal tools.</span>
              </li>
              <li className="flex items-start gap-3 hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
                <ChevronRight className="shrink-0 text-teal-500 mt-1" size={16} />
                <span><strong className="text-white">Phia Lab Web Features:</strong> Developed custom admin panel modules to streamline inventory management, allowing for real-time item categorization and data updates.</span>
              </li>
              <li className="flex items-start gap-3 hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
                <ChevronRight className="shrink-0 text-teal-500 mt-1" size={16} />
                <span><strong className="text-white">CRM Architecture:</strong> Architected high-fidelity wireframes and data flow models for a Customer Relationship Management system to optimize business operational data.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "EliteCare - AI Healthcare SaaS",
      tags: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "Gemini API"],
      description: "Engineered a full-stack medical SaaS platform featuring an AI clinical diagnostic portal, symptom checker, and intelligent medication scanner using the Google Gemini API. Built a responsive and interactive user interface utilizing React, Tailwind CSS, and Framer Motion.",
      featured: true
    },
    {
      title: "Online Guard Hiring System",
      tags: ["Java", "Web Technologies", "Authentication"],
      description: "Engineered an end-to-end recruitment platform using Java and web technologies to automate candidate verification and job matching. Implemented secure user authentication and a responsive dashboard.",
      featured: false
    },
    {
      title: "Lloyd Metals & Energy Ltd. - UI/UX",
      tags: ["Figma", "UI/UX", "Responsive Design"],
      description: "Designed the digital information architecture for a large-scale industrial corporate platform using Figma. Optimized user flows for stakeholders and investors.",
      featured: false
    },
    {
      title: "Neural Chroma AI - Pro",
      tags: ["Python", "Deep Learning", "CNNs", "GUI"],
      description: "Developed a Python-based desktop application utilizing deep learning for automated image colorization. Built a custom GUI to make advanced image processing accessible.",
      featured: true
    }
  ];

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10"
    >
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center justify-between mb-12 relative z-10"
      >
        <div className="flex items-center gap-3 text-teal-400">
          <Code2 size={28} />
          <h2 className="text-4xl font-black text-white px-2">Featured Projects</h2>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 perspective-[1000px]">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 50 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className={`group bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 rounded-3xl p-8 shadow-2xl transition-all ${project.featured ? 'lg:col-span-2 bg-gradient-to-br from-slate-900/80 to-blue-900/20' : ''}`}
          >
            <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <a href="https://github.com/Eshwarkalbande" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(30px)" }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-slate-950/80 text-slate-300 border border-slate-800 text-xs px-3 py-1 rounded-full font-mono shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  const customStyles = [
    { 
      title: "Programming", 
      skills: ["Java (DSA)", "Python", "C", "C++"],
      icon: Code2,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    { 
      title: "CS Fundamentals", 
      skills: ["OOPS", "DBMS", "Operating Systems"],
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    { 
      title: "Web Development", 
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "Redux Toolkit", "SEO"],
      icon: Globe,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    { 
      title: "Design & Tools", 
      skills: ["Figma", "Canva (UI/UX)", "Git", "Visual Studio Code"],
      icon: PenTool,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    },
  ];

  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/30 border-y border-slate-800/50 relative z-10"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 -z-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Who I Am</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CREATIVE MIND, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">PRECISE CODE.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto hover:text-slate-200 hover:-translate-y-1 transition-all duration-300">
            A full-stack developer obsessed with building beautiful, performant products. I blend precise logic with clean architecture to deliver experiences users actually love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {customStyles.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col sm:flex-row gap-6 shadow-xl overflow-hidden relative group"
              >
                {/* Background glow effect on hover */}
                <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2 ${category.bg.replace('/10', '/50')}`} />
                
                <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border transition-colors ${category.bg} ${category.border}`}>
                  <Icon className={category.color} size={32} />
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 font-sans tracking-tight">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="bg-slate-950/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function EducationSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4 -z-10 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 text-emerald-400 mb-12 relative z-10"
      >
        <GraduationCap size={28} />
        <h2 className="text-4xl font-black text-white px-2">Education & Workshops</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h3>
            <p className="text-slate-400 mb-4">Smt. Radhika Tai Pandav College of Engineering, Nagpur</p>
            <div className="flex items-center gap-4 text-sm font-mono text-slate-500">
              <span className="bg-slate-800 px-3 py-1 rounded-full text-white">Expected 2027</span>
              <span className="text-emerald-400 font-bold">CGPA: 7.5/10</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-4">Previous Education</h3>
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-4 hover:translate-x-2 transition-all duration-300">
                <h4 className="text-slate-200 font-medium font-mono text-sm mb-1 hover:text-white transition-colors">Class 12th (HSC)</h4>
                <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors">Porwal College of Commerce and Science | Result: 60% (2021-2022)</p>
              </div>
              <div className="hover:translate-x-2 transition-all duration-300">
                <h4 className="text-slate-200 font-medium font-mono text-sm mb-1 hover:text-white transition-colors">Class 10th (SSC)</h4>
                <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors">St. Joseph's Convent, Nagpur | Result: 80% (2019-2020)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">Technical Workshops</h3>
          <ul className="space-y-6">
            <li className="relative pl-6">
              <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-500"></span>
              <h4 className="text-white font-medium mb-2">Drone Making Workshop (1 Month)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Gained hands-on experience in drone assembly, flight dynamics, and hardware integration.</p>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-teal-500"></span>
              <h4 className="text-white font-medium mb-2">App Development Workshop (1 Month)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Learned mobile application architecture, UI design, and development lifecycle.</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/50 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <h3 className="text-xl font-black text-white tracking-tight mb-2">ESHWAR.</h3>
          <p className="text-slate-500 text-sm">Crafting digital experiences at the intersection of design and code.</p>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Skills</a>
        </div>
        
        <div className="flex justify-end gap-4">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Eshwarkalbande" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
            <Github size={18} />
          </a>
          <a href="mailto:eshwarkalbande@gmail.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} Eshwar Kalbande.
        </p>
      </div>
    </footer>
  );
}