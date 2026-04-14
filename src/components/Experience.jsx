import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Where I've worked</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/20 mx-auto rounded-full" />
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

            {/* Experience Item */}
            <div className="relative md:w-1/2 md:pr-12 md:ml-0 md:text-right py-4">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-auto md:right-[-4px] top-6 w-4 h-4 rounded-full bg-primary shadow-glow-primary md:translate-x-[20px] -translate-x-[36px]" />
              
              <div className="glass-card p-8 hover:border-primary/40 transition-colors inline-block w-full text-left">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                  Internship
                </div>
                <h3 className="text-2xl font-heading font-bold text-textPrimary mb-1">Flutter Intern</h3>
                <h4 className="text-lg text-textMuted mb-6 font-medium">Riss Technologies, Kozhikode</h4>
                
                <ul className="space-y-4 mb-6">
                  {[
                    "Contributed to an e-commerce mobile application built with Flutter.",
                    "Collaborated with cross-functional teams to enhance and optimise app features.",
                    "Gained hands-on experience in Dart programming and mobile UI development."
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-3 text-textMuted"
                    >
                      <span className="text-primary mt-1.5 opacity-80">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'Mobile UI'].map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-md bg-surface border border-white/5 text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
