import { BlogPost } from '@/models/types';

/**
 * Blog service that fetches posts from Medium RSS feed
 */
export class BlogService {
  private static readonly RSS_URL = 'https://medium.com/feed/@Spritan';
  private static readonly CORS_PROXY = 'https://api.allorigins.win/raw?url=';

  /**
   * Fetches latest blog posts from Medium RSS feed
   */
  static async fetchLatestPosts(limit: number = 5): Promise<BlogPost[]> {
    try {
      // Use CORS proxy to fetch RSS feed
      const response = await fetch(`${this.CORS_PROXY}${encodeURIComponent(this.RSS_URL)}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch RSS feed: ${response.status}`);
      }
      
      const xmlText = await response.text();
      const posts = this.parseRSSFeed(xmlText);
      
      return posts.slice(0, limit);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Fallback to mock data if RSS fetch fails
      return this.getMockPosts().slice(0, limit);
    }
  }

  /**
   * Parses RSS XML feed and converts to BlogPost array
   */
  private static parseRSSFeed(xmlText: string): BlogPost[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    const posts: BlogPost[] = [];
    
    items.forEach((item, index) => {
      try {
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        
        // Extract excerpt from description (remove HTML tags)
        const excerpt = description
          .replace(/<[^>]*>/g, '')
          .replace(/&[^;]+;/g, ' ')
          .trim()
          .substring(0, 200) + '...';
        
        // Parse publication date
        const publishedAt = pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        
        // Extract tags from description or use default
        const tags = this.extractTags(description);
        
        posts.push({
          id: `medium-${index + 1}`,
          title,
          excerpt,
          publishedAt,
          url: link,
          readTime: this.estimateReadTime(description),
          tags
        });
      } catch (error) {
        console.error('Error parsing RSS item:', error);
      }
    });
    
    return posts;
  }

  /**
   * Extracts tags from description or returns default tags
   */
  private static extractTags(description: string): string[] {
    // Try to extract hashtags or common tech terms
    const hashtags = description.match(/#[\w]+/g) || [];
    const techTerms = ['React', 'TypeScript', 'JavaScript', 'Python', 'AI', 'ML', 'DevOps', 'Web Development'];
    
    const tags = hashtags.map(tag => tag.substring(1));
    
    // Add tech terms if found in description
    techTerms.forEach(term => {
      if (description.toLowerCase().includes(term.toLowerCase()) && !tags.includes(term)) {
        tags.push(term);
      }
    });
    
    return tags.slice(0, 3); // Limit to 3 tags
  }

  /**
   * Estimates read time based on content length
   */
  private static estimateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  /**
   * Fallback mock posts if RSS fetch fails
   */
  private static getMockPosts(): BlogPost[] {
    return [
      {
        id: '1',
        title: 'Building Scalable AI Systems: Lessons from Production',
        excerpt: 'Explore the key architectural decisions and challenges when deploying AI models at scale in production environments.',
        publishedAt: '2024-01-15',
        url: 'https://medium.com/@Spritan/building-scalable-ai-systems',
        readTime: '8 min read',
        tags: ['AI', 'Architecture', 'DevOps']
      },
      {
        id: '2',
        title: 'Security-First DevOps: Implementing Zero-Trust CI/CD',
        excerpt: 'A comprehensive guide to implementing security-first DevOps practices with zero-trust principles in your CI/CD pipeline.',
        publishedAt: '2023-12-20',
        url: 'https://medium.com/@Spritan/security-first-devops',
        readTime: '12 min read',
        tags: ['DevOps', 'Security', 'CI/CD']
      },
      {
        id: '3',
        title: 'From Research to Startup: Bridging Academic Innovation',
        excerpt: 'Insights on translating academic research into viable startup opportunities and navigating the commercialization process.',
        publishedAt: '2023-11-28',
        url: 'https://medium.com/@Spritan/research-to-startup',
        readTime: '10 min read',
        tags: ['Startup', 'Research', 'Innovation']
      }
    ];
  }

  /**
   * Searches blog posts by query string
   */
  static async searchPosts(query: string): Promise<BlogPost[]> {
    try {
      const posts = await this.fetchLatestPosts(10); // Get more posts for search
      
      return posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    } catch (error) {
      console.error('Error searching blog posts:', error);
      return [];
    }
  }
}