"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/basic-data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/#contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl py-3 border-b border-slate-100 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo-mistovers.png" 
                alt={siteConfig.company.name} 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
            <span className={`font-bold tracking-tighter text-xl transition-colors duration-500 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              {siteConfig.company.name}
            </span>
          </Link>

          {/* Toggle Button - Black and Green Theme */}
          <button
            onClick={() => setIsOpen(true)}
            className={`group flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 shadow-lg ${
              scrolled 
                ? "bg-slate-900 hover:bg-black" 
                : "bg-slate-900/40 backdrop-blur-md hover:bg-slate-900"
            }`}
          >
            <div className="flex flex-col items-end gap-1.5">
              {/* White Bar */}
              <span className="h-0.5 w-6 rounded-full bg-white transition-all group-hover:w-4" />
              {/* Green Accent Bar */}
              <span className="h-0.5 w-4 rounded-full bg-[#22C55E] transition-all group-hover:w-6 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-[#0B1220]/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[120] h-full w-[85vw] md:w-[450px] bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-8 border-b border-slate-50">
                <div className="flex items-center gap-5">
                   <div className="h-17 w-17 relative">
                     <Image src="/logo-mistovers.png" alt="Logo" fill className="object-contain" />
                   </div>
                   <span className="font-black uppercase text-[10px] tracking-widest text-slate-400">Menu</span>
                </div>
                {/* Drawer Close Button - Matching Theme */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-[#22C55E] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-10 flex flex-col justify-center gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-3"
                    >
                      <span className="text-2xl font-bold text-[#0F172A] group-hover:text-[#22C55E] transition-all">
                        {link.name}
                      </span>
                      <ArrowRight className="text-[#22C55E] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-10 bg-slate-50 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Get in Touch</h4>
                  <a href={`tel:${siteConfig.contact.whatsappNumber}`} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-[#22C55E] transition-colors">
                    <Phone size={16} className="text-[#22C55E]" /> {siteConfig.contact.whatsappNumber}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-[#22C55E] transition-colors">
                    <Mail size={16} className="text-[#22C55E]" /> {siteConfig.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                   <a href={siteConfig.social.instagram} target="_blank" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:bg-[#22C55E] hover:text-white transition-all"><Instagram size={18} /></a>
                   <a href={siteConfig.social.facebook} target="_blank" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:bg-[#22C55E] hover:text-white transition-all"><Facebook size={18} /></a>
                   <a href={siteConfig.social.whatsapp} target="_blank" className="w-10 h-10 rounded-xl bg-[#22C55E] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-all"><MessageCircle size={18} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}