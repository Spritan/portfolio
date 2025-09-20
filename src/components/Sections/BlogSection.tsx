import { Section } from '@/components/Layout/Section';
import { Card } from '@/components/UI/Card';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { ExternalLink, Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';

export function BlogSection() {
  const { posts, loading, error } = useBlogPosts(3);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  if (error) {
    return (
      <Section
        id="blog"
        title="Latest Blog Posts"
        subtitle="Recent thoughts and insights from my Medium blog"
        background="gray"
      >
        <Card className="text-center py-8">
          <p className="text-gray-600">Failed to load blog posts. Please try again later.</p>
        </Card>
      </Section>
    );
  }

  return (
    <Section
      id="blog"
      title="Latest Blog Posts"
      subtitle="Recent thoughts and insights from my Medium blog"
      background="gray"
    >
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.id} hover>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  <span>Read more</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://medium.com/@Spritan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <span>View All Posts</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </>
      )}
    </Section>
  );
}