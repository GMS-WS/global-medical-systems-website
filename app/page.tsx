import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Cpu, FlaskConical, Wind, Syringe, Eye, Package, ShieldCheck, Globe, Award, HeartPulse } from "lucide-react";
import { CtaSection } from "@/components/shared/cta-section";
import { ScrollingLogos } from "@/components/shared/scrolling-logos";
import { COMPANY } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export const metadata: Metadata = {
  title: "Global Medical Systems | Medical Equipment Distributor",
  description: "Premier medical equipment distributor across Karnataka and Southern India. Trusted by 500+ hospitals across 30+ districts.",
};

const HOSPITAL_BADGES = ["Multi-Specialty Hospitals","500+ Accredited Facilities","Super Specialty Centers","Diagnostic Imaging Centers","ICU & Critical Care Units","Government Healthcare Institutions"];

const PARTNERS = [
  { name: "GE Healthcare", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/GE%20HEALTHCARE%20LOGO%20VERCEL.png" },
  { name: "B.BRAUN", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/B%20BRAUN%20LOGO%20VERCEL.png" },
  { name: "ZEISS", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/ZEISS%20LOGO%20VERCEL.png" },
  { name: "Fisher & Paykel", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/F%20AND%20P%20LOGO%20VERCEL.png" },
];

const TRUST_FEATURES = [
  { icon: MapPin, title: "Regional Expertise", description: "Deep roots in Karnataka with a network spanning 30+ districts. We understand local healthcare needs and deliver tailored solutions." },
  { icon: Cpu, title: "Advanced Technology", description: "Partnering with world-class manufacturers to bring cutting-edge medical technology to hospitals and diagnostic centers across South India." },
  { icon: Award, title: "ISO Certified Quality", description: "We are ISO 13485:2016 certified company." },
];

const EQUIPMENT_CATEGORIES = [
  { icon: Wind, title: "Anaesthesia and Respiratory Care", description: "Advanced anaesthesia workstations and respiratory care solutions." },
  { icon: ShieldCheck, title: "Medical Gas Pipeline Systems", description: "Complete medical gas pipeline design, supply and installation." },
  { icon: Syringe, title: "B.Braun", description: "Infusion therapy, pain management, and surgical instruments." },
  { icon: HeartPulse, title: "Maternity and Infant Care", description: "Incubators, warmers, and neonatal care equipment." },
  { icon: FlaskConical, title: "Diagnostic Cardiology", description: "ECG systems, holter monitors, and cardiac diagnostic tools." },
  { icon: Package, title: "Ventilators", description: "ICU and transport ventilators for critical care environments." },
  { icon: Cpu, title: "Monitors", description: "Patient monitoring systems for ICU, OT, and general wards." },
  { icon: Eye, title: "Fisher & Paykel", description: "Respiratory care and ICU humidification systems." },
  { icon: MapPin, title: "Digital Imaging", description: "X-ray, ultrasound, and advanced digital imaging solutions." },
  { icon: ShieldCheck, title: "Clinical Accessories", description: "Consumables, disposables, and clinical support products." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        <div className="relative min-h-[600px] md:min-h-[680px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/80 to-gray-900" />
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl" />
          </div>
          <div className="relative z-10 max-w-[800px] flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mx-auto">
              <Globe className="size-4 text-primary" />
              <span className="text-primary text-xs font-bold tracking-wider uppercase">Driving Healthcare Forward</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
              Improving Lives{" "}<span className="text-primary">in Moments that Matter</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">{COMPANY.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg h-13 px-8 py-3.5 bg-primary text-white text-base font-bold hover:bg-primary/80 transition-all shadow-lg shadow-emerald-900/50">Contact Us</Link>
              <Link href="/products" className="inline-flex items-center justify-center rounded-lg h-13 px-8 py-3.5 bg-white/10 text-white border border-white/20 text-base font-medium hover:bg-white/20 transition-all">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Serving across healthcare sectors</p>
          <div className="flex flex-wrap justify-center gap-3">
            {HOSPITAL_BADGES.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-sm font-medium border border-emerald-100">
                <Check className="size-3.5 text-primary" />{badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Exclusive partnerships with industry leaders</p>
          <ScrollingLogos partners={PARTNERS} />
        </div>
      </section>

      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Built on Trust, Powered by Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-xl bg-gray-50 border border-transparent hover:border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Two Decades of Healthcare Excellence in Southern India</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Since 2004, Global Medical Systems has been the trusted partner for hospitals and healthcare facilities across Karnataka. We deliver advanced medical equipment, ICU systems, diagnostic technologies, and medical gas pipeline solutions — all backed by expert installation and dependable service.</p>
              <div className="flex items-center gap-6 pt-4">
                <div>
                  <p className="text-5xl font-black text-primary"><AnimatedCounter target={20} suffix="+" /></p>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Years of Experience</p>
                </div>
                <div className="w-px h-16 bg-gray-200" />
                <div>
                  <p className="text-5xl font-black text-primary"><AnimatedCounter target={500} suffix="+" /></p>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Hospitals Served</p>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/80 transition-all mt-2">Learn More About Us</Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <Image src="/images/about/story.jpg" alt="Modern hospital corridor with advanced medical equipment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Products</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Complete Medical Equipment Solutions</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">We supply a comprehensive range of medical equipment categories to serve every department in your healthcare facility.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_CATEGORIES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group bg-gray-50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/80 transition-all">View All Products</Link>
          </div>
        </div>
      </section>

      <CtaSection variant="emerald" heading="Ready to modernize your medical infrastructure?" description="Join 500+ hospitals across Southern India that trust Global Medical Systems for their critical equipment needs." buttonLabel="Contact Us Today" />
    </div>
  );
}
