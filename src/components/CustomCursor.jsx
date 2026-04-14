import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ isHovering }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference',
    }
  };

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {isVisible && (
        <motion.div
          animate={isHovering ? "hover" : "default"}
          variants={variants}
          transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        />
      )}
    </>
  );
}
