import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUp, Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="py-8 border-t border-primary/10 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-textMuted text-sm">
          © {new Date().getFullYear()} Savio Joseph. Built with React.
        </div>

        <div className="flex gap-6">
          <a href="https://linkedin.com/in/saviojoseph007" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/savi-7" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:saviojoseph2581@gmail.com" className="text-textMuted hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-surface border border-primary/30 flex items-center justify-center text-primary shadow-glow-primary hover:bg-primary hover:text-white transition-colors z-50 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
