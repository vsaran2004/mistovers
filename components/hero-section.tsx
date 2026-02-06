"use client";

import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/basic-data';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.warn("Autoplay prevented:", error);
        });
      }
    };
    attemptPlay();
  }, []);

  return (
    <section className="relative flex h-[89vh] w-full flex-col items-center justify-center overflow-hidden font-sans selection:bg-[#22C55E]/30">
      
      {/* --- 1. BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 bg-[#0B1220]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={siteConfig.hero.image}
          className="h-full w-full object-cover scale-105"
        >
          <source src={siteConfig.hero.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/30 to-[#0B1220] z-10" />
      </div>

      {/* --- 2. CONTENT HUB --- */}
      {/* Increased pt-24 for better top spacing on mobile */}
      <div className="relative z-20 w-full max-w-5xl flex flex-col items-center text-center px-6 pt-24 md:pt-0">
        <div className="space-y-6 w-full">
          
          {/* Brand Badge */}
          <div className={`inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 border border-white/10 backdrop-blur-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-pulse"></span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/80">
              Book your stay
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              BEYOND THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-emerald-200 italic font-serif py-2">
                Mountain Mist - kanthalloor
              </span>
            </h1>
            
            <p className={`text-white/60 text-sm md:text-lg font-light leading-relaxed max-w-xs md:max-w-lg mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {siteConfig.company.tagline}. Curated stays and 4x4 trails for the modern explorer.
            </p>
          </div>

          {/* --- 3. ACTION BUTTONS --- */}
          {/* Reduced width on mobile using w-auto and min-w-[160px] */}
          <div className={`mt-8 flex flex-row items-center justify-center gap-3 w-full transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            <a 
              href={siteConfig.contact.whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden h-12 md:h-14 w-auto min-w-[140px] md:min-w-[200px] flex items-center justify-center gap-3 px-5 rounded-xl md:rounded-2xl bg-black text-white transition-all active:scale-95 shadow-2xl border border-white/10"
            >
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">WhatsApp</span>
              <MessageCircle size={16} className="text-[#22C55E] group-hover:rotate-12 transition-transform" />
            </a>

            <a 
              href="/packages" 
              className="group relative h-12 md:h-14 w-auto min-w-[140px] md:min-w-[200px] flex items-center justify-center gap-3 px-5 rounded-xl md:rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white transition-all hover:bg-white hover:text-black active:scale-95"
            >
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">Trips</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats Section */}
          <div className={`mt-10 flex items-center justify-center gap-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <p className="text-lg md:text-xl font-bold text-white">4.9/5</p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#22C55E]">Rating</p>
            </div>
            <div className="h-5 w-px bg-white/10" />
            <div className="text-center">
              <p className="text-lg md:text-xl font-bold text-white">15k+</p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#22C55E]">Travelers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B1220] to-transparent z-20" />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:italic@1&display=swap');
        .font-serif { font-family: 'Instrument Serif', serif; }
      `}</style>
    </section>
  );
}