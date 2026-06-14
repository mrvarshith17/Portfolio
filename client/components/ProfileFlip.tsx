import { useState } from "react";

export default function ProfileFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective cursor-pointer h-full" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className="relative w-full h-full transition-transform duration-500 preserve-3d"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front - Original Picture */}
        <div
          className="w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F04effe853c2c4651a9b2e11e904a8f76%2F30bb6970a2644d0482d0cd336dfaff6a?format=webp&width=800&height=1200"
            alt="Pundru Varshith - Original"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Back - New Picture */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src="/profile-new.jpg"
            alt="Pundru Varshith - Professional"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Click Hint Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-2xl z-10 pointer-events-none"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span className="text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
            Click to flip
          </span>
        </div>
      </div>
    </div>
  );
}
