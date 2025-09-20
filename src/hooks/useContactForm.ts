import { useState } from 'react';
import { ContactForm } from '@/models/types';
import { ContactService } from '@/services/contactService';
import { useToast } from '@/hooks/use-toast';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateField = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const submitForm = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const result = await ContactService.sendMessage(formData);
      
      if (result.success) {
        toast({
          title: 'Message sent!',
          description: result.message,
          duration: 5000
        });
        resetForm();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'destructive',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    updateField,
    submitForm,
    resetForm
  };
}