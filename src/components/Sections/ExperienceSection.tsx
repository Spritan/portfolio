import { useState } from 'react';
import { Section } from '@/components/Layout/Section';
import { Timeline } from '@/components/UI/Timeline';
import { experiences } from '@/data/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  
  // Since experiences are already sorted chronologically (newest first), we can slice directly
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="My journey through technology, research, and entrepreneurship"
      background="gray"
    >
      <Timeline experiences={displayedExperiences} />
      
      {experiences.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>{showAll ? 'Show Less' : `View More (${experiences.length - 3} more)`}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
    </Section>
  );
}