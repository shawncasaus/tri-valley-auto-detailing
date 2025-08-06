type TextHeroProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TextHero({ children, className = "" }: TextHeroProps) {
  return (
    <h2
      className={`font-bold tracking-tight text-primary leading-[1.1] whitespace-pre-line break-words ${className}`}
    >
      {children}
    </h2>
  );
}
