"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/basic-data';

/**
 * FloatingActions Component
 * Features:
 * - Compact Size (reduced from 56px to 44px)
 * - Dynamic WhatsApp link from siteConfig
 * - Progress circle matching brand colors
 */

const FloatingActions = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Show "Back to Top" after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG Math for the compact circle
  const radius = 18; // Reduced from 24
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-7 right-5 z-[999] flex flex-col items-end gap-3 font-sans print:hidden">
      
      {/* --- COMPACT SCROLL TRACKER + BACK TO TOP --- */}
      <div 
        className={`relative transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToTop}
          className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 active:scale-95 transition-all border border-slate-100 group"
          aria-label="Scroll to top"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="20"
              cy="20"
              r={radius}
              stroke="currentColor"
              strokeWidth="2.5"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="20"
              cy="20"
              r={radius}
              stroke="#22C55E" // Brand Green
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.1s linear' }}
              strokeLinecap="round"
            />
          </svg>
          
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform relative z-10" />
        </button>
      </div>

      {/* --- WHATSAPP BUBBLE --- */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsappNumber}&text=Hi%20Mistover%20Kanthalloor%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        {/* Pulsing Effect */}
        <span className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-25"></span>
        
        <div className="relative w-15 h-15 bg-black rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-[#22C55E]/20 transition-all hover:scale-110 active:scale-95 border border-white/10">
          <MessageCircle size={30} className="text-[#22C55E]" fill="currentColor" />
        </div>

        {/* Desktop Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block border border-white/10">
          Chat with us
        </span>
      </a>

    </div>
  );
};

export default FloatingActions;