type ParagraphBlockProps = {
  children: React.ReactNode;
};

export default function ParagraphBlock({ children }: ParagraphBlockProps) {
  return (
    <div className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
      {children}
    </div>
  );
}
