import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Palette, Rocket, Moon, Sun } from 'lucide-react';

const ParallaxPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useScroll();

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  // Check for saved user preference on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Check system preference
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const mountainY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Projects data
  const projects = [
    { id: 1, name: 'Jersy Shop Landing', tech: 'React, TypeScript, Node.js', x: '25%', y: '30%' },
    { id: 2, name: 'AI Dashboard', tech: 'Next.js, Python, TensorFlow', x: '65%', y: '45%' },
    { id: 3, name: 'Mobile App', tech: 'React Native, Firebase', x: '45%', y: '25%' },
    { id: 4, name: 'Data Visualization', tech: 'D3.js, WebGL', x: '75%', y: '65%' },
    { id: 5, name: 'Blockchain DApp', tech: 'Solidity, Web3.js', x: '30%', y: '70%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            PORTFOLIO<span className="text-red-600 dark:text-red-400">.</span>
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="dark:text-white" size={24} />
              ) : (
                <Menu className=" dark:text-white" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="px-6 py-4 space-y-2">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        />

        <motion.div
          style={{ y: mountainY }}
          className="absolute inset-0 opacity-20 dark:opacity-10"
        >
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

      {/* Projects Section */}
      <section className="min-h-screen bg-white dark:bg-gray-900 py-20 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              SELECT A<br />
              <span className="text-red-600 dark:text-red-400">PROJECT</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              click on the project points to learn more
            </p>
          </motion.div>

          {/* Interactive Project Map */}
          <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-red-600 to-red-800 dark:from-purple-800 dark:to-purple-600 rounded-3xl overflow-hidden">
            {/* Map background pattern */}
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Project points */}
            {projects.map((project, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <motion.div
                  key={project.id}
                  className="absolute cursor-pointer"
                  style={{ left: project.x, top: project.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Point marker */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-red-200 dark:border-purple-200 animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-white rounded-full animate-ping opacity-75" />
                  </div>

                  {/* Project info tooltip */}
                  <motion.div
                    className="absolute left-6 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-72 z-50"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{
                      x: isHovered ? 0 : -10,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.tech}</p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {`A ${project.tech.split(', ')[0]} project showcasing ${project.name.toLowerCase()}`}
                    </p>

                    {/* Action buttons - now clickable */}
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white text-xs font-medium py-2 px-3 rounded text-center transition-colors"
                        onClick={(e) => e.preventDefault()} // Prevent default for demo
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-xs font-medium py-2 px-3 rounded text-center transition-colors"
                        onClick={(e) => e.preventDefault()} // Prevent default for demo
                      >
                        GitHub
                      </a>
                    </div>

                    <div className="absolute left-0 top-3 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white dark:border-r-gray-800 transform -translate-x-full" />
                  </motion.div>
                </motion.div>
              );
            })} 
          </div>
        </div>
      </section>
      {/* Skills Section */}
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

      {/* Contact Section */}
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
    </div>
  );
};

export default ParallaxPortfolio;
