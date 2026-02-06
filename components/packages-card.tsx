"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Clock, ArrowUpRight, Phone } from "lucide-react";
import { PACKAGES, type TravelPackage } from "@/data/package-data";
import { siteConfig } from "@/data/basic-data";

/**
 * Animation Variants
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ✅ FIXED buttonZoomProps (spring literal type)
const buttonZoomProps = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.08,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  whileTap: { scale: 0.94 },
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 17,
  },
};

/**
 * Individual Package Card Component
 */
export function PackageCard({ pkg }: { pkg: TravelPackage }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12 }}
      className="group relative flex flex-col h-[500px] rounded-[30px] overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-2">
            <Clock size={14} className="text-sky-600" />
            <span className="text-[12px] font-bold text-slate-900">
              {pkg.duration}
            </span>
          </div>
        </div>

        <div className="absolute bottom-1 left-6 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-lg border border-white/10 text-white">
          <span className="text-lg font-bold">₹{pkg.price}</span>
          <span className="text-[10px] opacity-70 ml-1 uppercase tracking-tighter">
            / person
          </span>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-6 flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors line-clamp-1">
            {pkg.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.highlights.slice(0, 4).map((h, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-1 bg-slate-100/80 text-slate-600 rounded-lg border border-slate-200/50 font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <motion.div {...buttonZoomProps}>
          <Link
            href={`/packages/${pkg.slug}`}
            className="group/btn relative inline-flex w-full items-center justify-between overflow-hidden rounded-2xl bg-slate-950 px-6 py-4 text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
          >
            <span className="relative z-10 font-bold text-sm tracking-wide">
              Explore Experience
            </span>

            <div className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
              <ArrowUpRight size={20} />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Main Packages Section Component
 */
export function PackagesSection() {
  return (
    <section className="relative py-29 md:py-33 px-5 bg-[#F8F9FA] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sky-200/40 to-transparent blur-[20px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-950 leading-[0.95] tracking-tighter">
              Curated <br />
              <span className="text-sky-600 italic">Mistover Trips.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg md:text-xl max-w-md leading-relaxed border-l-2 border-sky-200 pl-6"
          >
            Discover Kanthalloor through routes that locals love. Hand-picked
            stays and hidden spots.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-22"
        >
          <div className="relative bg-slate-950 p-10 md:p-15 rounded-[50px] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Need a custom plan?
              </h3>
              <p className="text-slate-400 text-lg">
                Tell us your group size and dates, and we'll craft an itinerary
                just for you.
              </p>
            </div>

            <motion.div {...buttonZoomProps} className="inline-block relative z-10">
              <Link
                href={`tel:${siteConfig.contact.whatsappNumber}`}
                className="group flex items-center gap-3 bg-gradient-to-r from-sky-400 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl border border-white/30 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,145,178,0.3)]"
              >
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-[0.2em] opacity-80 mb-1 leading-none">
                    Instant Support
                  </span>
                  <span className="block text-l font-bold leading-none">
                    Talk to an Expert
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300">
                  <Phone size={20} />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
