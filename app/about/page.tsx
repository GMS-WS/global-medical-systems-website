import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lightbulb, Handshake } from "lucide-react";
import { StatsBar } from "@/components/shared/stats-bar";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaSection } from "@/components/shared/cta-section";
import { ABOUT_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Global Medical Systems",
  description: "Rooted in Karnataka, growing globally. Two decades of advancing healthcare infrastructure across Southern India.",
};

const PHILOSOPHY = [
  { icon: ShieldCheck, title: "Technical Reliability", description: "We supply high-performance medical equipment and ensure every installation meets strict safety and compliance standards, delivering dependable performance in critical care environments." },
  { icon: Lightbulb, title: "End-to-End Support", description: "From product selection and installation to preventive maintenance and servicing, we provide comprehensive support to ensure uninterrupted clinical operations." },
  { icon: Handshake, title: "Long-Term Healthcare Partnerships", description: "We work closely with hospitals, diagnostic centres, and healthcare institutions to deliver solutions that strengthen infrastructure and improve patient care outcomes." },
];

const TIMELINE = [
  { year: "2004", title: "Foundation", description: "Founded in Bangalore, Karnataka with a focus on surgical instrumentation distribution for local clinics.", active: false },
  { year: "Today", title: "Regional Leader", description: "Serving over 200 hospitals across the region with a focus on sustainable, high-efficiency medical equipment.", active: true },
];

const TRUSTED_BY = [
  "Multi-Specialty Hospitals",
  "Diagnostic & Imaging Centers",
  "Medical Colleges",
  "Government Healthcare Institutions",
];

const LEADERS = [
  { name: "Vijendra Alathur", image: "/images/about/vijendra.jpg", alt: "Vijendra Alathur, professional corporate headshot" },
  { name: "Dattanand Lakshminarasimha", image: "/images/about/dattanand.jpg", alt: "Dattanand Lakshminarasimha, professional corporate headshot" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative flex min-h-[560px] flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/about/hero.jpg" alt="Modern green medical technology background" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-950/85" />
          </div>
          <div className="relative z-10 max-w-[800px] flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">Improving Lives in Moments that matter</h1>
            <p className="text-emerald-50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">Premier medical equipment channel partner across Karnataka and Southern India, connecting advanced healthcare technology with local expertise.</p>
            <div className="pt-4 flex justify-center">
              <a href="#leadership" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/80 transition-all shadow-lg shadow-emerald-900/50">Meet the Leadership</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={ABOUT_STATS} columns={4} />

      {/* Our Story */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight">Rooted in Karnataka, Growing Globally</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>Founded with a commitment to advancing healthcare in Karnataka, Global Medical Systems began as a dedicated medical equipment supplier serving hospitals and critical care facilities. Over the past two decades, we have grown into a trusted partner for healthcare institutions across South India.</p>
                <p>Our focus has always been clear — delivering advanced medical equipment, ICU systems, diagnostic technologies, and medical gas pipeline solutions backed by expert installation and dependable service support.</p>
                <p>Today, we continue to strengthen healthcare infrastructure by ensuring hospitals have access to reliable, high-performance medical technology when it matters most.</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <Image src="/images/about/story.jpg" alt="Modern clean hospital corridor with high tech equipment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading label="Our Philosophy" heading="Guided by Unwavering Principles" description="Our core values define how we operate within the Karnataka healthcare ecosystem." className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group p-8 rounded-xl bg-gray-50 border border-transparent hover:border-primary/20 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">Timeline</span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 mb-4">Milestones of Excellence</h2>
                <p className="text-gray-600">From a small office in Bangalore to a regional distribution powerhouse.</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0 space-y-12 pl-8 md:pl-12 py-2">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="relative group">
                    <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 h-5 w-5 rounded-full border-4 border-gray-50 transition-colors ${item.active ? "bg-primary shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" : "bg-gray-300 group-hover:bg-primary"}`} />
                    <span className={`inline-block py-1 px-3 rounded-full border text-xs font-bold mb-2 ${item.active ? "bg-primary text-white border-primary" : "bg-white border-gray-200 text-primary"}`}>{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Leadership</span>
            <h2 className="mt-3 text-gray-900 text-3xl font-bold">Meet the Experts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="group relative overflow-hidden rounded-xl bg-gray-100">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src={leader.image} alt={leader.alt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent pt-12">
                  <h3 className="text-white font-bold text-lg">{leader.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="w-full py-16 border-t border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by medical leaders</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUSTED_BY.map((item) => (
              <div key={item} className="flex items-center justify-center p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <span className="text-gray-800 font-bold text-base text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection heading="Ready to upgrade your facility?" description="Join the network of top-tier hospitals and clinics in Southern India that trust Global Medical Systems." />
    </div>
  );
}
