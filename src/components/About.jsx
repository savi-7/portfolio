import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative bg-surface overflow-hidden">
      
      {/* Background typographic noise */}
      <motion.div style={{ y, opacity }} className="absolute -right-[10vw] top-[10vh] text-[40vw] font-heading font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        CODE
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-1" />
          
          <div className="md:col-span-8">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-10">The Genesis</h2>
               <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tighter mb-12 mix-blend-difference">
                 I architect systems that bridge the physical and digital world. From building full-stack platforms for heavy industry to intelligent hardware for accessibility.
               </p>
             </motion.div>

             <div className="grid sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
               <Stat number="03" label="Major Releases" delay={0.1} />
               <Stat number="02" label="Core Domains" delay={0.2} />
               <Stat number="0∞" label="Lines Written" delay={0.3} />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col"
    >
      <span className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">{number}</span>
      <span className="text-xs uppercase tracking-widest text-textMuted font-medium">{label}</span>
    </motion.div>
  )
}
