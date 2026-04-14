import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  const containerRef = useRef(null);
  
  const projects = [
    {
      num: '01',
      title: 'JC-Timbers',
      subtitle: 'Smart Timber E-Commerce',
      description: 'Manages product listings, inventory tracking, cart, orders, and secure checkout workflows. Integrates ML-based similar product recommendation to enhance customer shopping experience.',
      stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Machine Learning'],
      image: '/jc-timbers.png',
      githubLink: 'https://github.com/savi-7/JC-Timbers',
      webLink: 'https://jc-timbers-indol.vercel.app/'
    },
    {
      num: '02',
      title: 'Blind Stick',
      subtitle: 'IoT Assistive Device',
      description: 'Designed an IoT assistive device to detect obstacles and enhance mobility for visually impaired users. Used ultrasonic HC-SR04 sensors paired with an SOS button to send emergency alerts for improved user safety.',
      stack: ['IoT', 'Arduino', 'HC-SR04', 'Embedded C', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2600&auto=format&fit=crop',
    },
    {
      num: '03',
      title: 'Student Management System',
      subtitle: 'PHP/MySQL Platform',
      description: 'Developed a web-based platform to manage student records and academic details. Built using PHP and MySQL with secure CRUD operations and role-based access for organized data management.',
      stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'RBAC'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop',
    }
  ];

  return (
    <section id="projects" ref={containerRef} className="py-32 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter">Projects</h2>
          </div>
          <p className="text-textMuted max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            A curated selection of my most demanding engineering problems, solved.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={cardRef} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      
      {/* 3D Tilt Image */}
      <div className="w-full lg:w-3/5">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.02}
          className="relative w-full aspect-[4/3] rounded-2xl md:rounded-[2.5rem] overflow-hidden group"
        >
          <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out" 
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
        </Tilt>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest">{project.num} — {project.subtitle}</span>
          </motion.div>
        </div>

        <motion.h3 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6"
        >
          {project.title}
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-textMuted text-lg leading-relaxed mb-8"
        >
          {project.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {project.stack.map((tech, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-white/60">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          {project.githubLink && (
            <a data-hoverable="true" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white group transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <Github size={18} />
              </span>
              <span className="text-xs uppercase font-bold tracking-widest">Repository</span>
            </a>
          )}
          {project.webLink && (
            <a data-hoverable="true" href={project.webLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white group transition-colors">
              <span className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-background transition-all">
                <ExternalLink size={18} />
              </span>
              <span className="text-xs uppercase font-bold tracking-widest">Live Site</span>
            </a>
          )}
        </motion.div>
      </div>

    </div>
  )
}
