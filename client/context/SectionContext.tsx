import React, { createContext, useContext, useState, useCallback } from 'react';

interface SectionContextType {
  activeSection: string | null;
  setActiveSection: (section: string) => void;
  animationType: string;
  setAnimationType: (type: string) => void;
  exitingSection: string | null;
  setExitingSection: (section: string | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [animationType, setAnimationType] = useState('converge-to-center');
  const [exitingSection, setExitingSection] = useState<string | null>(null);

  return (
    <SectionContext.Provider value={{ 
      activeSection, 
      setActiveSection, 
      animationType, 
      setAnimationType,
      exitingSection,
      setExitingSection
    }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within SectionProvider');
  }
  return context;
}
