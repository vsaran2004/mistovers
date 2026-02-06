"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Instagram,
  ArrowUpRight,
  Quote
} from 'lucide-react';

import { siteConfig } from '@/data/basic-data';

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Arjun S.",
    tripType: "Couple",
    rating: 5,
    text: "Great local support and smooth trip planning. The view from the cottage they suggested was breathtaking.",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    tripType: "Family",
    rating: 5,
    text: "Jeep safari and stay arrangements were perfect. My kids loved the strawberry farm visit. Highly recommended!",
  },
  {
    id: 3,
    name: "Rahul & Friends",
    tripType: "Group",
    rating: 5,
    text: "Very helpful team and best pricing. They know the hidden spots in Kanthalloor that aren't on Google Maps.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export default function ReviewsAndContact() {
  return (
    <div className="w-full font-sans text-[#0B1220] selection:bg-blue-500/30">
      
      {/* 1. REVIEWS SECTION */}
      <section className="bg-white py-8 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <span className="text-blue-600 font-black tracking-[0.25em] text-[11px] uppercase block mb-3">
              Guest Experiences
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-[#0F3D2E] tracking-tighter leading-tight">
              Stories from <br className="md:hidden" /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Mist.</span>
            </h2>
            <p className="text-[#5B6675] max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
              Trusted by couples, families, and explorers seeking the authentic charm of {siteConfig.location.name}.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto gap-4 pb-6 md:pb-0 md:grid md:grid-cols-3 md:gap-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {REVIEWS_DATA.map((review) => (
              <motion.div 
                key={review.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-full snap-center bg-[#FAF9F6] p-8 rounded-[2rem] flex flex-col justify-between relative group"
              >
                <Quote className="absolute top-8 right-8 text-blue-100/50" size={32} />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "#2563eb" : "none"} className={i < review.rating ? "text-blue-600" : "text-gray-200"} />
                    ))}
                  </div>
                  <p className="text-[#40524d] mb-8 text-base md:text-lg leading-relaxed font-medium italic">"{review.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-[#0F3D2E]/5">
                  <div>
                    <p className="font-bold text-[#0F3D2E] text-sm md:text-base">{review.name}</p>
                    <p className="text-blue-600/70 text-[10px] font-bold uppercase tracking-widest">{review.tripType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CONTACT US & COMPACT INSTAGRAM */}
      <section className="relative overflow-hidden bg-[#0F3D2E]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Content: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.05] tracking-tighter">
                Plan Your <span className="text-blue-400">Kanthalloor</span> <br className="hidden md:block" /> Trip Today
              </h2>
              <p className="text-emerald-50/70 mb-10 md:mb-12 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                {siteConfig.company.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8 mb-12">
                {[
                  { icon: Phone, label: `+${siteConfig.contact.whatsappNumber}`, sub: "Primary Contact" },
                  { icon: Mail, label: siteConfig.contact.email, sub: "Email Inquiry" },
                  { icon: Clock, label: "8:00 AM - 9:00 PM", sub: "Daily Support" },
                  { icon: MapPin, label: siteConfig.location.name, sub: "Base Location" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-blue-600/20 transition-colors">
                      <item.icon size={18} className="text-blue-400 md:size-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm md:text-base tracking-tight">{item.label}</p>
                      <p className="text-emerald-50/30 text-[9px] uppercase font-black tracking-widest mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-7 py-4 rounded-xl font-black hover:bg-blue-500 transition-all shadow-xl active:scale-95 group text-sm md:text-base"
                >
                  <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
                  WhatsApp Enquiry
                </Link>
                <Link 
                  href={`tel:+${siteConfig.contact.whatsappNumber}`}
                  className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-7 py-4 rounded-xl font-black hover:bg-white hover:text-[#0F3D2E] transition-all active:scale-95 text-sm md:text-base"
                >
                  <Phone size={18} />
                  Call Now
                </Link>
              </div>
            </motion.div>

            {/* Right Content: COMPACT Instagram Tile */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative z-10"
            >
              <Link 
                href={siteConfig.social.instagram}
                target="_blank"
                className="block bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6 md:p-8 rounded-[2rem] shadow-2xl group relative overflow-hidden transition-all duration-300 hover:shadow-pink-500/20"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white leading-tight">Instagram</h3>
                      <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Daily Updates</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm font-medium mb-8">See the magic from the misty orchards and hills.</p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-white/20">
                    <p className="text-[14px] font-bold text-white tracking-tight truncate max-w-[180px]">
                      @{siteConfig.social.instagram.split('/').pop()}
                    </p>
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}