import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-40 relative bg-surface">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          {/* Header left */}
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">Trajectory</span>
              <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tighter">Experience</h2>
            </div>
          </div>

          {/* Timeline Right */}
          <div className="md:w-2/3 relative pl-8 md:pl-16">
            
            {/* Animated Draw Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10">
              <motion.div style={{ height: lineHeight }} className="w-full bg-primary origin-top" />
            </div>

            {/* Single Experience Block */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[36px] md:-left-[68px] top-4 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-primary">Internship</span>
                
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">Flutter Engineer</h3>
                <h4 className="text-xl text-textMuted mb-8 font-medium">Riss Technologies, Kozhikode</h4>
                
                <ul className="space-y-6">
                  <ListItem text="Engineered highly responsive e-commerce mobile applications utilizing the Flutter ecosystem." />
                  <ListItem text="Collaborated intensively within cross-functional loops to refactor critical UI flows, yielding a massive performance enhancement." />
                  <ListItem text="Architected Dart solutions for complex state management logic." />
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-4 text-white/80 leading-relaxed text-lg">
      <span className="text-primary mt-1.5 opacity-80 text-xl font-mono">▹</span>
      <span>{text}</span>
    </li>
  )
}
