interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** หัวข้อ section มาตรฐาน — eyebrow + title + คำอธิบาย */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      )}
    </div>
  );
}
