"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Optimized Next.js Image component
import { 
  Instagram, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Icon Configuration
  const socials = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/919999999999", label: "WhatsApp" },
    { icon: <Mail size={20} />, href: "mailto:hello@mistovers.com", label: "Email" }
  ];

  return (
    <footer className="relative w-full overflow-hidden font-sans pt-4 bg-[#0B1220]">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#0F3D2E] to-[#0B1220] opacity-90 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 py-16">
          
          {/* COLUMN 1: BRAND IDENTITY with LOGO.PNG */}
          <div className="flex flex-col items-start space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden">
                {/* Replace src="/logo.png" with your actual path */}
                <Image 
                  src="/logo.png" 
                  alt="Kanthalloor Mistovers Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-xl text-white tracking-tight">
                Mistovers
              </span>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Expert local planners crafting curated Kanthalloor journeys with premium jeep safaris and misty stays.
            </p>

            {/* BLUE GRADIENT SOCIAL ICONS */}
            <div className="flex items-center gap-4 pt-2">
              {socials.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all 
                             bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] 
                             hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:scale-90"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="hidden sm:block">
            <h4 className="font-poppins font-bold text-white mb-8 text-xs uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Packages', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-all flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#3B82F6]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-8 text-xs uppercase tracking-[0.2em]">Experience</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              {['Stay Bookings', 'Jeep Safari', 'Custom Trips'].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3B82F6]" /> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT CARD */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <h4 className="font-poppins font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">Connect</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#3B82F6]" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#3B82F6]" />
                <span>Kanthalloor, Kerala</span>
              </div>
            </div>

            <Link 
              href="https://wa.me/919999999999"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#FF8A3D] to-[#FF6B3D] text-white font-bold rounded-2xl transition-all hover:brightness-110 active:scale-95"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </Link>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest text-center">
            © {currentYear} Kanthalloor Mistovers. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms'].map((item) => (
              <Link key={item} href="#" className="text-white/20 hover:text-[#3B82F6] text-[10px] uppercase tracking-widest transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;