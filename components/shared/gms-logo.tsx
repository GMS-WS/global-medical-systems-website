interface GmsLogoProps {
  size?: number;
  /** "dark" uses dark fill for the inner circle (for light backgrounds); "light" uses light fill */
  variant?: "dark" | "light";
  className?: string;
}

export function GmsLogo({ size = 40, variant = "dark", className }: GmsLogoProps) {
  const innerFill = variant === "dark" ? "#111827" : "#0f172a";
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-primary rounded-full opacity-20" />
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M50 0 L60 25 L85 15 L75 40 L100 50 L75 60 L85 85 L60 75 L50 100 L40 75 L15 85 L25 60 L0 50 L25 40 L15 15 L40 25 Z"
          fill="currentColor"
        />
        <circle cx="50" cy="50" r="28" fill={innerFill} />
      </svg>
      <span
        className="absolute text-primary font-bold tracking-tighter"
        style={{ fontSize: size * 0.18 }}
      >
        GMS
      </span>
    </div>
  );
}
