import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Layout/Section';
import { Card } from '@/components/UI/Card';
import { projects } from '@/data/mockData';
import { Github, ExternalLink, Star, ChevronDown, Download, Users } from 'lucide-react';

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A collection of projects showcasing my technical expertise and problem-solving approach"
    >
      {/* Displayed Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {displayedProjects.map((project, index) => {
          // Extract metrics from description
          const hasStars = project.description.includes('⭐');
          const hasDownloads = project.description.includes('downloads');
          const hasUsers = project.description.includes('🚀');
          const starsMatch = project.description.match(/⭐ (\d+) stars/);
          const downloadsMatch = project.description.match(/(\d+k?\+?) downloads/);
          const usersMatch = project.description.match(/🚀 (\d+\+?) unique users/);
          
          return (
            <Card key={project.id} className="group h-full" hover delay={index * 0.1}>
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors pr-2">
                  {project.title}
                </h3>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              </div>
              
              {/* Metrics Badges */}
              {(hasStars || hasDownloads || hasUsers) && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {starsMatch && (
                    <motion.span 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      <Star className="w-3 h-3" />
                      {starsMatch[1]} stars
                    </motion.span>
                  )}
                  {downloadsMatch && (
                    <motion.span 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      <Download className="w-3 h-3" />
                      {downloadsMatch[1]} downloads
                    </motion.span>
                  )}
                  {usersMatch && (
                    <motion.span 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      <Users className="w-3 h-3" />
                      {usersMatch[1]} users
                    </motion.span>
                  )}
                </div>
              )}
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {project.description.replace(/⭐ \d+ stars on GitHub • \d+k?\+? downloads on PyPI|⭐ \d+ stars on GitHub|🚀 \d+\+? unique users in \d+ month/g, '').trim()}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-50 text-gray-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
      
      {projects.length > 4 && (
        <motion.div 
          className="text-center mt-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>{showAll ? 'Show Less' : `View More (${projects.length - 4} more)`}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </Section>
  );
}