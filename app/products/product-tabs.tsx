"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FlaskConical,
  ShieldCheck,
  Wind,
  Syringe,
  Eye,
  ActivitySquare,
  Microscope,
  Stethoscope,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────────────── */

type TabId = "all" | "diagnostic" | "surgical" | "critical-care";

/* ─── Tabs ──────────────────────────────────────────────────── */

const TABS: { id: TabId; label: string; description: string }[] = [
  {
    id: "all",
    label: "All Categories",
    description: "Browse our complete range of medical equipment across all clinical departments.",
  },
  {
    id: "diagnostic",
    label: "Diagnostic Imaging",
    description:
      "Advanced imaging and physiological monitoring systems for accurate clinical diagnosis.",
  },
  {
    id: "surgical",
    label: "Surgical Theatres",
    description:
      "Comprehensive OT equipment, ophthalmic surgery systems, and sterilization solutions.",
  },
  {
    id: "critical-care",
    label: "Critical Care & Life Support",
    description:
      "ICU systems, ventilators, medical gas infrastructure, and drug delivery equipment.",
  },
];

/* ─── Category Data ─────────────────────────────────────────── */

type Category = {
  tabId: TabId;
  icon: React.ElementType;
  image: string;
  title: string;
  description: string;
  badge?: string;
};

const CATEGORIES: Category[] = [
  /* ── Diagnostic Imaging ──────────────────────────────────── */
  {
    tabId: "diagnostic",
    icon: FlaskConical,
    image: "/images/careers/culture-2.jpg",
    title: "Diagnostic Imaging",
    description:
      "Digital X-ray, ultrasound, C-arm fluoroscopy, and portable imaging units from GE Healthcare for precise clinical diagnosis.",
    badge: "GE Healthcare",
  },
  {
    tabId: "diagnostic",
    icon: ActivitySquare,
    image: "/images/contact/hero.jpg",
    title: "Physiological Monitoring",
    description:
      "12-lead ECG machines, Holter monitors, spirometers, and ambulatory BP systems for cardiac and respiratory assessment.",
    badge: "GE Healthcare",
  },
  {
    tabId: "diagnostic",
    icon: Microscope,
    image: "/images/about/story.jpg",
    title: "Ophthalmic Diagnostics",
    description:
      "ZEISS slit lamps, auto refractometers, fundus cameras, and visual field analysers for comprehensive eye care diagnostics.",
    badge: "ZEISS",
  },

  /* ── Surgical Theatres ───────────────────────────────────── */
  {
    tabId: "surgical",
    icon: Syringe,
    image: "/images/careers/hero.jpg",
    title: "OT & Surgical Equipment",
    description:
      "Electrosurgical units, motorised operating tables, surgical lights, and laparoscopic towers for fully equipped operation theatres.",
    badge: "B.BRAUN",
  },
  {
    tabId: "surgical",
    icon: Eye,
    image: "/images/about/story.jpg",
    title: "Ophthalmic Surgery",
    description:
      "ZEISS surgical microscopes, phacoemulsification systems, vitreoretinal systems, and Nd:YAG laser units for ophthalmic procedures.",
    badge: "ZEISS",
  },
  {
    tabId: "surgical",
    icon: Stethoscope,
    image: "/images/contact/hero.jpg",
    title: "Sterilization & Infection Control",
    description:
      "Steam autoclaves, plasma sterilizers, ultrasonic cleaners, and washer disinfectors to maintain sterility across surgical departments.",
  },

  /* ── Critical Care & Life Support ───────────────────────── */
  {
    tabId: "critical-care",
    icon: ShieldCheck,
    image: "/images/careers/hero.jpg",
    title: "ICU & Patient Monitoring",
    description:
      "ICU ventilators, multi-parameter monitors, smart ICU beds, defibrillators, and AEDs from GE Healthcare and Fisher & Paykel.",
    badge: "GE Healthcare · Fisher & Paykel",
  },
  {
    tabId: "critical-care",
    icon: Wind,
    image: "/images/careers/culture-1.jpg",
    title: "Medical Gas Systems",
    description:
      "Complete medical gas pipeline infrastructure including manifolds, pressure regulators, flow meters, and alarm panels from B.BRAUN.",
    badge: "B.BRAUN",
  },
  {
    tabId: "critical-care",
    icon: ShieldCheck,
    image: "/images/careers/culture-2.jpg",
    title: "Infusion & Drug Delivery",
    description:
      "Syringe pumps, volumetric infusion pumps, enteral feeding systems, and humidification units for precise drug and fluid management.",
    badge: "B.BRAUN · Fisher & Paykel",
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const activeTabData = TABS.find((t) => t.id === activeTab)!;
  const visibleCategories =
    activeTab === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.tabId === activeTab);

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
          {TABS.map((tab) => {
            const count =
              tab.id === "all"
                ? CATEGORIES.length
                : CATEGORIES.filter((c) => c.tabId === tab.id).length;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
        <p className="text-gray-400 text-sm mb-10 text-center">{activeTabData.description}</p>

        {/* Product cards grid */}
        <div
          className={cn(
            "grid gap-6",
            visibleCategories.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {visibleCategories.map(({ icon: Icon, image, title, description, badge }) => (
            <div
              key={title}
              className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle gradient at bottom for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Partner badge overlaid on image */}
                {badge && (
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white bg-black/40 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
                    {badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Icon className="size-4" />
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
