"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  ChevronRight,
  ArrowUpRight,
  ClipboardList
} from 'lucide-react';
import { siteConfig } from '@/data/basic-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links without enquiry form
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/#about' },
  ];

  return (
    <footer className="relative w-full overflow-hidden font-sans bg-[#0B1220] border-t border-white/5 pt-4 md:pt-8">
      {/* Subtle Mist Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22C55E]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 py-12">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="flex flex-col items-start space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="/logo-mistovers.png" 
                  alt={`${siteConfig.company.name} Logo`} 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl text-white tracking-tighter">
                {siteConfig.company.name}
              </span>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              {siteConfig.company.description}
            </p>

            {/* DARK SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Instagram size={18} />, href: siteConfig.social.instagram },
                { icon: <Facebook size={18} />, href: siteConfig.social.facebook },
                { icon: <Mail size={18} />, href: `mailto:${siteConfig.contact.email}` }
              ].map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all hover:bg-[#FF8A3D] hover:border-[#FF8A3D] hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div className="lg:pl-10">
            <h4 className="text-[#FF8A3D] font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="grid grid-cols-1 gap-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 hover:text-white text-sm transition-all flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-[#22C55E]" /> 
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CALL TO ACTION CARD */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#22C55E]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                Quick Enquiry <ArrowUpRight size={16} className="text-[#22C55E]" />
              </h4>
              
              <div className="space-y-4 mb-8 text-sm text-white/60 font-light">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#22C55E]" />
                  <span>{siteConfig.contact.whatsappNumber}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#22C55E]" />
                  <span>{siteConfig.location.name}</span>
                </div>
              </div>

              {/* REPLACED WHATSAPP WITH ENQUIRY FORM BUTTON */}
              <Link 
                href="/enquiry-form"
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all border border-white/10 hover:bg-[#22C55E] hover:border-[#22C55E] active:scale-95 shadow-lg shadow-black/20"
              >
                <ClipboardList size={18} />
                Enquiry Form
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {currentYear} {siteConfig.company.name}. All Rights Reserved.
          </p>
          
          <Link 
            href="https://instagram.com/genscript.labs" 
            target="_blank"
            className="text-white/30 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-1.5"
          >
            Made with <span className="text-red-500">❤️</span> by @genscript.labs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;