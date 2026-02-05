"use client";

import React, { useMemo, useState } from "react";

type DurationOption =
  | "1 Night / 2 Days"
  | "2 Nights / 3 Days"
  | "3 Nights / 4 Days"
  | "Custom";

type TravelTypeOption =
  | "Bachelor"
  | "Family"
  | "Couple"
  | "Solo"
  | "School trip"
  | "College trip";

type PropertyTypeOption =
  | "Mud House"
  | "Villa / Hut"
  | "Resort / Homestay"
  | "A Frame"
  | "Tent / Camping";

function isValidIndianWhatsapp(num: string) {
  // Accepts: 10-digit, or +91xxxxxxxxxx, or 91xxxxxxxxxx (spaces/dashes ok)
  const cleaned = num.replace(/[^\d+]/g, "");
  if (/^\+91\d{10}$/.test(cleaned)) return true;
  if (/^91\d{10}$/.test(cleaned)) return true;
  if (/^\d{10}$/.test(cleaned)) return true;
  return false;
}

function normalizeToWaMeNumber(num: string) {
  // wa.me needs country code without "+" ideally. We'll output: 91xxxxxxxxxx
  const digits = num.replace(/\D/g, ""); // only digits
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return digits;
  // fallback: return digits as-is
  return digits;
}

