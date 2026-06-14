import { useEffect, useState } from 'react';
import { useSectionContext } from '@/context/SectionContext';

export default function SectionTransitionOverlay() {
  const { activeSection } = useSectionContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevSection, setPrevSection] = useState<string | null>(null);

  useEffect(() => {
    if (activeSection !== prevSection && prevSection !== null) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
    setPrevSection(activeSection);
  }, [activeSection, prevSection]);

  if (!isTransitioning) return null;

  return (
    <>
      {/* Overlay animation when transitioning */}
      <div
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          animation: 'transition-overlay 0.6s ease-in-out forwards',
        }}
      >
        {/* Fade to black overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-blue-600/80"
          style={{
            animation: 'fade-overlay 0.6s ease-in-out',
          }}
        />

        {/* Sliding bars transition effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{
              animation: 'slide-transition 0.6s ease-out',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>
    </>
  );
}
