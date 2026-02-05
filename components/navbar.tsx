"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
  }, [isOpen])

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-100" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          {/* Logo Container - Solid White BG */}
          <Link href="/" className="group relative">
            <div className={`relative h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 ${
              scrolled ? "border-slate-100" : "border-white/20"
            } group-hover:rounded-xl group-hover:scale-105 group-hover:border-blue-400`}>
              <Image 
                src="/logo.jpeg" 
                alt="Logo" 
                fill 
                className="object-contain p-1.5" 
                priority 
              />
            </div>
          </Link>

          {/* Styled More Icon Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`group flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
              scrolled 
                ? "border-slate-200 bg-slate-50 hover:bg-slate-100" 
                : "border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20"
            }`}
            aria-label="Open Menu"
          >
            <div className="flex flex-col items-end gap-1.5">
              <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
              <span className={`h-0.5 w-4 rounded-full transition-all group-hover:w-6 ${scrolled ? 'bg-blue-600' : 'bg-blue-400'}`} />
              <span className={`h-0.5 w-5 rounded-full transition-all group-hover:w-3 ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[110] bg-blue-900/10 backdrop-blur-md transition-opacity duration-700 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 75% Width Misty Drawer */}
      <div className={`fixed top-0 right-0 z-[120] h-full w-[75vw] md:w-[400px] transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Misty Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/98 via-white/98 to-slate-50/98 -z-10" />
        <div className="absolute inset-0 backdrop-blur-3xl -z-20 shadow-[-20px_0_60px_rgba(30,58,138,0.1)]" />

        <div className="flex h-full flex-col">
          {/* Menu Header / Close */}
          <div className="flex items-center justify-between p-6">
            <div className="h-10 w-10 relative bg-white rounded-lg p-1 border border-slate-100">
               <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition-all hover:bg-blue-600 shadow-lg"
            >
              <X size={18} className="transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-8 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-5 px-2 border-b border-blue-100/30"
                >
                  <span className="text-sm font-bold text-slate-600 transition-all group-hover:text-blue-700 group-hover:translate-x-2">
                    {link.name}
                  </span>
                  <ArrowRight size={14} className="text-blue-500 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </nav>

            {/* Contact Details */}
            <div className="mt-12 space-y-6 pb-10 px-2">
              <div className="space-y-4">
                <a href="tel:+919999999999" className="flex items-center gap-3 text-xs font-semibold text-slate-600 hover:text-blue-700">
                  <Phone size={14} className="text-blue-500" /> +91 999 999 9999
                </a>
                <a href="mailto:hello@mistovers.com" className="flex items-center gap-3 text-xs font-semibold text-slate-600 hover:text-blue-700">
                  <Mail size={14} className="text-blue-500" /> hello@mistovers.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={14} className="shrink-0 text-blue-500 mt-0.5" />
                <p className="text-[11px] font-medium leading-relaxed">
                  Kanthalloor, Idukki, Kerala
                </p>
              </div>

              {/* Socials */}
              <div className="flex gap-4 pt-2">
                {[Instagram, Facebook].map((Icon, idx) => (
                  <a key={idx} href="#" className="text-slate-400 transition-colors hover:text-blue-600">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}