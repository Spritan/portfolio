import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const listener = () => {
      const scrollY = window.pageYOffset;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          if (scrollY >= sectionTop) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', listener);
    listener(); // Call once to set initial state

    return () => window.removeEventListener('scroll', listener);
  }, [sectionIds, offset]);

  return activeId;
}