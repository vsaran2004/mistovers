"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Star, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Send,
  ArrowRight,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

/**
 * ReviewsAndContact Component
 * * Features:
 * - Section 1: Customer Reviews with scroll-snap for mobile and grid for desktop.
 * - Section 2: Contact Us Container with split column layout for desktop.
 * - Responsive, accessible, and follows "Kanthalloor Mistovers" branding.
 */

interface Review {
  id: number;
  name: string;
  tripType: string;
  rating: number;
  text: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Arjun S.",
    tripType: "Couple",
    rating: 5,
    text: "Great local support and smooth trip planning. The view from the cottage they suggested was breathtaking.",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    tripType: "Family",
    rating: 5,
    text: "Jeep safari and stay arrangements were perfect. My kids loved the strawberry farm visit. Highly recommended!",
  },
  {
    id: 3,
    name: "Rahul & Friends",
    tripType: "Group",
    rating: 5,
    text: "Very helpful team and best pricing. They know the hidden spots in Kanthalloor that aren't on Google Maps.",
  },
];

export default function ReviewsAndContact() {
  return (
    <div className="w-full font-sans text-[#0B1220] selection:bg-[#FF8A3D]/30">
      
      {/* =====================================================
          SECTION 1: CUSTOMER REVIEWS
          ===================================================== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#FF8A3D] font-bold tracking-[0.2em] text-xs uppercase block mb-3">
              Reviews
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-semibold mb-4 text-[#0F3D2E]">
              What Travelers Say About Us
            </h2>
            <p className="text-[#5B6675] max-w-lg mx-auto text-sm md:text-base">
              Trusted by couples, families and group travelers visiting Kanthalloor.
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory scrollbar-hide">
              {REVIEWS_DATA.map((review) => (
                <div 
                  key={review.id}
                  className="min-w-[85%] md:min-w-full snap-center bg-white border border-[#E3EAE6] p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#FF8A3D" className="text-[#FF8A3D]" />
                      ))}
                    </div>
                    <p className="italic text-[#5B6675] mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#E3EAE6] pt-4">
                    <span className="font-semibold text-sm">{review.name}</span>
                    <span className="bg-[#F3F7F5] text-[#0F3D2E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {review.tripType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:text-[#FF8A3D] transition-colors group"
            >
              View More Reviews 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: CONTACT US CONTAINER
          ===================================================== */}
      <section className="bg-[#F3F7F5] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="bg-[#0F3D2E] text-white p-8 md:p-12 rounded-[24px] shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="font-poppins text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                  Plan Your Kanthalloor Trip Today
                </h2>
                <p className="text-emerald-50/80 mb-10 leading-relaxed">
                  Our local travel team is ready to help you with stays, packages, jeep safari, and customized trip planning.
                </p>

                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Phone size={20} className="text-[#FF8A3D]" />
                    </div>
                    <span className="text-sm md:text-base">+91 99999 99999</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Mail size={20} className="text-[#FF8A3D]" />
                    </div>
                    <span className="text-sm md:text-base">hello@mistovers.com</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Clock size={20} className="text-[#FF8A3D]" />
                    </div>
                    <span className="text-sm md:text-base">Mon - Sun: 8:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <MapPin size={20} className="text-[#FF8A3D]" />
                    </div>
                    <span className="text-sm md:text-base">Kanthalloor, Kerala (Near Munnar)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://wa.me/919999999999?text=Hi%20Kanthalloor%20Mistovers%2C%20I%20need%20trip%20details."
                  className="inline-flex items-center justify-center gap-2 bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e67a2e] transition-all shadow-lg active:scale-95 focus:ring-4 focus:ring-orange-200 outline-none"
                >
                  <MessageSquare size={20} />
                  WhatsApp Enquiry
                </Link>
                <Link 
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0F3D2E] transition-all active:scale-95 outline-none"
                >
                  <Phone size={20} />
                  Call Now
                </Link>
              </div>
            </div>
          </div>

          {/* Social Proof Tile */}
          <div 
            className="mt-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-[24px] shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <Instagram size={32} />
            <p className="font-medium text-lg mt-4">See the magic on our feed.</p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-2">
              @mistovers <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Global Style Helper for scroll-snap behavior */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shadow-soft {
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}