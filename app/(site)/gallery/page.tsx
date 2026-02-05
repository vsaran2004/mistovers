"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { happyCustomers, topSpots } from "@/data/gallery-data"; // adjust path if needed

type CarouselApi = {
  scrollByCards: (dir: "left" | "right") => void;
};

function useCarousel(cardWidthPx = 320, gapPx = 16) {
  const ref = useRef<HTMLDivElement | null>(null);

  const api: CarouselApi = useMemo(
    () => ({
      scrollByCards: (dir) => {
        const el = ref.current;
        if (!el) return;
        const delta = (cardWidthPx + gapPx) * (dir === "left" ? -1 : 1);
        el.scrollBy({ left: delta, behavior: "smooth" });
      },
    }),
    [cardWidthPx, gapPx]
  );

  return { ref, api };
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B6675]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-[Poppins] text-2xl font-semibold leading-tight text-[#0B1220] sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 font-[Inter] text-sm leading-relaxed text-[#5B6675] sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>

      {right ? <div className="mt-2 md:mt-0">{right}</div> : null}
    </div>
  );
}

function ArrowButton({
  dir,
  onClick,
  label,
}: {
  dir: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E3EAE6] bg-white/70 text-[#0B1220] shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60"
    >
      <span className="text-xl leading-none">{dir === "left" ? "‹" : "›"}</span>
    </button>
  );
}

export default function GalleryPage() {
  const waLink =
    "https://wa.me/919999999999?text=" +
    encodeURIComponent(
      "Hi Kanthalloor Mistovers, I want trip details and gallery package info."
    );

  const customersCarousel = useCarousel(280, 14);
  // For spot carousels, we’ll use native scroll only (each has 3 images)

  return (
    <main className="min-h-screen bg-white">
      {/* Top Intro */}
      <section className="relative overflow-hidden border-b border-[#E3EAE6] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#E3EAE6] bg-white px-4 py-2 text-sm font-medium text-[#0B1220] shadow-sm transition hover:bg-[#F3F7F5] focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60"
          >
            <span>←</span>
            <span className="font-[Inter]">Back to Home</span>
          </Link>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B6675]">
              GALLERY
            </p>
            <h1 className="mt-3 font-[Poppins] text-3xl font-semibold leading-tight text-[#0B1220] sm:text-4xl">
              Moments from Kanthalloor
            </h1>
            <p className="mt-3 max-w-2xl font-[Inter] text-sm leading-relaxed text-[#5B6675] sm:text-base">
              Happy travelers, misty viewpoints, and unforgettable hill
              experiences — captured by our local team.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/packages"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0F3D2E] px-6 font-[Inter] text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60"
              >
                Explore Packages
              </Link>
              <Link
                href={waLink}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[#FF8A3D]/40 bg-[#FF8A3D]/10 px-6 font-[Inter] text-sm font-semibold text-[#0B1220] shadow-sm transition hover:bg-[#FF8A3D]/15 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60"
              >
                WhatsApp Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <SectionHeader
            eyebrow="HAPPY CUSTOMERS"
            title="Memories with Our Travelers"
            subtitle="Real moments from couples, families, and groups exploring Kanthalloor."
            right={
              <div className="hidden items-center gap-2 md:flex">
                <ArrowButton
                  dir="left"
                  label="Scroll happy customers left"
                  onClick={() => customersCarousel.api.scrollByCards("left")}
                />
                <ArrowButton
                  dir="right"
                  label="Scroll happy customers right"
                  onClick={() => customersCarousel.api.scrollByCards("right")}
                />
              </div>
            }
          />

          <div
            ref={customersCarousel.ref}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
          >
            {happyCustomers.map((img) => (
              <div
                key={img.id}
                className="relative min-w-[78%] snap-start overflow-hidden rounded-2xl border border-[#E3EAE6] bg-[#F3F7F5] shadow-sm sm:min-w-[48%] lg:min-w-[24%]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 24vw"
                    priority={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-[Inter] text-sm font-semibold text-white">
                      Kanthalloor Trip
                    </p>
                    <p className="font-[Inter] text-xs text-white/80">
                      Kanthalloor Mistovers
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 font-[Inter] text-xs text-[#5B6675] md:hidden">
            Swipe → to see more
          </p>
        </div>
      </section>

      {/* Top Spots */}
      <section className="bg-[#F3F7F5]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <SectionHeader
            eyebrow="TOP SPOTS"
            title="Top Spots to Visit in Kanthalloor"
            subtitle="Swipe through highlights from each place — viewpoints, farms, and misty trails."
            right={
              <Link
                href="/gallery"
                className="hidden h-11 items-center justify-center rounded-xl bg-[#FF8A3D] px-5 font-[Inter] text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 md:inline-flex"
              >
                You are here
              </Link>
            }
          />

          <div className="space-y-6">
            {topSpots.map((spot) => (
              <div
                key={spot.id}
                className="rounded-2xl border border-[#E3EAE6] bg-white p-4 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#E3EAE6] bg-[#F3F7F5] px-3 py-1 text-xs font-semibold text-[#0F3D2E]">
                    {spot.label}
                  </span>
                  <h3 className="font-[Poppins] text-lg font-semibold text-[#0B1220] sm:text-xl">
                    {spot.name}
                  </h3>
                </div>
                <p className="mt-2 font-[Inter] text-sm text-[#5B6675]">
                  {spot.caption}
                </p>

                {/* 3-image carousel */}
                <div className="relative mt-4">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

                  <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {spot.images.map((img) => (
                      <div
                        key={img.id}
                        className="relative min-w-[86%] snap-start overflow-hidden rounded-xl border border-[#E3EAE6] bg-[#F3F7F5] shadow-sm sm:min-w-[45%] lg:min-w-[32%]"
                      >
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 32vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-2 font-[Inter] text-xs text-[#5B6675] lg:hidden">
                    Swipe → to view {spot.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl border border-[#E3EAE6] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B6675]">
                  READY TO PLAN?
                </p>
                <h3 className="mt-2 font-[Poppins] text-xl font-semibold text-[#0B1220]">
                  Want a trip like this?
                </h3>
                <p className="mt-2 max-w-xl font-[Inter] text-sm text-[#5B6675]">
                  Message us your date, number of people, and pickup location —
                  we’ll suggest the best plan for Kanthalloor.
                </p>
              </div>

              <Link
                href={waLink}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0F3D2E] px-6 font-[Inter] text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60"
              >
                WhatsApp Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
