interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div className="mb-3.5 inline-block rounded-full bg-[#e8eefb] px-3.5 py-1 font-primary text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2048e6]">
        {eyebrow}
      </div>
      <h2 className="mb-2.5 font-secondary text-[clamp(24px,3vw,34px)] font-extrabold leading-[1.2] text-[#111827]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-primary text-[15px] leading-[1.65] text-[#5a6280] ${
            align === "center" ? "mx-auto" : ""
          } max-w-[560px]`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
