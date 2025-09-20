import React from 'react';
import { Section } from '@/components/Layout/Section';
import { Card } from '@/components/UI/Card';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';

export function ContactSection() {
  const { formData, isSubmitting, updateField, submitForm } = useContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and research."
    >
      <div className="max-w-2xl mx-auto">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => updateField('subject', e.target.value)}
                placeholder="Project collaboration, speaking opportunity, etc."
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Tell me about your project, idea, or how I can help..."
                rows={6}
                required
                className="w-full"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </form>
        </Card>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Prefer direct communication?{' '}
            <a
              href="mailto:proyashpsb@gmail.com"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
            >
              Send me an email
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}