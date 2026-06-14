import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const overlayStyles = [
  "transition-wave",
  "transition-iris",
  "transition-shutter",
  "transition-diagonal",
  "transition-card",
];

function getOverlayStyle(pathname: string) {
  const routeScore = Array.from(pathname).reduce((total, character) => total + character.charCodeAt(0), 0);
  return overlayStyles[routeScore % overlayStyles.length];
}

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const overlayStyle = getOverlayStyle(location.pathname);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 760);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div className={`page-transition-overlay ${overlayStyle}`} />

      <style>{`
        .page-transition-overlay {
          position: absolute;
          inset: -12%;
          background:
            linear-gradient(115deg, rgba(37, 99, 235, 0.95), rgba(20, 184, 166, 0.9), rgba(124, 58, 237, 0.95), rgba(245, 158, 11, 0.88));
          background-size: 260% 260%;
          animation-duration: 760ms, 2600ms;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), ease-in-out;
          animation-fill-mode: forwards, both;
          box-shadow: inset 0 0 80px rgba(255, 255, 255, 0.22);
        }

        .transition-wave {
          clip-path: polygon(0 100%, 0 0, 8% 2%, 16% 0, 24% 3%, 32% 0, 40% 2%, 48% 0, 56% 3%, 64% 0, 72% 2%, 80% 0, 88% 3%, 100% 0, 100% 100%);
          animation-name: transition-wave-out, transition-aurora-shift;
        }

        .transition-iris {
          clip-path: circle(140% at 50% 50%);
          animation-name: transition-iris-out, transition-aurora-shift;
        }

        .transition-shutter {
          clip-path: inset(0 0 0 0);
          animation-name: transition-shutter-out, transition-aurora-shift;
        }

        .transition-diagonal {
          clip-path: polygon(-10% 0, 100% 0, 110% 100%, 0 100%);
          animation-name: transition-diagonal-out, transition-aurora-shift;
        }

        .transition-card {
          border-radius: 28px;
          clip-path: inset(0 0 0 0 round 28px);
          animation-name: transition-card-out, transition-aurora-shift;
        }

        @keyframes transition-aurora-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes transition-wave-out {
          to { transform: translateY(-115%); opacity: 0; }
        }

        @keyframes transition-iris-out {
          to { clip-path: circle(0% at 50% 50%); opacity: 0; }
        }

        @keyframes transition-shutter-out {
          to { clip-path: inset(50% 0 50% 0); opacity: 0; }
        }

        @keyframes transition-diagonal-out {
          to { transform: translate3d(110%, -16%, 0) rotate(4deg); opacity: 0; }
        }

        @keyframes transition-card-out {
          to {
            transform: scale(0.82) translateY(-24px);
            clip-path: inset(18% 22% 18% 22% round 28px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

