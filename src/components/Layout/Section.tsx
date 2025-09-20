import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({ id, title, subtitle, children, className, background = 'white' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24",
        background === 'gray' ? 'bg-gray-50' : 'bg-white',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}