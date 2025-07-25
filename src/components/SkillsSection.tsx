import { Code, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
export default function SkillsSection() {
  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-800 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 transform rotate-12 scale-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
        >
          SKILLS & EXPERTISE
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: 'Frontend Development',
              skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
            },
            {
              icon: Palette,
              title: 'UI/UX Design',
              skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
            },
            {
              icon: Rocket,
              title: 'Backend & DevOps',
              skills: ['Node.js', 'Python', 'AWS', 'Docker'],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              <category.icon className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
