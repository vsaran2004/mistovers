"use client";

import React from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

/**
 * FAQSection Component
 * Features:
 * - Native <details>/<summary> for accessibility
 * - Mobile-first layout (Stacks on mobile, 2-cols on desktop)
 * - Custom CSS transitions for the chevron rotation
 * - Premium misty-themed support card
 */

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
    <section className="py-16 md:py-24 bg-white px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <span className="text-[#FF8A3D] font-bold tracking-[0.2em] text-xs uppercase block mb-3">
            FAQ
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-semibold mb-4 text-[#0F3D2E]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5B6675] max-w-2xl text-sm md:text-base">
            Everything you need to know before booking your Kanthalloor trip. 
            Can't find what you're looking for? Message us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* FAQ List - Column 1 & 2 */}
          <div className="lg:col-span-2 space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details 
                key={index} 
                className="group border border-[#E3EAE6] rounded-[20px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none outline-none focus:ring-2 focus:ring-[#FF8A3D]/20">
                  <span className="font-semibold text-[#0B1220] pr-4 md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className="text-[#5B6675] transition-transform duration-300 group-open:rotate-180 shrink-0" 
                  />
                </summary>
                <div className="px-5 pb-6 md:px-6 md:pb-8 text-[#5B6675] leading-relaxed text-sm md:text-base border-t border-[#F3F7F5] pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Support Card - Column 3 */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-[#F3F7F5] p-8 rounded-[24px] border border-[#E3EAE6] relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FF8A3D]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <HelpCircle className="text-[#0F3D2E]" size={24} />
                </div>
                <h3 className="font-poppins text-xl font-bold text-[#0F3D2E] mb-3">
                  Need help choosing a package?
                </h3>
                <p className="text-[#5B6675] text-sm mb-8 leading-relaxed">
                  Our local experts are ready to suggest the best plan for your group. Get a custom itinerary in minutes!
                </p>
                
                <a 
                  href="https://wa.me/919999999999?text=Hi%20Kanthalloor%20Mistovers%2C%20I%20need%20help%20choosing%20a%20package."
                  className="flex items-center justify-center gap-3 w-full bg-[#0F3D2E] text-white py-4 rounded-xl font-bold hover:bg-[#1a5240] transition-all shadow-lg active:scale-95 outline-none focus:ring-4 focus:ring-[#0F3D2E]/20"
                >
                  <MessageCircle size={18} />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
            
            {/* Quick Mobile Support Tag */}
            <p className="text-center mt-6 text-[#5B6675] text-xs">
              Response time: <span className="text-[#0F3D2E] font-bold">~5 mins</span>
            </p>
          </aside>

        </div>
      </div>

      {/* Custom Styles for Safari/Firefox details marker removal */}
      <style jsx>{`
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </section>
  );
}