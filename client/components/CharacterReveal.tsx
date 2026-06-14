type CharacterRevealTag = "h1" | "h2" | "h3" | "p" | "span";

interface CharacterRevealProps {
  text: string;
  as?: CharacterRevealTag;
  className?: string;
  delayStep?: number;
}

export default function CharacterReveal({
  text,
  as = "span",
  className = "",
  delayStep = 28,
}: CharacterRevealProps) {
  const Tag = as;

  return (
    <Tag className={`char-reveal ${className}`} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span
          key={`${character}-${index}`}
          aria-hidden="true"
          style={{ animationDelay: `${index * delayStep}ms` }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </Tag>
  );
}
