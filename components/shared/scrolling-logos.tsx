"use client";
export function ScrollingLogos({ partners }: { partners: { name: string; logo: string }[] }) {
  const doubled = [...partners, ...partners];
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll gap-12 w-max">
        {doubled.map((partner, i) => (
          <div key={i} className="flex flex-col items-center justify-center min-w-[160px] px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <img src={partner.logo} alt={partner.name} className="h-20 w-auto object-contain mb-2" />
            <p className="text-xs font-bold text-gray-700 text-center">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
