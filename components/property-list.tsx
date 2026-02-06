"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { RESORTS, type Property } from '@/data/property-data';

export default function ResortGrid() {
  return (
    <section className="py-8 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-[2px] bg-[#FF8A3D]" />
              <span className="text-[#FF8A3D] font-black text-[10px] uppercase tracking-[0.3em]">
                Stay Options
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tighter">
                Handpicked Stays
              </h2>
              <p className="text-slate-500 text-m md:text-base max-w-2xl leading-relaxed mx-auto md:mx-0">
                Escape the ordinary with our exclusive collection of retreats. 
              </p>
            </div>
          </div>
        </div>

        {/* --- COMPACT BENTO GRID --- */}
        <div className="flex md:grid md:grid-cols-12 gap-5 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          
          <div className="min-w-[85%] md:min-w-0 md:col-span-7 lg:col-span-8">
            <ResortCard resort={RESORTS[0]} isLarge />
          </div>

          <div className="min-w-[85%] md:min-w-0 md:col-span-5 lg:col-span-4">
            <ResortCard resort={RESORTS[1]} />
          </div>

          <div className="min-w-[85%] md:min-w-0 md:col-span-5 lg:col-span-4">
            <ResortCard resort={RESORTS[2]} />
          </div>

          <div className="min-w-[85%] md:min-w-0 md:col-span-7 lg:col-span-8">
            <ResortCard resort={RESORTS[3]} />
          </div>

        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function ResortCard({ resort, isLarge }: { resort: Property; isLarge?: boolean }) {
  return (
    <div 
      className={`group relative w-full rounded-[32px] overflow-hidden bg-slate-100
        ${isLarge ? 'h-[350px] md:h-[450px]' : 'h-[350px] md:h-[280px]'}
      `}
    >
      {/* Property Image */}
      <Image
        src={resort.image}
        alt={resort.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-90" />

      {/* Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex flex-col gap-1">
          
          <div className="flex items-center gap-1.5 text-white/70 text-[9px] font-bold uppercase tracking-widest mb-1">
            <MapPin size={10} className="text-[#FF8A3D]" />
            {resort.location}
          </div>

          <h3 className={`font-bold text-white leading-tight ${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
            {resort.name}
          </h3>
          
          <span className="text-[9px] text-white/40 uppercase font-black tracking-widest">
            {resort.category}
          </span>
        </div>
      </div>
    </div>
  );
}