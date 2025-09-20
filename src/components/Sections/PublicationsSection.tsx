import { Section } from '@/components/Layout/Section';
import { Card } from '@/components/UI/Card';
import { publications } from '@/data/mockData';
import { ExternalLink, FileText } from 'lucide-react';

export function PublicationsSection() {
  const getPublicationTypeColor = (type: string) => {
    const colors = {
      journal: 'bg-blue-100 text-blue-800',
      conference: 'bg-green-100 text-green-800',
      workshop: 'bg-purple-100 text-purple-800',
      preprint: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <Section
      id="publications"
      title="Publications & Research"
      subtitle="Academic contributions and research publications in top-tier venues"
      background="gray"
    >
      <div className="space-y-6">
        {sortedPublications.map((pub) => (
          <Card key={pub.id} hover className="text-left">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {pub.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-2">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-gray-700 font-medium">
                  {pub.venue} • {pub.year}
                </p>
              </div>
              
              <div className="flex flex-col sm:items-end gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPublicationTypeColor(pub.type)}`}>
                  {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                </span>
                
                <div className="flex gap-3">
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      DOI
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {pub.abstract && (
              <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                {pub.abstract}
              </p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}