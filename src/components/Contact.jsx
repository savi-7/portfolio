import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="contact" ref={containerRef} className="h-screen bg-background flex flex-col justify-end overflow-hidden pb-12 relative p-4">
      
      <motion.div 
        style={{ scale, opacity, y }}
        className="w-full bg-primary rounded-[3rem] px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl">
          <h2 className="text-6xl md:text-[8vw] leading-none font-bold font-heading text-background tracking-tighter mb-8">
            GOT AN IDEA?
          </h2>
          
          <p className="text-background/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            Let's build something extraordinary together. Currently open for opportunities and challenging projects.
          </p>

          <a data-hoverable="true" href="mailto:saviojoseph2581@gmail.com" className="inline-block px-12 py-6 rounded-full bg-background text-white font-bold text-lg md:text-xl uppercase tracking-widest hover:scale-[1.02] hover:bg-white hover:text-background transition-all duration-300">
            Start a Conversation
          </a>

          <div className="mt-24 flex justify-between items-end border-t border-background/20 pt-8 text-background font-medium">
            <div className="text-left text-sm font-mono uppercase tracking-widest hidden md:block">
              Koovappally <br/> Kerala, IN
            </div>
            
            <div className="flex gap-6 mx-auto md:mx-0">
              <SocialLink href="https://linkedin.com/in/saviojoseph007" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="https://github.com/savi-7" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="mailto:saviojoseph2581@gmail.com" icon={<Mail size={24} />} label="Email" />
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      data-hoverable="true" 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 text-background/80 hover:text-background transition-colors p-2"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
