import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: readonly Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsBar({ stats, columns = 4, className }: StatsBarProps) {
  const colClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4";

  return (
    <div className={cn("w-full bg-white border-b border-gray-100", className)}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className={cn("grid gap-8", colClass)}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 items-center md:items-start">
              <p className="text-primary text-4xl font-black tracking-tight">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
