import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    { icon: <Mail size={24} />, label: "Email", value: "saviojoseph2581@gmail.com", link: "mailto:saviojoseph2581@gmail.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+91 6282690165", link: "tel:+916282690165" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", value: "saviojoseph007", link: "https://linkedin.com/in/saviojoseph007" },
    { icon: <Github size={24} />, label: "GitHub", value: "savi-7", link: "https://github.com/savi-7" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Bottom Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[120px] rounded-t-full -z-10" />

      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-widest mb-4">Let's work together</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Got a project in mind? Let's talk.</h3>
          
          <p className="text-lg text-textMuted mb-12 max-w-2xl mx-auto">
            I'm currently open to full-time roles, internships, and freelance projects. Drop me a message or reach out through any channel below.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="glass-card p-6 flex flex-col items-center gap-4 hover:border-primary/40 hover:-translate-y-2 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-glow-primary">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-textMuted mb-1">{card.label}</h4>
                  {card.link ? (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-textPrimary font-medium hover:text-primary transition-colors text-sm break-all">
                      {card.value}
                    </a>
                  ) : (
                    <span className="text-textPrimary font-medium text-sm break-all">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="mailto:saviojoseph2581@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[#5F4CD9] text-white font-bold text-lg hover:shadow-glow-primary transition-shadow cursor-pointer"
          >
            Send me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
