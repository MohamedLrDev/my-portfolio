import { useState } from 'react';
import projects from '../data/data';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
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
            Click on the project points to learn more
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
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-pointer"
                style={{ left: project.x, top: project.y }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
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

                  <div className="flex space-x-2">
                    <a
                      href={project.liveDemo}
                      className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white text-xs font-medium py-2 px-3 rounded text-center transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-xs font-medium py-2 px-3 rounded text-center transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* Tooltip arrow */}
                  <div className="absolute left-0 top-3 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white dark:border-r-gray-800 transform -translate-x-full" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
