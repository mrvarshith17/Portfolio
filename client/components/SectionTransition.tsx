import { useEffect, useState } from 'react';
import { useSectionContext } from '@/context/SectionContext';

interface SectionTransitionProps {
  id: string;
  children: React.ReactNode;
  enterAnimation: string;
  exitAnimation: string;
}

export default function SectionTransition({
  id,
  children,
  enterAnimation,
  exitAnimation
}: SectionTransitionProps) {
  const { activeSection, exitingSection } = useSectionContext();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if this section should be exiting
    if (exitingSection === id) {
      setIsExiting(true);
      // Remove exit animation after it completes (0.5s)
      const timer = setTimeout(() => {
        setIsExiting(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exitingSection, id]);

  const animationClass = isExiting ? exitAnimation : enterAnimation;

  return (
    <div className={`animate-${animationClass}`}>
      {children}
    </div>
  );
}
