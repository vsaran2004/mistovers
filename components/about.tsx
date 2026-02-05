"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  MapPin,
  MessageCircle,
  DollarSign,
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// Spring transition
const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function LuxuryTravelLanding() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Parallax for hero image (fixes undefined yImage)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Bespoke Itineraries",
      desc: "No cookie-cutter tours. We craft journeys that match your soul.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Verified Safety",
      desc: "Hand-picked stays and certified local drivers you can trust.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Instant Support",
      desc: "Real-time WhatsApp assistance from locals who know the terrain.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Honest Value",
      desc: "Transparent pricing with zero hidden fees. Local rates.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFEFD] text-[#1A2F28] font-sans antialiased selection:bg-[#FF8A3D] selection:text-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-12 px-4 md:px-6 lg:pt-32 lg:pb-24 overflow-hidden"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF8A3D]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[#0F3D2E]/5 border border-[#0F3D2E]/10">
              <span className="w-2 h-2 rounded-full bg-[#FF8A3D] animate-pulse" />
              <span className="text-[#0F3D2E] uppercase tracking-widest text-[10px] font-bold">
                The Hidden Gem of Kerala
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-[#0F3D2E]">
              Kanthalloor: Where <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D7A5F] to-[#FF8A3D]">
                Clouds Touch Earth.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#5B6675] leading-relaxed mb-8 max-w-xl">
              Tucked away near Munnar, Kanthalloor is a land of perpetual mist and terraced orchards.
              Experience air so fresh it heals, right in Kerala’s best-kept secret.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Cool Climate", "Fruit Orchards", "Misty Hills"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-xl border border-[#0F3D2E]/5 bg-white text-xs font-semibold shadow-sm flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-[#FF8A3D]" />
                  {tag}
                </span>
              ))}
            </div>

            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0F3D2E] text-white rounded-2xl font-bold overflow-hidden transition-all hover:pr-10">
              <span className="relative z-10">Explore the Village</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-orange-100 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80"
                alt="Nature"
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">Idukki, Kerala</span>
                </div>
                <p className="text-2xl font-bold">The Winter Apple Valley</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-6 bg-[#F3F6F3]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
              Why Choose Mistovers?
            </h2>
            <p className="text-[#5B6675] max-w-lg mx-auto text-sm md:text-base">
              Local expertise meets global luxury. We open doors to secret trails and hidden waterfalls.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-[#E3EAE6] hover:border-[#0F3D2E]/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#0F3D2E]/5"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{item.title}</h3>
                <p className="text-[#5B6675] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* FINAL CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 relative p-8 md:p-16 rounded-[3rem] bg-[#0F3D2E] overflow-hidden text-center text-white"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

            <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to lose yourself in the mist?
            </h3>
            <p className="text-emerald-100/80 mb-10 text-lg relative z-10 max-w-xl mx-auto">
              Join 500+ travelers who discovered the quiet magic of Kanthalloor this year.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#FF8A3D] hover:bg-[#ff9a57] text-white rounded-2xl font-bold transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-3">
                Plan Your Dream Trip <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl font-bold transition-all">
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
