"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { siteConfig } from "@/data/basic-data";

type DurationOption = "1 Night / 2 Days" | "2 Nights / 3 Days" | "3 Nights / 4 Days" | "Custom";
type TravelTypeOption = "Bachelor" | "Family" | "Couple" | "Solo" | "School/College trip";
type PropertyTypeOption = "Mud House" | "Villa / Hut" | "Resort / Homestay" | "A Frame" | "Tent / Camping";

function isValidIndianWhatsapp(num: string) {
  const cleaned = num.replace(/[^\d+]/g, "");
  return /^\+91\d{10}$/.test(cleaned) || /^91\d{10}$/.test(cleaned) || /^\d{10}$/.test(cleaned);
}

function formatDateHuman(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function TripEnquiryForm() {
  const [duration, setDuration] = useState<DurationOption>("1 Night / 2 Days");
  const [fullName, setFullName] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [travelType, setTravelType] = useState<TravelTypeOption>("Family");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyTypeOption>("Resort / Homestay");
  const [poolRequest, setPoolRequest] = useState<"Yes" | "No" | "Not required">("Not required");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = "Name is required";
    if (!whatsAppNumber.trim()) e.whatsAppNumber = "Number is required";
    else if (!isValidIndianWhatsapp(whatsAppNumber)) e.whatsAppNumber = "Enter a valid number";
    if (!checkInDate) e.checkInDate = "Select date";
    return e;
  }, [fullName, whatsAppNumber, checkInDate]);

  const hasErrors = Object.keys(errors).length > 0;

  function onBlur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ fullName: true, whatsAppNumber: true, checkInDate: true });
    if (hasErrors) return;

    const message = encodeURIComponent(
      `Hi ${siteConfig.company.name} 👋\n` +
      `I want to enquire about a trip.\n\n` +
      `• Name: ${fullName}\n` +
      `• WhatsApp: ${whatsAppNumber}\n` +
      `• Check-in: ${formatDateHuman(checkInDate)}\n` +
      `• Check-out: ${formatDateHuman(checkOutDate) || "Not specified"}\n` +
      `• Duration: ${duration}\n` +
      `• Type: ${travelType}\n` +
      `• Pax: ${adults} Adults, ${children || 0} Kids\n` +
      `• Property: ${propertyType}\n` +
      `• Pool: ${poolRequest}\n` +
      `• Notes: ${specialRequirements || "None"}`
    );
    
    // Using api.whatsapp.com with the number from basic-data.js
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsappNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  }

  const inputClasses = (key: string) => `
    w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm transition-all outline-none text-black font-medium
    ${touched[key] && errors[key] ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-[#22C55E] focus:bg-white'}
  `;

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20 pt-6">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 flex flex-col items-center">
          <Link href="/" className="mb-6 flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-colors uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="relative mb-6 h-20 w-20">
            <Image src="/logo-mistovers.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-center font-bold text-3xl text-black tracking-tight">Plan Your Mistover</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2.5rem] bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 border border-slate-100">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Full Name</label>
              <input className={inputClasses("fullName")} placeholder="Your Name" value={fullName} onChange={(e) => setFullName(e.target.value)} onBlur={() => onBlur("fullName")} />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">WhatsApp Number</label>
              <input className={inputClasses("whatsAppNumber")} placeholder="10 Digit Number" value={whatsAppNumber} onChange={(e) => setWhatsAppNumber(e.target.value)} onBlur={() => onBlur("whatsAppNumber")} inputMode="tel" />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Check-in</label>
              <input type="date" className={inputClasses("checkInDate")} value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} onBlur={() => onBlur("checkInDate")} />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Check-out</label>
              <input type="date" className={inputClasses("checkOutDate")} value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Adults (6y+)</label>
              <input className={inputClasses("adults")} placeholder="No. of Adults" value={adults} onChange={(e) => setAdults(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Children</label>
              <input className={inputClasses("children")} placeholder="No. of Kids" value={children} onChange={(e) => setChildren(e.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Travel Type</label>
              <select className={inputClasses("travelType")} value={travelType} onChange={(e) => setTravelType(e.target.value as TravelTypeOption)}>
                <option>Family</option>
                <option>Couple</option>
                <option>Bachelor</option>
                <option>Solo</option>
                <option>School/College trip</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Duration</label>
              <select className={inputClasses("duration")} value={duration} onChange={(e) => setDuration(e.target.value as DurationOption)}>
                <option>1 Night / 2 Days</option>
                <option>2 Nights / 3 Days</option>
                <option>3 Nights / 4 Days</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Stay Preference</label>
            <select className={inputClasses("propertyType")} value={propertyType} onChange={(e) => setPropertyType(e.target.value as PropertyTypeOption)}>
              <option>Resort / Homestay</option>
              <option>Villa / Hut</option>
              <option>Mud House</option>
              <option>Tent / Camping</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-black ml-1">Special Requirements</label>
            <textarea className={`${inputClasses("specialRequirements")} min-h-[100px] resize-none`} placeholder="Food preferences, campfire, specific viewpoints..." value={specialRequirements} onChange={(e) => setSpecialRequirements(e.target.value)} />
          </div>

          <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-black active:scale-[0.98] shadow-xl shadow-slate-200">
            <Send size={18} className="text-[#22C55E]" />
            Send Enquiry via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}