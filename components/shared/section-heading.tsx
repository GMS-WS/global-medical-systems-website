import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {label && (
        <span className="text-primary text-sm font-bold uppercase tracking-widest">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-gray-900 leading-tight",
          label ? "mt-3" : ""
        )}
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
