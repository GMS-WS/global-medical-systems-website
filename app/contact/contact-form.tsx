"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only — no backend submission
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-gray-400 transition-all outline-none text-sm";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Partner With Us
        </h2>
        <p className="text-gray-500">
          Fill out the form below to discuss distribution opportunities in Karnataka and South India.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-sm font-semibold text-gray-900">First Name</span>
            <input
              name="firstName"
              type="text"
              placeholder="Enter first name"
              className={inputClass}
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-sm font-semibold text-gray-900">Last Name</span>
            <input
              name="lastName"
              type="text"
              placeholder="Enter last name"
              className={inputClass}
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-sm font-semibold text-gray-900">Business Email</span>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              className={inputClass}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-sm font-semibold text-gray-900">Organization Name</span>
            <input
              name="organization"
              type="text"
              placeholder="Hospital or Clinic Name"
              className={inputClass}
              value={formData.organization}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-900">Message</span>
          <textarea
            name="message"
            placeholder="Tell us about your requirements..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[160px] p-4 placeholder:text-gray-400 resize-y transition-all outline-none text-sm"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <div className="flex items-center justify-between pt-4">
          <p className="text-xs text-gray-400 hidden sm:block">
            By submitting this form, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="min-w-[160px] inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/80 active:scale-95 transition-all shadow-md shadow-primary/20"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
