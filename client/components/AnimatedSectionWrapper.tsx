import { useEffect, useState } from 'react';
import { useSectionContext } from '@/context/SectionContext';

interface AnimatedSectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  enterAnimation: string;
}

export default function AnimatedSectionWrapper({
  id,
  children,
  className = '',
  enterAnimation = 'fade-in',
}: AnimatedSectionWrapperProps) {
  const { activeSection, exitingSection } = useSectionContext();
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Handle exit animation
  useEffect(() => {
    if (exitingSection === id) {
      setIsExiting(true);
      const timeout = setTimeout(() => {
        setIsExiting(false);
      }, 500); // Duration of exit animation
      return () => clearTimeout(timeout);
    }
  }, [exitingSection, id]);

  // Handle entrance animation
  useEffect(() => {
    if (activeSection === id) {
      setIsEntering(true);
      const timeout = setTimeout(() => {
        setIsEntering(false);
      }, 800); // Duration of entrance animation
      return () => clearTimeout(timeout);
    }
  }, [activeSection, id]);

  const getAnimationStyle = () => {
    if (isExiting) {
      return {
        animation: 'exit-fade-out 0.5s ease-in forwards',
        pointerEvents: 'none' as const,
      };
    }
    if (isEntering) {
      return {
        animation: `${enterAnimation} 0.8s ease-out forwards`,
      };
    }
    return {};
  };

  return (
    <section id={id} className={className} style={getAnimationStyle()}>
      {children}
    </section>
  );
}
