import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Briefcase, Globe } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const facts = [
    { icon: <MapPin size={20} />, text: 'Koovappally, Kerala' },
    { icon: <GraduationCap size={20} />, text: 'MCA — Amal Jyothi College' },
    { icon: <Briefcase size={20} />, text: 'Flutter Intern @ Riss Tech' },
    { icon: <Globe size={20} />, text: 'English, Malayalam, Hindi, Tamil' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Quote */}
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">About Me</h2>
            <blockquote className="text-3xl md:text-4xl font-heading font-medium leading-normal border-l-4 border-primary pl-6 py-2">
              "I build software that solves real problems — from timber 
              e-commerce platforms to IoT devices that help the visually impaired."
            </blockquote>
          </div>

          {/* Right: Stats & Facts */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-6 text-center hover:shadow-glow-primary transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-textMuted uppercase tracking-wider font-semibold">Projects Built</div>
              </div>
              <div className="glass-card p-6 text-center hover:shadow-glow-secondary transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">4+</div>
                <div className="text-sm text-textMuted uppercase tracking-wider font-semibold">Technologies</div>
              </div>
              <div className="glass-card p-6 text-center hover:shadow-glow-primary transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-textMuted uppercase tracking-wider font-semibold">Internship</div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-secondary rounded-l-none">
              <h3 className="text-xl font-heading font-semibold mb-6">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 text-textPrimary">
                    <span className="text-primary">{fact.icon}</span>
                    <span className="text-sm font-medium">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
