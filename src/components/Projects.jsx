import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      num: '01',
      title: 'JC-Timbers: Smart Timber E-Commerce',
      description: 'A full-stack MERN e-commerce platform for timber and construction products. Features inventory management, cart & checkout workflow, order tracking, and an ML-based product recommendation engine.',
      stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Machine Learning'],
      accent: 'primary',
      accentColor: '#7C6AF7',
      glowClass: 'hover:shadow-glow-primary hover:border-primary/50 text-primary',
      githubLink: 'https://github.com/savi-7/JC-Timbers',
      webLink: 'https://jc-timbers-indol.vercel.app/'
    },
    {
      num: '02',
      title: 'IoT Smart Blind Stick',
      description: 'An IoT assistive device designed for visually impaired users. Uses HC-SR04 ultrasonic sensors for real-time obstacle detection and an integrated SOS button to send emergency alerts, improving mobility.',
      stack: ['IoT', 'Arduino', 'HC-SR04', 'Embedded C'],
      accent: 'secondary',
      accentColor: '#06D6A0',
      glowClass: 'hover:shadow-glow-secondary hover:border-secondary/50 text-secondary'
    },
    {
      num: '03',
      title: 'Student Management System',
      description: 'A web-based student records management platform with role-based access control for admins and staff. Built with secure CRUD operations for managing academic and personal data efficiently.',
      stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'RBAC'],
      accent: 'coral',
      accentColor: '#FF6B6B',
      glowClass: 'hover:shadow-glow-coral hover:border-coral/50 text-coral'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           ref={ref}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
        >
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Things I've built</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral rounded-full" />
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-card p-8 relative overflow-hidden group transition-all duration-500 bg-surface/50 border-white/5 ${project.glowClass}`}
              >
                {/* Bg pattern hover overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"/>
                
                {/* Accent Top Bar */}
                <div 
                  className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 z-10"
                  style={{ backgroundColor: project.accentColor }} 
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-heading font-bold text-surface/80 group-hover:text-textMuted/20 transition-colors pointer-events-none sel-none"
                          style={{ WebkitTextStroke: `1px ${project.accentColor}80`}}>
                      {project.num}
                    </span>
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.webLink && (
                        <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-4 text-textPrimary group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-textMuted text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
