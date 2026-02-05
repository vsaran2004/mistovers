"use client";

import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden font-inter selection:bg-[#FF8A3D]/30">
      
      {/* --- 1. Background Video Layer --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105" // Slight scale to prevent edge flickering
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Premium Overlay: Darker at bottom for button legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0B1220]/90 z-10" />
      </div>

      {/* --- 2. Centered Content --- */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center px-6 pt-20">
        <div className="space-y-8 w-full">
          
          {/* Brand Badge */}
          <div className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 border border-white/20 backdrop-blur-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A3D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A3D]"></span>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#F3F7F5]">Kanthalloor Mistovers</span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              EXPLORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F3F7F5] to-white/50 italic font-serif">Kanthalloor</span>
            </h1>
            
            <p className={`text-[#F3F7F5]/80 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Experience Kanthalloor’s premier farm-stay collective. Curated escapes for the modern wanderer.
            </p>
          </div>

          {/* --- 3. Interaction Hub (Full Width on Mobile) --- */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            <a 
              href="https://wa.me/919999999999?text=Hi%20Kanthalloor%20Mistovers%2C%20I%20need%20trip%20details." 
              className="group relative overflow-hidden h-14 w-full sm:w-48 flex items-center justify-between px-6 rounded-2xl bg-[#0F3D2E] text-white transition-all hover:bg-[#16523f] active:scale-95 shadow-xl"
            >
              <span className="relative z-10 text-[11px] font-black uppercase tracking-widest">WhatsApp</span>
              <MessageCircle size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </a>

            <a 
              href="/packages" 
              className="group relative h-14 w-full sm:w-48 flex items-center justify-between px-6 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white transition-all hover:bg-white hover:text-[#0B1220] active:scale-95"
            >
              <span className="text-[11px] font-black uppercase tracking-widest">Packages</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Stats */}
          <div className={`mt-12 flex items-center justify-center gap-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-[10px] uppercase tracking-tighter text-[#F3F7F5]/50 font-bold">Guest Rating</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-[10px] uppercase tracking-tighter text-[#F3F7F5]/50 font-bold">Private Villas</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'ModernSerif';
          src: url('https://fonts.googleapis.com/css2?family=Instrument+Serif:italic@1&display=swap');
        }
      `}</style>
    </section>
  );
}