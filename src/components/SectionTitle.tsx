type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`mb-6 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