function formatDateHuman(iso: string) {
  if (!iso) return "";
  // ISO yyyy-mm-dd -> dd Mon yyyy
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function TripEnquiryForm() {
  const [duration, setDuration] = useState<DurationOption>("1 Night / 2 Days");
  const [fullName, setFullName] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [travelType, setTravelType] = useState<TravelTypeOption>("Family");
  const [adults, setAdults] = useState(""); // exact or range
  const [children, setChildren] = useState(""); // exact or range
  const [propertyType, setPropertyType] =
    useState<PropertyTypeOption>("Resort / Homestay");
  const [poolRequest, setPoolRequest] = useState<"Yes" | "No" | "Not required">(
    "Not required"
  );
  const [specialRequirements, setSpecialRequirements] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const e: Record<string, string> = {};

    if (!fullName.trim()) e.fullName = "Please enter your full name.";
    if (!whatsAppNumber.trim())
      e.whatsAppNumber = "Please enter your WhatsApp number.";
    else if (!isValidIndianWhatsapp(whatsAppNumber))
      e.whatsAppNumber = "Enter a valid number (10 digits or +91XXXXXXXXXX).";

    if (!checkInDate) e.checkInDate = "Please select a check-in date.";

    // Adults/Children: allow blank, but recommend at least adults
    const rangeOk = (v: string) =>
      /^\d+$/.test(v.trim()) || /^\d+\s*-\s*\d+$/.test(v.trim());

    if (adults.trim() && !rangeOk(adults))
      e.adults = "Enter exact (e.g., 8) or range (e.g., 3-4).";
    if (children.trim() && !rangeOk(children))
      e.children = "Enter exact (e.g., 2) or range (e.g., 1-2).";

    // Optional: If both empty, nudge user
    if (!adults.trim() && !children.trim())
      e.pax = "Please enter adults or children count (exact or range).";

    return e;
  }, [fullName, whatsAppNumber, checkInDate, adults, children]);

  const hasErrors = Object.keys(errors).length > 0;

  function onBlur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function buildMessage() {
    const lines: string[] = [];
    lines.push("Hi Kanthalloor Mistovers 👋");
    lines.push("I want to enquire about a trip package.");
    lines.push("");
    lines.push(`• Duration: ${duration}`);
    lines.push(`• Full Name: ${fullName.trim()}`);
    lines.push(`• WhatsApp: ${whatsAppNumber.trim()}`);
    lines.push(`• Check-in Date: ${formatDateHuman(checkInDate)}`);
    lines.push(`• Travel Type: ${travelType}`);
    lines.push(`• Adults (6y+): ${adults.trim() || "-"}`);
    lines.push(`• Children: ${children.trim() || "-"}`);
    lines.push(`• Property Type Preference: ${propertyType}`);
    lines.push(`• Pool Request: ${poolRequest}`);
    lines.push(
      `• Special Requirements: ${specialRequirements.trim() || "-"}`
    );
    lines.push("");
    lines.push("Please share best available options & pricing. धन्यवाद 🙏");
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      duration: true,
      fullName: true,
      whatsAppNumber: true,
      checkInDate: true,
      travelType: true,
      adults: true,
      children: true,
      propertyType: true,
      poolRequest: true,
      specialRequirements: true,
      pax: true,
    });

    if (hasErrors) return;

    const waTo = "919999999999"; // ✅ change to your business WhatsApp number
    const message = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${waTo}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border border-[#E3EAE6] bg-white px-4 py-3 font-[Inter] text-sm text-[#0B1220] shadow-sm outline-none transition focus:border-[#FF8A3D]/60 focus:ring-2 focus:ring-[#FF8A3D]/25";

  const labelBase =
    "mb-2 block font-[Inter] text-sm font-medium text-[#0B1220]";

  const helpBase = "mt-1 font-[Inter] text-xs text-[#5B6675]";

  const errorText = (key: string) =>
    touched[key] && errors[key] ? (
      <p className="mt-1 font-[Inter] text-xs text-red-600">{errors[key]}</p>
    ) : null;

  return (
    <section className="bg-[#F3F7F5] py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-[#E3EAE6] bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B6675]">
              Trip Enquiry
            </p>
            <h2 className="mt-2 font-[Poppins] text-2xl font-semibold text-[#0B1220]">
              Customize Your Kanthalloor Trip
            </h2>
            <p className="mt-2 font-[Inter] text-sm text-[#5B6675]">
              1) Above 6 years is considered as adult. <br />
              2) Enter exact number (e.g. 8, 12) or range (e.g. 3-4).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Duration */}
            <div>
              <label className={labelBase}>Select Duration</label>
              <select
                className={inputBase}
                value={duration}
                onChange={(e) => setDuration(e.target.value as DurationOption)}
                onBlur={() => onBlur("duration")}
              >
                <option>1 Night / 2 Days</option>
                <option>2 Nights / 3 Days</option>
                <option>3 Nights / 4 Days</option>
                <option>Custom</option>
              </select>
            </div>

            {/* Name + WhatsApp */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelBase}>Full Name</label>
                <input
                  className={inputBase}
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => onBlur("fullName")}
                />
                {errorText("fullName")}
              </div>

              <div>
                <label className={labelBase}>WhatsApp Number</label>
                <input
                  className={inputBase}
                  placeholder="10-digit or +91XXXXXXXXXX"
                  value={whatsAppNumber}
                  onChange={(e) => setWhatsAppNumber(e.target.value)}
                  onBlur={() => onBlur("whatsAppNumber")}
                  inputMode="tel"
                />
                {errorText("whatsAppNumber")}
              </div>
            </div>

            {/* Check-in Date + Travel Type */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelBase}>Check-in Date</label>
                <input
                  type="date"
                  className={inputBase}
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  onBlur={() => onBlur("checkInDate")}
                />
                {errorText("checkInDate")}
              </div>

              <div>
                <label className={labelBase}>Travel Type</label>
                <select
                  className={inputBase}
                  value={travelType}
                  onChange={(e) =>
                    setTravelType(e.target.value as TravelTypeOption)
                  }
                  onBlur={() => onBlur("travelType")}
                >
                  <option>Bachelor</option>
                  <option>Family</option>
                  <option>Couple</option>
                  <option>Solo</option>
                  <option>School trip</option>
                  <option>College trip</option>
                </select>
              </div>
            </div>

            {/* Adults + Children */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelBase}>Adults (6y+)</label>
                <input
                  className={inputBase}
                  placeholder="e.g. 8 or 3-4"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  onBlur={() => onBlur("adults")}
                  inputMode="numeric"
                />
                <p className={helpBase}>
                  Enter exact number (8) or range (3-4)
                </p>
                {errorText("adults")}
              </div>

              <div>
                <label className={labelBase}>Children</label>
                <input
                  className={inputBase}
                  placeholder="e.g. 2 or 1-2"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  onBlur={() => onBlur("children")}
                  inputMode="numeric"
                />
                <p className={helpBase}>
                  Enter exact number (2) or range (1-2)
                </p>
                {errorText("children")}
              </div>
            </div>

            {touched.pax && errors.pax ? (
              <p className="font-[Inter] text-xs text-red-600">{errors.pax}</p>
            ) : null}

            {/* Property Type */}
            <div>
              <label className={labelBase}>Property Type</label>
              <select
                className={inputBase}
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value as PropertyTypeOption)
                }
                onBlur={() => onBlur("propertyType")}
              >
                <option>Mud House</option>
                <option>Villa / Hut</option>
                <option>Resort / Homestay</option>
                <option>A Frame</option>
                <option>Tent / Camping</option>
              </select>
              <p className={helpBase}>Any preference</p>
            </div>

            {/* Pool request */}
            <div>
              <label className={labelBase}>Request Pool?</label>
              <div className="grid gap-3 sm:grid-cols-3">
                {(["Yes", "No", "Not required"] as const).map((opt) => (
                  <label
                    key={opt}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 font-[Inter] text-sm shadow-sm transition focus-within:ring-2 focus-within:ring-[#FF8A3D]/30 ${
                      poolRequest === opt
                        ? "border-[#0F3D2E] bg-[#0F3D2E]/5"
                        : "border-[#E3EAE6] bg-white hover:bg-[#F3F7F5]"
                    }`}
                  >
                    <span className="text-[#0B1220]">{opt}</span>
                    <input
                      type="radio"
                      name="poolRequest"
                      value={opt}
                      checked={poolRequest === opt}
                      onChange={() => setPoolRequest(opt)}
                      className="h-4 w-4 accent-[#0F3D2E]"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Special requirements */}
            <div>
              <label className={labelBase}>Special Requirements</label>
              <textarea
                className={`${inputBase} min-h-[110px] resize-none`}
                placeholder="Example: veg food, campfire, pickup location, early check-in, birthday setup..."
                value={specialRequirements}
                onChange={(e) => setSpecialRequirements(e.target.value)}
                onBlur={() => onBlur("specialRequirements")}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#0F3D2E] px-6 font-[Inter] text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/60 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={hasErrors && Object.keys(touched).length > 0}
              >
                Send Enquiry on WhatsApp
              </button>

              <p className="mt-3 font-[Inter] text-xs text-[#5B6675]">
                By submitting, your enquiry will open in WhatsApp with details
                filled in.
              </p>

              {/* Debug helper (optional) */}
              {/* <pre className="mt-3 text-xs">{buildMessage()}</pre> */}
            </div>
          </form>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                         
        <p className="mt-4 text-center font-[Inter] text-xs text-[#5B6675]">
          Tip: Use +91 format for WhatsApp number if possible.
        </p>
      </div>
    </section>
  );
}