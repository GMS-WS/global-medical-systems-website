import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { getSheetProducts } from "@/lib/google-sheets";
import { FALLBACK_PRODUCTS, FALLBACK_CATEGORIES } from "@/lib/fallback-products";
import { ProductTabs } from "./product-tabs";
export const revalidate = 60;
export const metadata: Metadata = {
  title: "Our Products | Global Medical Systems",
  description:
    "Exclusive partnerships with GE Healthcare, B.BRAUN, ZEISS, Fisher & Paykel, and more. Supplying advanced medical equipment across Karnataka.",
};

const PARTNERS = [
  { name: "GE Healthcare", description: "Global leader in medical imaging and diagnostics.", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/GE%20HEALTHCARE%20LOGO%20VERCEL.png" },
  { name: "B.BRAUN", description: "Infusion therapy, pain management, and surgical instruments.", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/B%20BRAUN%20LOGO%20VERCEL.png" },
  { name: "ZEISS", description: "Precision optics and surgical microscopes.", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/ZEISS%20LOGO%20VERCEL.png" },
  { name: "Fisher & Paykel", description: "Respiratory care and ICU humidification systems.", logo: "https://6ph3geydhea1n7n6.public.blob.vercel-storage.com/F%20AND%20P%20LOGO%20VERCEL.png" },
];

export default async function ProductsPage() {
  const { products: sheetProducts, categories: sheetCategories } = await getSheetProducts();
  const products = sheetProducts.length > 0 ? sheetProducts : FALLBACK_PRODUCTS;
  const categories = sheetCategories.length > 0 ? sheetCategories : FALLBACK_CATEGORIES;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-4">
            {COMPANY.name}
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm mb-6">
            {COMPANY.tagline}
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Supplying world-class medical technology to hospitals, diagnostic centers, and
            healthcare institutions across Karnataka and Southern India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg h-13 px-8 py-3.5 bg-white text-emerald-700 text-base font-bold hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20"
            >
              Request a Quote
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg h-13 px-8 py-3.5 bg-white/10 text-white border border-white/30 text-base font-medium hover:bg-white/20 transition-all"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            What We Supply
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Medical Equipment for Karnataka Healthcare
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Global Medical Systems distributes a comprehensive range of medical devices and
            equipment to multi-specialty hospitals, super-specialty centers, diagnostic labs, and
            government healthcare institutions across Karnataka and South India. We combine
            international quality standards with deep local expertise and responsive after-sales
            support.
          </p>
        </div>
      </section>

      {/* Product Categories — tabbed navigation */}
      <ProductTabs products={products} categories={categories} />

      {/* Exclusive Partnerships */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Our Partners
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Exclusive Partnerships with Industry Leaders
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              We are the authorised distributor for globally recognised medical brands, bringing
              their technology directly to Karnataka&apos;s healthcare ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="p-8 rounded-xl border border-gray-100 bg-gray-50 text-center hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-black text-xl">
                    {partner.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="w-full bg-primary py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight drop-shadow-sm">
            {COMPANY.tagline}
          </h2>
          <p className="text-emerald-100 mt-4 text-lg">
            Partnering with healthcare providers across Southern India to deliver excellence in
            medical technology.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg h-12 px-8 bg-white text-emerald-700 text-base font-bold hover:bg-emerald-50 transition-all shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
