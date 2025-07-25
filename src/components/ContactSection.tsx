import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
        >
          LET'S CREATE
          <br />
          <span className="text-red-600 dark:text-red-400">SOMETHING AMAZING</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Ready to bring your ideas to life? Let's talk about your next project.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 dark:bg-red-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
}
