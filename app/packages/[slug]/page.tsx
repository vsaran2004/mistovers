"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { ChevronLeft, MapPin, Clock, Users, CheckCircle2, MessageCircle, Star, Sparkles, Send, Settings2 } from 'lucide-react';
import { useParams } from 'next/navigation';

import { PACKAGES, type TravelPackage } from '@/data/package-data';
import { siteConfig } from '@/data/basic-data';

export default function PackageDetails() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = PACKAGES.find((p: TravelPackage) => p.slug === slug);

  if (!pkg) return <div className="p-20 text-center font-medium">Package not found.</div>;

  const whatsappBaseUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-32 font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30" />
        
        <Link href="/packages" className="absolute top-5 left-5 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white z-30">
          <ChevronLeft size={20} />
        </Link>

        <div className="absolute bottom-10 left-0 w-full px-5 md:px-10 z-20">
          <span className="bg-[#FF8A3D] text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 inline-block">
            {pkg.location}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
            {pkg.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* --- STATS CARD --- */}
        <div className="relative -mt-8 bg-white shadow-xl shadow-slate-200/60 rounded-3xl p-6 grid grid-cols-2 md:grid-cols-3 gap-4 border border-white z-30">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Duration</span>
            <div className="flex items-center gap-2 text-slate-800 font-bold"><Clock size={16} className="text-[#FF8A3D]"/> {pkg.duration}</div>
          </div>
          <div className="flex flex-col border-l border-slate-100 pl-4">
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Group Size</span>
            <div className="flex items-center gap-2 text-slate-800 font-bold"><Users size={16} className="text-[#FF8A3D]"/> {pkg.groupSize}</div>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-4">
             <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Starting At</span>
             <div className="text-xl font-black text-[#0F3D2E]">₹{pkg.price}</div>
          </div>
        </div>

        {/* --- HIGHLIGHTS --- */}
        <div className="mt-8 overflow-x-auto no-scrollbar -mx-4 px-4">
          <div className="flex flex-nowrap gap-2">
            {pkg.highlights.map((h, i) => (
              <div key={i} className="bg-orange-50/50 border border-orange-100 px-4 py-2 rounded-full text-xs font-bold text-[#FF8A3D] flex items-center gap-2 whitespace-nowrap">
                <Sparkles size={12} /> {h}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-10">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">{pkg.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-5">Inclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* --- CUSTOM PLAN BOX (Mobile First) --- */}
            <section className="relative overflow-hidden bg-[#0F3D2E] rounded-[32px] p-8 text-white shadow-lg">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Settings2 size={100} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Need a Custom Plan?</h3>
                  <p className="text-white/70 text-sm mb-6 max-w-xs">
                    Tailor this trip exactly how you want. More days, special surprises, or specific food preferences?
                  </p>
                  <Link 
                    href={`${whatsappBaseUrl}?text=I want a custom travel plan for Kanthalloor based on the ${pkg.title}.`}
                    className="inline-flex items-center gap-2 bg-white text-[#0F3D2E] px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors"
                  >
                    <Send size={16} />
                    Chat with an Expert
                  </Link>
               </div>
            </section>

          </div>

          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-10 bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Why {siteConfig.company.name}?</h3>
              <ul className="space-y-4">
                 <li className="flex gap-3 text-slate-600 text-sm italic">"The most authentic Kanthalloor experience with private stays and local food."</li>
                 <li className="flex items-center gap-3 text-sm font-bold text-slate-800"><CheckCircle2 size={16} className="text-[#FF8A3D]"/> Verified Private Stays</li>
                 <li className="flex items-center gap-3 text-sm font-bold text-slate-800"><CheckCircle2 size={16} className="text-[#FF8A3D]"/> Local 4x4 Jeep Experts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- FIXED BOOKING BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-100 p-4 px-6 flex items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total From</span>
          <span className="text-2xl font-black text-slate-900 leading-tight">₹{pkg.price}</span>
        </div>
        
        <Link 
          href={`${whatsappBaseUrl}?text=Booking request for ${pkg.title}.`}
          className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg shadow-green-100"
        >
          <MessageCircle size={20} fill="currentColor" />
          BOOK NOW
        </Link>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}