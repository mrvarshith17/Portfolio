import React, { useEffect, useState } from 'react';
import { useSectionContext } from '@/context/SectionContext';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export default function SectionWrapper({ 
  id, 
  children, 
  className = '', 
  bgColor = 'bg-white' 
}: SectionWrapperProps) {
  const { activeSection, exitingSection, animationType, setExitingSection } = useSectionContext();
  const [isVisible, setIsVisible] = useState(true); // All sections visible by default for scrolling
  const isActive = activeSection === id;
  const isExiting = exitingSection === id;

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    }
  }, [isActive]);

  // Clear exiting section after animation completes (keep section visible)
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setExitingSection(null);
      }, 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isExiting, setExitingSection]);

  const getEnterAnimation = () => {
    const animationMap: Record<string, string> = {
      'slide-in-left-lg': 'section-slide-in-left',
      'slide-in-right-lg': 'section-slide-in-right',
      'converge-to-center': 'section-converge-center',
      'center-reveal': 'section-center-reveal',
      'edge-inward': 'section-edge-inward',
      'radial-inward': 'section-radial-inward',
      'clip-reveal-left': 'section-clip-reveal-left',
      'clip-reveal-right': 'section-clip-reveal-right',
      'clip-reveal-top': 'section-clip-reveal-top',
      'clip-reveal-bottom': 'section-clip-reveal-bottom',
    };
    return animationMap[animationType] || 'section-fade-in';
  };

  const getExitAnimation = () => {
    const animationMap: Record<string, string> = {
      'slide-in-left-lg': 'section-slide-out-right',
      'slide-in-right-lg': 'section-slide-out-left',
      'converge-to-center': 'section-converge-out-center',
      'center-reveal': 'section-center-exit',
      'edge-inward': 'section-edge-outward',
      'radial-inward': 'section-radial-outward',
      'clip-reveal-left': 'section-clip-reveal-out-right',
      'clip-reveal-right': 'section-clip-reveal-out-left',
      'clip-reveal-top': 'section-clip-reveal-out-bottom',
      'clip-reveal-bottom': 'section-clip-reveal-out-top',
    };
    return animationMap[animationType] || 'section-fade-out';
  };

  if (!isVisible && !isActive && !isExiting) {
    return null;
  }

  return (
    <section
      id={id}
      className={`${className} ${bgColor} ${
        isActive ? getEnterAnimation() : isExiting ? getExitAnimation() : ''
      }`}
      style={{
        opacity: 1, // Always visible for scrolling
        pointerEvents: 'auto', // Always interactive
      }}
    >
      {children}
    </section>
  );
}
