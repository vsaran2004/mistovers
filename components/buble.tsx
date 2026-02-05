"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

/**
 * FloatingActions Component
 * Features:
 * - Fixed position (Bottom Right)
 * - Circular Scroll Progress Tracker
 * - Smooth "Back to Top" functionality
 * - Pulsing WhatsApp button
 */

const FloatingActions = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate scroll percentage and toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show "Back to Top" after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG Math for the circle
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4 font-sans">
      
      {/* --- SCROLL TRACKER + BACK TO TOP --- */}
      <div 
        className={`relative transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToTop}
          className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0F3D2E] shadow-xl hover:scale-110 active:scale-90 transition-all border border-gray-100 group"
          aria-label="Scroll to top"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-[#F3F7F5]"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#0F3D2E"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.1s linear' }}
              strokeLinecap="round"
            />
          </svg>
          
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* --- WHATSAPP BUBBLE --- */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20Kanthalloor%20Mistovers%2C%20I%20need%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        {/* Pulsing Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:hidden"></span>
        
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-green-500/40 transition-all hover:scale-110 active:scale-90">
          <MessageCircle size={28} fill="currentColor" />
        </div>

        {/* Desktop Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0F3D2E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
          Chat with us
        </span>
      </a>

    </div>
  );
};

export default FloatingActions;