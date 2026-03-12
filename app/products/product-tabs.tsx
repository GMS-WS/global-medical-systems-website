"use client";

import { useState } from "react";
import { LayoutGrid, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/google-sheets";

/* ─── Component ─────────────────────────────────────────────── */

type Props = {
  products: Product[];
  categories: string[];
};

export function ProductTabs({ products, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Categories" },
    ...categories.map((cat) => ({ id: cat, label: cat })),
  ];

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Our Product Categories
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
            Covering every clinical department with reliable, high-performance equipment.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const count =
              tab.id === "all"
                ? products.length
                : products.filter((p) => p.category === tab.id).length;
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 border",
                  isActive
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary"
                )}
              >
                {tab.id === "all" && <LayoutGrid className="size-4 shrink-0" />}
                {tab.label}
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-full w-5 h-5 text-[11px] font-bold",
                    isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab description */}
        <p className="text-gray-400 text-sm mb-10 text-center">
          {activeCategory === "all"
            ? "Browse our complete range of medical equipment across all clinical departments."
            : `${activeCategory} — ${visibleProducts.length} product${visibleProducts.length !== 1 ? "s" : ""}`}
        </p>

        {/* Product cards grid */}
        <div
          className={cn(
            "grid gap-6",
            visibleProducts.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {visibleProducts.map(({ image, title, description, company }, i) => (
            <div
              key={`${title}-${i}`}
              className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center bg-white">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain p-2"
  />
                {company && (
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
                    {company}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Package className="size-4" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
