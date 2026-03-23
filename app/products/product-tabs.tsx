"use client";

import { useState } from "react";
import { LayoutGrid, Package, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/google-sheets";

type Props = {
  products: Product[];
  categories: string[];
};

export function ProductTabs({ products, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const tabs = [
    { id: "all", label: "All Categories" },
    ...categories.map((cat) => ({ id: cat, label: cat })),
  ];

  const visibleProducts = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Products</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Our Product Categories</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">Covering every clinical department with reliable, high-performance equipment.</p>
        </div>

        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 text-sm" />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg font-bold">×</button>
          )}
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 mb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const count = tab.id === "all" ? products.length : products.filter((p) => p.category === tab.id).length;
            const isActive = activeCategory === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveCategory(tab.id)} className={cn("flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 border", isActive ? "bg-primary text-white border-primary shadow-md shadow-primary/20" : "bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary")}>
                {tab.id === "all" && <LayoutGrid className="size-4 shrink-0" />}
                {tab.label}
                <span className={cn("inline-flex items-center justify-center rounded-full w-5 h-5 text-[11px] font-bold", isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500")}>{count}</span>
              </button>
            );
          })}
        </div>

        <p className="text-gray-400 text-sm mb-10 text-center">
          {searchQuery ? `${visibleProducts.length} result${visibleProducts.length !== 1 ? "s" : ""} for "${searchQuery}"` : activeCategory === "all" ? "Browse our complete range of medical equipment across all clinical departments." : `${activeCategory} — ${visibleProducts.length} product${visibleProducts.length !== 1 ? "s" : ""}`}
        </p>

        {visibleProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg font-medium">No products found for "{searchQuery}"</p>
            <button onClick={() => setSearchQuery("")} className="mt-4 text-primary font-bold hover:underline">Clear search</button>
          </div>
        )}

        <div className={cn("grid gap-6", visibleProducts.length <= 2 ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}>
          {visibleProducts.map(({ image, title, description, company }, i) => {
            const cardId = `${title}-${i}`;
            const isExpanded = expandedCard === cardId;
            return (
              <div key={cardId} className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group hover:-translate-y-2 hover:scale-105">
                <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-white">
                  <img src={image} alt={title} className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                  {company && (
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">{company}</span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Package className="size-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{title}</h3>
                  <button onClick={() => setExpandedCard(isExpanded ? null : cardId)} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    {isExpanded ? "Hide Details" : "View Details"}
                    <ChevronDown className={cn("size-4 transition-transform duration-300", isExpanded ? "rotate-180" : "")} />
                  </button>
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
