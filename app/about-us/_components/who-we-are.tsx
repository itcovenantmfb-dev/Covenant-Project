'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import SectionPill from './section-pill';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"; 

const WhoWeAreSection = () => {
  return (
    <section data-aos="fade-up" className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-16">

          <div className="lg:col-span-3"> 
            <div>
              <SectionPill>Who We Are</SectionPill>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Covenant Microfinance Bank (Covenant MFB) is a forward-thinking financial institution established in 2003, dedicated to providing accessible, innovative, and customer-centric banking solutions. We serve individuals, entrepreneurs, small businesses, and organizations with a strong focus on financial inclusion, digital empowerment, and community development.
                </p>
                <p>
                  With a wide range of services including mobile and internet banking, USSD banking, loans and savings products, debit cards, and POS/ATM services, Covenant MFB bridges the gap between traditional banking and modern financial needs.
                </p>
                <p>
                  Rooted in excellence and guided by integrity, we are committed to helping our customers grow, thrive, and achieve lasting financial success.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
              <div>
                <SectionPill>Our Vision</SectionPill>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To be the leading Microfinance Bank in the business of transforming ordinary individuals and micro-enterprises into wealth creators.
                </p>
              </div>
              <div>
                <SectionPill>Our Mission</SectionPill>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To meet the developmental needs of the community. To intellectually promote creativity. To serve as an instrument of wealth creation.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <SectionPill>Core Values</SectionPill>
              <div className="space-y-1 text-gray-600">
                <p>A – Accountability</p>
                <p>S – Spirituality</p>
                <p>T – Transparency</p>
                <p>R – Responsibility</p>
                <p>I – Integrity</p>
                <p>D – Diligence</p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2"> 
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative block h-full w-full cursor-pointer overflow-hidden rounded-2xl">
                  <Image
                    src="/Frame14.png" 
                    alt="A person with a backpack looking at a mountain range."
                    width={1563}
                    height={716}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/30 backdrop-blur-sm">
                      <Play className="h-10 w-10 fill-white text-white" />
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;




