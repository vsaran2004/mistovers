"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  MousePointer2,
  Percent,
  ClipboardList,
  Gem,
  Clock,
  Navigation,
  DollarSign,
  Settings2,
  Wind,
  Mountain,
} from "lucide-react";

// Animation Variants (FIXED: Variants must use named states like hidden/show)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function LuxuryTravelLanding() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Handpicked Packages",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "24/7 Support",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: <Gem className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Premium Stays",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: <Navigation className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Local Guides",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: <DollarSign className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Honest Value",
      color: "bg-sky-50 text-sky-600",
    },
    {
      icon: <Settings2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Customizable Packages",
      color: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFEFD] text-[#1A2F28] font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-12 px-4 md:px-8 lg:pt-36 lg:pb-24 overflow-hidden"
      >
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-blue-400/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-900/5 border border-blue-900/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-900 uppercase tracking-[0.2em] text-[10px] font-black">
                Kerala's Winter Apple Valley
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tighter text-[#0F3D2E]">
              Kanthalloor: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
                Pure Magic.
              </span>
            </h1>

            <div className="space-y-2 mb-8 max-w-xl">
              <p className="text-lg md:text-xl text-[#5B6675] leading-relaxed font-medium">
                Experience air so fresh it heals. Discover a land of perpetual
                mist, ancient dolmens, and terraced orchards hidden in the
                Western Ghats.
              </p>
              <p className="text-lg md:text-xl text-[#5B6675] leading-relaxed font-medium">
                Step into a world where time slows down and nature speaks in
                whispers. Your perfect escape into the serene highlands awaits.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ y: yImage }} className="relative block">
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-[2rem] md:rounded-[3rem] blur-2xl md:blur-3xl opacity-40" />
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,61,46,0.15)] border-4 md:border-8 border-white">
              <img
                src="/home-image-kanthalloor.jpeg"
                alt="Mist over Kanthalloor"
                className="w-full aspect-[18/14] lg:aspect-[4/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <div className="flex items-center gap-2 mb-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                  <MapPin className="w-3 h-3 text-blue-300" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">
                    Kanthalloor, Kerala
                  </span>
                </div>
                <p className="text-l md:text-2xl font-bold leading-tight">
                  Where the Clouds Come to Rest
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DISCOVER THE CALM */}
      <section className="relative py-12 px-4 overflow-hidden bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F3D2E] tracking-tight">
                Discover the Calm <br className="hidden md:block" /> Beauty of{" "}
                <span className="relative inline-block">
                  Kanthalloor.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/30"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0, 50 5 T 100 5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            {/* Row 1 */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <MousePointer2 className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F3D2E] mb-3">
                  Peaceful Hill Stay
                </h3>
                <p className="text-[#5B6675] leading-relaxed text-sm md:text-base font-medium">
                  Enjoy a calm and relaxing stay surrounded by misty mountains,
                  cool weather, and fresh mountain air.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-500">
                <Percent className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F3D2E] mb-3">
                  Nature & Farmlands
                </h3>
                <p className="text-[#5B6675] leading-relaxed text-sm md:text-base font-medium">
                  Explore lush green farms, orchards, and scenic landscapes that
                  make Kanthalloor truly refreshing.
                </p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Wind className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F3D2E] mb-3">
                  Organic Apple Orchards
                </h3>
                <p className="text-[#5B6675] leading-relaxed text-sm md:text-base font-medium">
                  Walk through the only region in Kerala where winter apples
                  thrive alongside oranges and plums.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-500">
                <Mountain className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F3D2E] mb-3">
                  Hidden Waterfalls
                </h3>
                <p className="text-[#5B6675] leading-relaxed text-sm md:text-base font-medium">
                  Discover secret cascades and crystal clear streams tucked away
                  in the deep valley folds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#0F3D2E] mb-6">
              Why Mistovers?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-[#5B6675] text-lg font-medium leading-relaxed">
              <p>
                Mistovers is your gateway to the untouched serenity of
                Kanthalloor, where we blend local authenticity with premium
                comfort. We believe travel should be seamless, deeply personal,
                and respectful of the nature we call home.
              </p>
              <p>
                From hand-picked orchards to private mountain trails, we ensure
                every moment is draped in the magic of the mist.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#FAF9F6] border border-[#0F3D2E]/5 hover:bg-white hover:border-blue-400/30 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-sm`}
                >
                  {item.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-[#0F3D2E]">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="pb-18 px-4 md:px-9">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative py-16 md:py-22 px-6 md:px-18 rounded-[3rem] md:rounded-[4rem] bg-[#0F3D2E] overflow-hidden text-center"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Ready to lose <br className="sm:hidden" /> yourself in the mist?
            </h3>
            <p className="text-blue-100/70 mb-10 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Your private mountain getaway is just a message away. Join our
              community of explorers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry-form"
                className="group relative px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 overflow-hidden"
              >
                <ClipboardList className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Small Enquiry Form</span>
              </Link>
              <Link
                href="/gallery"
                className="group text-white/80 hover:text-white transition-colors text-l font-bold flex items-center gap-2 py-2"
              >
                View Gallery{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
