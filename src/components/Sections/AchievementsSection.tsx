import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Layout/Section';
import { Card } from '@/components/UI/Card';
import { achievements } from '@/data/mockData';
import { Award, Trophy, Star, Target, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export function AchievementsSection() {
  const [showAll, setShowAll] = useState(false);

  const getAchievementIcon = (category: string) => {
    const icons = {
      award: Award,
      recognition: Star,
      competition: Trophy,
      incubation: TrendingUp,
      milestone: Target,
      presentation: Award
    };
    return icons[category as keyof typeof icons] || Award;
  };

  const getAchievementColor = (category: string) => {
    const colors = {
      award: 'bg-yellow-100 text-yellow-800',
      recognition: 'bg-blue-100 text-blue-800',
      competition: 'bg-green-100 text-green-800',
      incubation: 'bg-purple-100 text-purple-800',
      milestone: 'bg-indigo-100 text-indigo-800',
      presentation: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year);
  const displayedAchievements = showAll ? sortedAchievements : sortedAchievements.slice(0, 4);

  return (
    <Section
      id="achievements"
      title="Achievements & Recognition"
      subtitle="Awards, recognitions, and milestones in my professional journey"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {displayedAchievements.map((achievement, index) => {
          const Icon = getAchievementIcon(achievement.category);
          
          return (
            <Card key={achievement.id} hover delay={index * 0.1}>
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className={`p-2 sm:p-3 rounded-full ${getAchievementColor(achievement.category)} bg-opacity-20 flex-shrink-0`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2 + index * 0.1, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${getAchievementColor(achievement.category).split(' ')[1]}`} />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getAchievementColor(achievement.category)} self-start`}>
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {achievements.length > 4 && (
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
            <span>{showAll ? 'Show Less' : `View More (${achievements.length - 4} more)`}</span>
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