import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity, scale }}
      id="home" 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden origin-top"
    >
      {/* Immersive Background Mesh */}
      <motion.div 
        style={{ y: yBlob }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-volumetric-blob -z-10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-full">
        
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 1.2, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/80">Available for new opportunities</span>
          </motion.div>
        </div>

        <div className="relative">
          {/* Main Typography */}
          <div className="overflow-hidden">
            <motion.h1 
              style={{ y: yText }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1.5 }}
              className="text-6xl md:text-[10vw] font-bold leading-[0.85] tracking-tighter"
            >
              SAVIO <span className="text-white/20 italic">JOSEPH</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-4 md:mt-0 md:-mt-8">
            <motion.h2
              style={{ y: yText }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1.5, delay: 0.1 }}
              className="text-4xl md:text-[8vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40"
            >
              DIGITAL CRAFTSMAN.
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col md:flex-row gap-8 items-center"
        >
          <p className="text-textMuted max-w-sm text-sm md:text-base font-medium font-mono text-center md:text-left leading-relaxed">
            I engineer elite, physics-driven web experiences and 
            robust software solutions using the cutting edge of modern technology.
          </p>
          
          <div className="h-px w-16 bg-white/20 hidden md:block" />

          <div className="flex gap-4">
            <a data-hoverable="true" href="#projects" className="relative group overflow-hidden rounded-full p-px bg-gradient-to-b from-white/20 to-white/0">
              <div className="inline-block px-8 py-4 rounded-full bg-background group-hover:bg-primary/10 transition-colors uppercase tracking-widest text-xs font-bold">
                See The Work
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
