import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Server, 
  Layers, 
  Database, 
  Brain, 
  Wrench,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";

const SkillCard = ({ icon: Icon, title, skills, colorClass, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`glass p-6 rounded-2xl ${colorClass}`}
  >
    <Icon className="w-8 h-8 mb-4 text-current" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string) => (
        <span key={skill} className="skill-tag px-3 py-1 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, tech, description, tags, colorFrom, colorTo, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
  >
    <div className={`h-2 bg-linear-to-r ${colorFrom} ${colorTo}`}></div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 italic text-sm">{tech}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex space-x-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-cyan-400 text-xs font-mono">#{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled ? 'glass py-3' : 'bg-transparent'}`}>
        <div className="text-xl font-bold tracking-tighter gradient-text">SNEHA SINGH</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/SnexhaSingh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sneha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 font-mono mb-4">Hello, I'm a</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Software Engineer <br />
            <span className="gradient-text">Intern</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg mb-10 mx-auto">
            Aspiring Software Engineer specializing in building scalable backend systems with Python and Java. 
            Passionate about Data Structures, Algorithms, and user-centric web solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              View Projects
            </a>
            <a href="#skills" className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-bold transition-all transform hover:scale-105">
              My Toolkit
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Technical <span className="gradient-text">Toolkit</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard 
            icon={Code2} 
            title="Languages" 
            skills={["Java", "Python", "JavaScript"]} 
            colorClass="neon-blue text-cyan-400"
            delay={0.1}
          />
          <SkillCard 
            icon={Server} 
            title="Backend" 
            skills={["Flask", "REST APIs", "Node.js"]} 
            colorClass="neon-purple text-purple-400"
            delay={0.2}
          />
          <SkillCard 
            icon={Layers} 
            title="Frontend" 
            skills={["HTML5/CSS3", "Tailwind CSS", "Bootstrap"]} 
            colorClass="neon-cyan text-cyan-300"
            delay={0.3}
          />
          <SkillCard 
            icon={Database} 
            title="Databases" 
            skills={["MySQL", "MongoDB"]} 
            colorClass="neon-orange text-orange-400"
            delay={0.4}
          />
          <SkillCard 
            icon={Brain} 
            title="Core CS" 
            skills={["DSA", "OOP", "DBMS", "SDLC"]} 
            colorClass="neon-blue text-cyan-400"
            delay={0.5}
          />
          <SkillCard 
            icon={Wrench} 
            title="Tools" 
            skills={["Git & GitHub", "VS Code", "Postman", "Swagger UI"]} 
            colorClass="neon-purple text-purple-400"
            delay={0.6}
          />
        </div>

        {/* Expertise Levels */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Expertise <span className="text-cyan-400">Levels</span></h3>
          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              { label: "Backend Development", value: "90%" },
              { label: "Java (OOP & DSA)", value: "85%" },
              { label: "Database Management", value: "80%" }
            ].map((item, idx) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="text-sm">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: idx * 0.2 }}
                    className="h-full bg-linear-to-r from-[#00d2ff] to-[#9d50bb]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center md:text-left"
        >
          Work <span className="gradient-text italic">Experience</span>
        </motion.h2>
        <div className="relative border-l border-gray-700 ml-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-[#020617]"></span>
            <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
            <p className="text-cyan-400 mb-2">Minds Tasks Technologies | May 2025 – July 2025</p>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-500 shrink-0" />
                <span>Developed REST APIs using Flask for a Book Management System.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-500 shrink-0" />
                <span>Integrated Swagger UI for interactive API documentation.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-500 shrink-0" />
                <span>Designed scalable backend architecture for real-time validation.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Stock Management System"
              tech="Flask + MySQL"
              description="Full-stack inventory system managing 500+ products with low-stock alerts and CRUD functionality."
              tags={["Python", "Flask", "Automation"]}
              colorFrom="from-cyan-500"
              colorTo="to-blue-500"
              delay={0.1}
            />
            <ProjectCard 
              title="Hospital Management System"
              tech="HTML, CSS, MySQL"
              description="A web-based system for patient records, billing automation, and doctor-patient mapping."
              tags={["FullStack", "Healthcare", "DataMgmt"]}
              colorFrom="from-purple-500"
              colorTo="to-pink-500"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 glass mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 italic"
          >
            Let's Connect
          </motion.h2>
          <p className="text-gray-400 mb-8">Ready to collaborate on innovative software solutions.</p>
          <div className="flex justify-center flex-wrap gap-8 mb-10">
            <a href="mailto:ssnehaa16092006@gmail.com" className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sneha" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>
            <a href="https://github.com/SnexhaSingh" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </a>
            <a href="tel:9354768122" className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
            </a>
          </div>
          <div className="text-sm text-gray-500 font-mono">
            &copy; 2024-2026 Sneha Singh | Sharda University
          </div>
        </div>
      </footer>
    </div>
  );
}
