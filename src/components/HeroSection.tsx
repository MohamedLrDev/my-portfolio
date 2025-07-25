import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScroll, useTransform } from 'framer-motion';
export default function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const mountainY = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      />

      <motion.div style={{ y: mountainY }} className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <path
            d="M0,800 L300,200 L600,400 L900,100 L1200,300 L1200,800 Z"
            fill="currentColor"
            className="text-blue-300 dark:text-purple-900"
          />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white dark:bg-purple-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Hero content */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-gray-800 dark:text-white mb-6"
        >
          MOHAMED LRHALI
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl text-red-600 dark:text-red-400 mb-8"
        >
          FULL STACK DEVELOPER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Crafting digital experiences with modern technologies and creative design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-red-600 dark:text-red-400 mb-2">Explore My Work</span>
          <ChevronDown className="w-6 h-6 text-red-600 dark:text-red-400 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
