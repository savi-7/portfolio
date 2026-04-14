import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const row1 = ['React Ecosystem', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Flutter & Dart'];
  const row2 = ['IoT Architecture', 'Arduino C++', 'Python Data', 'Docker', 'AWS Services', 'Git Workflow', 'REST APIs'];

  // Duplicate for infinite marquee feel
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="skills" ref={targetRef} className="py-32 bg-background overflow-hidden flex flex-col gap-12">
      
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-lg font-mono text-secondary uppercase tracking-widest">Arsenal</h2>
      </div>

      <div className="relative w-[200vw] -left-[50vw] rotate-[-2deg] flex flex-col gap-8 md:gap-12">
        
        {/* Marquee Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-8 md:gap-16 whitespace-nowrap">
          {duplicatedRow1.map((skill, index) => (
            <div key={index} className="flex items-center gap-8 md:gap-16">
              <span className="text-5xl md:text-8xl font-heading font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)'}}>
                {skill}
              </span>
              <span className="text-white/20 text-3xl">✦</span>
            </div>
          ))}
        </motion.div>

        {/* Marquee Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-8 md:gap-16 whitespace-nowrap">
          {duplicatedRow2.map((skill, index) => (
            <div key={index} className="flex items-center gap-8 md:gap-16">
              <span className="text-5xl md:text-8xl font-heading font-bold text-white">
                {skill}
              </span>
              <span className="text-secondary text-3xl">✦</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
