import { ReactNode, useEffect, useRef } from 'react';
import { useSectionContext } from '@/context/SectionContext';

type AnimationType = 
  | "slide-in-left-lg" 
  | "slide-in-right-lg" 
  | "converge-to-center" 
  | "center-reveal" 
  | "edge-inward" 
  | "radial-inward";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  defaultAnimation?: AnimationType;
}

export default function AnimatedSection({
  id,
  children,
  className = "",
  defaultAnimation = "converge-to-center",
}: AnimatedSectionProps) {
  const { activeSection, animationType } = useSectionContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const isActive = activeSection === id;
  const currentAnimation = isActive ? (animationType as AnimationType) : defaultAnimation;
  
  useEffect(() => {
    if (isActive && sectionRef.current) {
      // Add animation class
      sectionRef.current.style.animation = 'none';
      // Trigger reflow to restart animation
      void sectionRef.current.offsetHeight;
      sectionRef.current.style.animation = '';
    }
  }, [isActive, animationType]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`animate-${currentAnimation} ${className}`}
    >
      {children}
    </div>
  );
}
