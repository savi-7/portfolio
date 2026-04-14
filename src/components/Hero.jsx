import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/10">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">Available for opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Savio Joseph.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-textPrimary h-8 font-heading">
            <TypeAnimation
              sequence={[
                'Software Developer', 1500,
                'MERN Stack Builder', 1500,
                'Flutter Developer', 1500,
                'IoT Enthusiast', 1500,
                'Problem Solver', 1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-textMuted max-w-xl leading-relaxed">
            Motivated MCA student from Kerala with a passion for building
            real-world applications — from full-stack e-commerce platforms
            to IoT assistive devices. I turn ideas into working software.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 hover:shadow-glow-primary transition-all cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-5 mt-6">
            <a href="https://linkedin.com/in/saviojoseph007" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors p-2 glass-card hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/savi-7" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors p-2 glass-card hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="mailto:saviojoseph2581@gmail.com" className="text-textMuted hover:text-primary transition-colors p-2 glass-card hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Floating Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:ml-auto w-full max-w-md hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full bg-[#1e1e2e]/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 shadow-glow-primary overflow-hidden"
          >
            {/* Mac OS dot buttons */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <pre className="text-sm md:text-base font-mono leading-relaxed text-blue-300">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-yellow-300">savio</span>{' '}
              <span className="text-white">=</span> {'{\n'}
              {'  '}role: <span className="text-green-300">"Software Developer"</span>{',\n'}
              {'  '}stack: [<span className="text-green-300">"MERN"</span>, <span className="text-green-300">"Flutter"</span>, <span className="text-green-300">"PHP"</span>]{',\n'}
              {'  '}passion: <span className="text-green-300">"Building impactful apps"</span>{',\n'}
              {'  '}status: <span className="text-green-300">"Open to opportunities 🚀"</span>{'\n'}
              {'};'}
            </pre>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
