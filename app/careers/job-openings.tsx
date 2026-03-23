"use client";

import { useState } from "react";
import { MapPin, Briefcase, Wrench, LayoutList, ArrowRight } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Sales Executive / Field Sales Specialist",
    department: "Sales",
    location: "Karnataka, India",
    type: "Full-time",
    description:
      "Drive sales of our medical equipment and services while building strong relationships with healthcare providers.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Service Technician / Service Engineer",
    department: "Technical Support",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description:
      "Provide installation, maintenance, and support for our medical gas pipeline systems and equipment, ensuring optimal functionality and safety.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Administrative Support Specialist / Business Support Coordinator",
    department: "Administration",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description:
      "Assist in managing administrative tasks, data entry, and customer inquiries to ensure smooth business operations.",
    icon: LayoutList,
  },
];

const FILTERS = ["All Departments", "Sales", "Technical Support", "Administration"];

export function JobOpenings() {
  const [activeFilter, setActiveFilter] = useState("All Departments");

  const filtered =
    activeFilter === "All Departments"
      ? JOBS
      : JOBS.filter((j) => j.department === activeFilter);

  return (
    <section className="w-full bg-[#f0f4f1] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Current Openings
            </h2>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-800 hover:border-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-transparent hover:border-primary/50 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3 max-w-2xl">{job.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <job.icon className="size-4" /> {job.department}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSD7za9lSEKyseeysIwQXNhZ5UuqkNrDJGr7rLmpHuO1wIgA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:translate-x-1 transition-transform">
  Apply Now <ArrowRight className="size-4 text-primary" />
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
