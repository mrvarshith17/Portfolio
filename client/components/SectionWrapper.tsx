import React, { useEffect, useRef, useState } from 'react';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} ${bgColor}`}
      style={{
        animation: animate ? 'section-liquid-wave-in 0.8s ease-out both' : 'none',
        willChange: 'clip-path, transform, opacity',
      }}
    >
      {children}
    </section>
  );
}
