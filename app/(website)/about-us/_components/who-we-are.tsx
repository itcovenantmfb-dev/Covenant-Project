"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SectionPill from "@/app/(website)/about-us/_components/section-pill";

const WhoWeAreSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* --- MAIN GRID CONTAINER --- */}
        {/* On mobile (default), it's a single column. On large screens (lg:), it's a 10-column grid. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-8">
          {/* --- 1. Who We Are (Spans 4 columns on desktop) --- */}
          <div className="lg:col-span-4">
            <SectionPill>Who We Are</SectionPill>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>
                Covenant Microfinance Bank (Covenant MFB) is a forward-thinking
                financial institution established in 2003, dedicated to
                providing accessible, innovative, and customer-centric banking
                solutions. We serve individuals, entrepreneurs, small
                businesses, and organizations with a strong focus on financial
                inclusion, digital empowerment, and community development.
              </p>
              <p>
                With a wide range of services including mobile and internet
                banking, USSD banking, loans and savings products, debit cards,
                and POS/ATM services, Covenant MFB bridges the gap between
                traditional banking and modern financial needs.
              </p>
              <p>
                Rooted in excellence and guided by integrity, we are committed
                to helping our customers grow, thrive, and achieve lasting
                financial success.
              </p>
            </div>
          </div>

          {/* --- 2. Our Vision (Spans 2 columns on desktop) --- */}
          <div className="lg:col-span-2">
            <SectionPill>Our Vision</SectionPill>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              To be the leading Microfinance Bank in the business of
              transforming ordinary individuals and micro-enterprises into
              wealth creators.
            </p>
          </div>

          {/* --- 3. Our Mission (Spans 2 columns on desktop) --- */}
          <div className="lg:col-span-2">
            <SectionPill>Our Mission</SectionPill>
            {/* Use a real list for semantic HTML and correct styling */}
            <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-600 sm:text-base">
              <li>To meet the developmental needs of the community</li>
              <li>To intellectually promote creativity</li>
              <li>To serve as an instrument of wealth creation.</li>
            </ul>
          </div>

          {/* --- 4. Core Values (Spans 2 columns on desktop) --- */}
          <div className="lg:col-span-2">
            <SectionPill>Core Values</SectionPill>
            {/* Using a list without bullets is more semantic here */}
            <ul className="mt-4 list-none space-y-1 text-sm text-gray-600 sm:text-base">
              <li>A – Accountability</li>
              <li>S – Spirituality</li>
              <li>T – Transparency</li>
              <li>R – Responsibility</li>
              <li>I – Integrity</li>
              <li>D – Diligence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
