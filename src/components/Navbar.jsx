import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show navbar if scrolling UP or at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Works', href: '#projects' },
    { name: 'Profile', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="fixed top-0 left-0 right-0 z-50 py-6"
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            
            <a data-hoverable="true" href="#home" className="text-2xl font-bold font-heading mix-blend-difference text-white">
              S.J
            </a>

            <div className="hidden md:flex gap-1 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 mix-blend-difference text-white">
              {navItems.map((item, i) => (
                <a 
                  key={i}
                  data-hoverable="true"
                  href={item.href}
                  className="px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a data-hoverable="true" href="mailto:saviojoseph2581@gmail.com" className="font-mono text-xs uppercase tracking-widest mix-blend-difference text-white hover:opacity-50 transition-opacity">
              Let's Talk
            </a>

          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
