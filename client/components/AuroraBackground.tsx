import { useEffect, useRef } from "react";

interface AuroraBackgroundProps {
  className?: string;
}

export default function AuroraBackground({ className = "" }: AuroraBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!wrapperRef.current) return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      wrapperRef.current.style.setProperty("--parallax-x", `${x * 32}px`);
      wrapperRef.current.style.setProperty("--parallax-y", `${y * 28}px`);
      wrapperRef.current.style.setProperty("--parallax-x-soft", `${x * -20}px`);
      wrapperRef.current.style.setProperty("--parallax-y-soft", `${y * -18}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={wrapperRef} className={`aurora-background ${className}`} aria-hidden="true">
      <div className="aurora-layer aurora-layer-primary" />
      <div className="aurora-layer aurora-layer-secondary" />
      <div className="aurora-layer aurora-layer-grid" />
    </div>
  );
}
