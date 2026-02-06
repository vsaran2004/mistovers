"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Heart } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What is the best time to visit Kanthalloor?",
    answer: "October to March is ideal for cool weather and misty mornings. Summer is also pleasant compared to cities, offering a refreshing escape from the heat."
  },
  {
    question: "Do your packages include stays?",
    answer: "Yes, selected packages include curated stays in premium cottages or farmstays. We also offer stay-only booking options depending on availability."
  },
  {
    question: "Is jeep safari included in all packages?",
    answer: "Jeep safari is included in specific adventure packages. However, you can easily add it as an optional extra for any of our other custom trips."
  },
  {
    question: "Do you provide food?",
    answer: "Food is included in some all-inclusive packages. For others, we can arrange breakfast, local tea/snacks, or traditional lunch based on your specific plan."
  },
  {
    question: "Can you arrange pickup from Coimbatore / Pollachi / Udumalpet?",
    answer: "Yes. Pickup and drop-off can be arranged from these locations based on your group size and preferred vehicle type (Bus, Tempo Traveller, or Private Car)."
  },
  {
    question: "How do I book?",
    answer: "Tap ‘WhatsApp Enquiry’ and share your travel date, number of people, pickup location, and package preference. Our team will get back to you instantly."
  }
];

export default function FAQSection() {
  return (
    <section className="py-18 md:py-32 bg-white px-4 md:px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Header Section: Centered on Mobile, Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 w-full text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase block mb-3 md:mb-4">
                  Essentials
                </span>
                <h2 className="text-3xl md:text-7xl font-black text-[#0F3D2E] tracking-tighter leading-tight mb-4 md:mb-6">
                  Common <br className="hidden lg:block" /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Queries.</span>
                </h2>
                <p className="text-[#5B6675] text-sm md:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                  Everything you need to know before stepping into the mist. We've simplified the details for your peace of mind.
                </p>
              </div>

              {/* Thank You / Signature Section */}
              <div className="pt-8 border-t border-gray-100 space-y-4 md:space-y-6">
                <p className="text-blue-600 font-bold text-base md:text-2xl italic tracking-tight">
                  Reserve your holiday with us
                </p>
                <div className="py-2">
                  <svg viewBox="0 0 400 100" className="w-full max-w-[240px] md:max-w-[280px] mx-auto lg:mx-0 drop-shadow-sm">
                    <defs>
                      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <text x="0" y="70" style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '48px', fontWeight: 'bold', fill: 'url(#textGrad)' }}>
                      Happy Journey
                    </text>
                    <path d="M10 85 Q 150 105, 380 75" stroke="url(#textGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#5B6675] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                  <Heart size={12} className="text-blue-500 fill-blue-500 md:size-[14px]" />
                  <span>See you in the hills soon</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Accordion: Full Width on Mobile */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-1 md:space-y-2">
              {FAQ_DATA.map((faq, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={index}
                >
                  <details className="group border-b border-gray-100 bg-white transition-all duration-300">
                    <summary className="flex items-center justify-between py-5 md:py-8 cursor-pointer list-none outline-none">
                      <span className="font-bold text-[#0F3D2E] pr-6 text-sm md:text-2xl tracking-tight transition-colors group-hover:text-blue-600 leading-tight">
                        {faq.question}
                      </span>
                      <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0">
                        <Plus size={18} className="absolute transition-transform duration-500 group-open:rotate-90 group-open:opacity-0 text-blue-600 md:size-[20px]" />
                        <Minus size={18} className="absolute transition-transform duration-500 rotate-[-90deg] opacity-0 group-open:rotate-0 group-open:opacity-100 text-blue-600 md:size-[20px]" />
                      </div>
                    </summary>
                    <div className="pb-6 md:pb-10 text-[#5B6675] leading-relaxed text-xs md:text-lg font-medium animate-in fade-in slide-in-from-top-2 duration-500 px-1">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        summary::-webkit-details-marker { display: none; }
        details { overflow: hidden; }
      `}</style>
    </section>
  );
}