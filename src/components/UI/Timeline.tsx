import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/models/types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };
  return (
    <div className="space-y-6 sm:space-y-8">
      {experiences.map((exp, index) => (
        <motion.div 
          key={exp.id} 
          className="relative"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          {/* Timeline line */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-3 sm:left-4 top-12 sm:top-16 w-0.5 h-full bg-blue-200"></div>
          )}
          
          {/* Timeline dot */}
          <motion.div 
            className="absolute left-1.5 sm:left-2 top-6 sm:top-8 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.3 + index * 0.1, 
              type: "spring", 
              stiffness: 200 
            }}
          ></motion.div>
          
          {/* Content */}
          <div className="ml-8 sm:ml-12">
            <div 
              className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(exp.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedCards.has(exp.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    </motion.div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-1 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                    {exp.location}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              {/* Collapsible content */}
              <AnimatePresence>
                {expandedCards.has(exp.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                <ul className="space-y-2 mb-3 sm:mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start text-sm leading-relaxed">
                      <span className="text-blue-600 mr-2 mt-1.5 text-xs flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md border font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Always visible summary (first 2 items) */}
              {!expandedCards.has(exp.id) && (
                <ul className="space-y-2 mb-3 sm:mb-4">
                  {exp.description.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start text-sm leading-relaxed">
                      <span className="text-blue-600 mr-2 mt-1.5 text-xs flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                  {exp.description.length > 2 && (
                    <li className="text-blue-600 text-sm font-medium">
                      +{exp.description.length - 2} more items - Click to expand
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}