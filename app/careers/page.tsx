import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp, Users, HeartPulse, Handshake, Quote } from "lucide-react";
import { StatsBar } from "@/components/shared/stats-bar";
import { CAREERS_STATS } from "@/lib/constants";
import { JobOpenings } from "./job-openings";

export const metadata: Metadata = {
  title: "Careers | Global Medical Systems",
  description:
    "Join our team dedicated to precision, integrity, and innovation in medical distribution across Karnataka and beyond.",
};

const CULTURE_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    description: "Regular training on the latest medical innovations.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "A respectful environment valuing every voice.",
  },
  {
    icon: HeartPulse,
    title: "Health First",
    description: "Comprehensive health benefits for you and family.",
  },
  {
    icon: Handshake,
    title: "Impactful Work",
    description: "Directly contribute to better patient outcomes.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full p-4 md:p-6 lg:p-8">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gray-900 h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/careers/hero.jpg"
              alt="Medical professionals discussing work in a modern hospital hallway"
              fill
              className="object-cover opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center max-w-4xl">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary text-xs font-bold tracking-wider uppercase">
              Join Our Team
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
              Shape the Future of Healthcare{" "}
              <span className="text-primary">in India</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Join a team dedicated to precision, integrity, and innovation in medical distribution
              across Karnataka and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={CAREERS_STATS} columns={3} />

      {/* Culture */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              More than a distributor.{" "}
              <span className="text-gray-400">We are partners in care.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Global Medical Systems, we don&apos;t just move boxes. We ensure that critical
              medical technologies reach the hands of doctors who save lives. Our culture is built
              on trust, continuous learning, and a deep sense of responsibility towards the patient
              community in India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {CULTURE_BENEFITS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg translate-y-8">
                <Image
                  src="/images/careers/culture-1.jpg"
                  alt="Modern clean hospital hallway perspective"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg">
                <Image
                  src="/images/careers/culture-2.jpg"
                  alt="Medical laboratory with high tech equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings (client component) */}
      <JobOpenings />

      {/* Testimonial */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <Quote className="size-16 text-primary/30 mb-6" />
          <p className="text-2xl md:text-4xl font-medium text-gray-900 italic leading-relaxed">
            &ldquo;Working at Global Medical Systems has given me the unique opportunity to bridge
            the gap between world-class technology and local patient needs. Every day feels
            meaningful.&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 relative">
              <Image
                src="/images/careers/anjali.jpg"
                alt="Anjali P., Senior Biomedical Engineer"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <p className="font-bold text-lg text-gray-900">Anjali P.</p>
            <p className="text-sm text-gray-500">Senior Biomedical Engineer</p>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="w-full px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Don&apos;t see the right role?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              We are always looking for talented individuals who share our passion for healthcare
              excellence. Send us your resume, and we&apos;ll keep you in mind for future
              opportunities.
            </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSD7za9lSEKyseeysIwQXNhZ5UuqkNrDJGr7rLmpHuO1wIgA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-white text-base font-bold transition-transform hover:scale-105 shadow-lg shadow-primary/20 mt-4">
  Submit General Application
</a>
          </div>
        </div>
      </section>
    </div>
  );
}
