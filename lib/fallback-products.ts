import type { Product } from "./google-sheets";

export const FALLBACK_CATEGORIES: string[] = [
  "Diagnostic Imaging",
  "Surgical Theatres",
  "Critical Care & Life Support",
];

export const FALLBACK_PRODUCTS: Product[] = [
  {
    category: "Diagnostic Imaging",
    title: "Diagnostic Imaging",
    description:
      "Digital X-ray, ultrasound, C-arm fluoroscopy, and portable imaging units from GE Healthcare for precise clinical diagnosis.",
    company: "GE Healthcare",
    image: "/images/careers/culture-2.jpg",
  },
  {
    category: "Diagnostic Imaging",
    title: "Physiological Monitoring",
    description:
      "12-lead ECG machines, Holter monitors, spirometers, and ambulatory BP systems for cardiac and respiratory assessment.",
    company: "GE Healthcare",
    image: "/images/contact/hero.jpg",
  },
  {
    category: "Diagnostic Imaging",
    title: "Ophthalmic Diagnostics",
    description:
      "ZEISS slit lamps, auto refractometers, fundus cameras, and visual field analysers for comprehensive eye care diagnostics.",
    company: "ZEISS",
    image: "/images/about/story.jpg",
  },
  {
    category: "Surgical Theatres",
    title: "OT & Surgical Equipment",
    description:
      "Electrosurgical units, motorised operating tables, surgical lights, and laparoscopic towers for fully equipped operation theatres.",
    company: "B.BRAUN",
    image: "/images/careers/hero.jpg",
  },
  {
    category: "Surgical Theatres",
    title: "Ophthalmic Surgery",
    description:
      "ZEISS surgical microscopes, phacoemulsification systems, vitreoretinal systems, and Nd:YAG laser units for ophthalmic procedures.",
    company: "ZEISS",
    image: "/images/about/story.jpg",
  },
  {
    category: "Surgical Theatres",
    title: "Sterilization & Infection Control",
    description:
      "Steam autoclaves, plasma sterilizers, ultrasonic cleaners, and washer disinfectors to maintain sterility across surgical departments.",
    company: "",
    image: "/images/contact/hero.jpg",
  },
  {
    category: "Critical Care & Life Support",
    title: "ICU & Patient Monitoring",
    description:
      "ICU ventilators, multi-parameter monitors, smart ICU beds, defibrillators, and AEDs from GE Healthcare and Fisher & Paykel.",
    company: "GE Healthcare · Fisher & Paykel",
    image: "/images/careers/hero.jpg",
  },
  {
    category: "Critical Care & Life Support",
    title: "Medical Gas Systems",
    description:
      "Complete medical gas pipeline infrastructure including manifolds, pressure regulators, flow meters, and alarm panels from B.BRAUN.",
    company: "B.BRAUN",
    image: "/images/careers/culture-1.jpg",
  },
  {
    category: "Critical Care & Life Support",
    title: "Infusion & Drug Delivery",
    description:
      "Syringe pumps, volumetric infusion pumps, enteral feeding systems, and humidification units for precise drug and fluid management.",
    company: "B.BRAUN · Fisher & Paykel",
    image: "/images/careers/culture-2.jpg",
  },
];
