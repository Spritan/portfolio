import { ContactForm } from '@/models/types';

export class ContactService {
  static async sendMessage(formData: ContactForm): Promise<{ success: boolean; message: string }> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock validation and submission
    if (!formData.name.trim()) {
      throw new Error('Name is required');
    }
    
    if (!formData.email.trim()) {
      throw new Error('Email is required');
    }
    
    if (!this.isValidEmail(formData.email)) {
      throw new Error('Please enter a valid email address');
    }
    
    if (!formData.message.trim()) {
      throw new Error('Message is required');
    }
    
    // In a real implementation, you would:
    // 1. Send email via service like EmailJS, Netlify Forms, or your backend API
    // 2. Return actual success/failure response
    
    console.log('Contact form submitted:', formData);
    
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    };
  }
  
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}