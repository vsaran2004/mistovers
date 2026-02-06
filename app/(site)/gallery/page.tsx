"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { happyCustomers, topSpots } from "@/data/gallery-data";

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
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-sky-500">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 font-sans text-base leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className=" md:mt-0">{right}</div>}
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
      onClick={onClick}
      aria-label={label}
      className="group flex h-11 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:bg-slate-900 hover:text-white"
    >
      <span className="text-2xl transition-transform group-hover:scale-110">
        {dir === "left" ? "←" : "→"}
      </span>
    </button>
  );
}

export default function GalleryPage() {
  const waLink =
    "https://wa.me/918547331180?text=" +
    encodeURIComponent(
      "Hi Mistover Kanthalloor, I'm interested in your packages!"
    );

  const customersCarousel = useCarousel(400, 20);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-sky-100">
      {/* 1. MISTY HERO HEADER */}
      <section className="relative overflow-hidden bg-slate-950 py-26 text-white">
        <div className="absolute -top-24 -left-24 h-90 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-24 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-sky-400/80"
            >
              Gallery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl"
            >
              Mistover <br /> <span className="text-sky-400">Gallery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-slate-400"
            >
              See Kanthalloor moments—from misty mornings to beautiful viewpoints
              and local orchards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. HAPPY CUSTOMERS */}
      <section className="relative -mt-14 px-2 pb-11">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 md:p-12">
            <SectionHeader
              eyebrow="Guest Stories"
              title="Happy Travelers"
              subtitle="Real smiles from people who travelled with us."
              right={
                <div className="hidden gap-2 md:flex">
                  <ArrowButton
                    dir="left"
                    label="Previous"
                    onClick={() => customersCarousel.api.scrollByCards("left")}
                  />
                  <ArrowButton
                    dir="right"
                    label="Next"
                    onClick={() => customersCarousel.api.scrollByCards("right")}
                  />
                </div>
              }
            />

            <div
              ref={customersCarousel.ref}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 no-scrollbar"
            >
              {happyCustomers.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative min-w-[88%] snap-start overflow-hidden rounded-2xl sm:min-w-[45%] lg:min-w-[calc(33.33%-1rem)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                      <p className="font-display font-medium text-white">
                        {img.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-center gap-3 md:hidden">
              <ArrowButton
                dir="left"
                label="Previous"
                onClick={() => customersCarousel.api.scrollByCards("left")}
              />
              <ArrowButton
                dir="right"
                label="Next"
                onClick={() => customersCarousel.api.scrollByCards("right")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOP SPOTS */}
      <section className="bg-slate-150 px-4 py-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Explore Kanthalloor"
            title="Top Spots"
            subtitle="Best places to see from kanthalloor and marayoor ."
          />

          <div className="grid gap-8 md:gap-11 lg:grid-cols-3">
            {topSpots.map((spot, idx) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl transition-all hover:shadow-2xl hover:shadow-sky-100"
              >
                <div className="mb-4 flex items-center justify-between px-2">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {spot.name}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                    ↗
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x pb-1">
                  {spot.images.map((img) => (
                    <div
                      key={img.id}
                      className="relative aspect-[16/12] min-w-[94%] snap-center overflow-hidden rounded-xl sm:min-w-[85%]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-4 px-2 text-sm text-slate-500 italic">
                  “{spot.caption}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-center sm:p-14 md:p-20"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
          <div className="absolute top-0 left-1/2 h-64 w-full -translate-x-1/2 bg-sky-500/20 blur-[100px]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready for your Kanthalloor trip?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Share your dates and group details. We will plan everything for
              you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/packages"
                className="w-full rounded-full border border-white/20 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
              >
                Browse Packages
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}