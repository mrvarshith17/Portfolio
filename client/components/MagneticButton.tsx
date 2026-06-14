import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function MagneticButton({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  className = "",
  icon,
  onClick,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > 0 && distance < 150) {
      const force = (150 - distance) / 150;
      const moveX = (distanceX / distance) * force * 20;
      const moveY = (distanceY / distance) * force * 20;

      setPosition({ x: moveX, y: moveY });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: "transform 0.2s ease-out",
    },
    className: `inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${className}`,
    "aria-label": ariaLabel,
  };

  if (!href) {
    return (
      <button
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        {...sharedProps}
      >
        {icon}
        {children}
      </button>
    );
  }

  return (
    <a
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={sharedProps.style}
      className={sharedProps.className}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </a>
  );
}
