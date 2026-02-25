import Link from "next/link";

interface CtaSectionProps {
  heading: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  variant?: "default" | "emerald";
}

export function CtaSection({
  heading,
  description,
  buttonLabel = "Contact Us",
  buttonHref = "/contact",
  variant = "default",
}: CtaSectionProps) {
  if (variant === "emerald") {
    return (
      <section className="w-full py-24 bg-gradient-to-br from-emerald-500 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{heading}</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">{description}</p>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-lg h-14 px-10 bg-white text-emerald-700 text-lg font-bold hover:bg-emerald-50 transition-all shadow-xl"
          >
            {buttonLabel}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-primary/5 -skew-x-12 translate-x-32" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{heading}</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">{description}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center rounded-lg h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary/80 transition-all shadow-xl shadow-emerald-500/30"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
