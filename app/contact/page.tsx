import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Global Medical Systems",
  description:
    "Get in touch with Global Medical Systems. Premier medical equipment distributor in Bengaluru, Karnataka.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 py-6 lg:py-10">
          <div className="relative flex min-h-[320px] md:min-h-[400px] flex-col gap-6 rounded-xl items-center justify-center p-8 md:p-12 overflow-hidden shadow-lg">
            <div className="absolute inset-0">
              <Image
                src="/images/contact/hero.jpg"
                alt="Modern medical facility corridor with bright, clean lighting"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-emerald-950/80" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                Improving Lives
                <br />
                <span className="text-emerald-200 font-light italic">
                  in Moments that Matter
                </span>
              </h1>
              <p className="text-white/95 text-base md:text-lg font-normal leading-relaxed max-w-[600px] mx-auto mt-2">
                Premier medical equipment distribution across Karnataka and Southern India. Connect
                with us to elevate healthcare standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: offices + map */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Regional Offices
                </h2>
                <p className="text-gray-500 mt-1">
                  Contact our specific distribution hubs in Southern India.
                </p>
              </div>

              {/* Email card */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all group/card">
                <div className="text-primary mt-1 p-2 bg-emerald-50 rounded-lg group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                  <Mail className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-gray-900">General Inquiries</h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-gray-500 hover:text-primary text-sm break-all font-medium"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all group/card">
                <div className="text-primary mt-1 p-2 bg-emerald-50 rounded-lg group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                  <Phone className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-gray-900">Bengaluru HQ</h3>
                  {COMPANY.phones.map((phone) => (
                    <p key={phone} className="text-gray-500 text-sm font-medium">
                      {phone}
                    </p>
                  ))}
                </div>
              </div>

              {/* Address card */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all group/card">
                <div className="text-primary mt-1 p-2 bg-emerald-50 rounded-lg group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                  <MapPin className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-gray-900">Headquarters</h3>
                  <p className="text-gray-500 text-sm">{COMPANY.address}</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="w-full h-[240px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <iframe
                src={COMPANY.mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Medical Systems location on Google Maps"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Trust banner */}
      <div className="border-t border-gray-100 bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Trusted by leading hospitals across South India
          </p>
        </div>
      </div>
    </div>
  );
}
