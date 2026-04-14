import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 
    'MongoDB', 'MySQL', 'PHP', 'Python', 'Flutter', 'Dart', 'Git', 'IoT/Arduino'
  ];

  const softSkills = [
    'Analytical Thinking', 'Problem Solving', 'Communication', 
    'Teamwork', 'Time Management', 'Adaptability', 'Critical Thinking'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           ref={ref}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What I work with</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            {/* Tech Skills */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-textMuted flex items-center gap-4">
                <span className="w-8 h-[1px] bg-primary/50"></span>
                Technical Skills
              </h3>
              <motion.div variants={containerVariants} className="flex flex-wrap gap-4">
                {techSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="px-6 py-3 rounded-full border border-primary/20 bg-surface text-textPrimary hover:border-primary hover:shadow-glow-primary hover:-translate-y-1 transition-all cursor-default font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-textMuted flex items-center gap-4">
                <span className="w-8 h-[1px] bg-secondary/50"></span>
                Soft Skills
              </h3>
              <motion.div variants={containerVariants} className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="px-6 py-3 rounded-full border border-secondary/20 bg-surface text-textPrimary hover:border-secondary hover:shadow-glow-secondary hover:-translate-y-1 transition-all cursor-default font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
