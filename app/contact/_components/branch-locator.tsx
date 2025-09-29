"use client";

import React from "react";
import { MapPin } from "lucide-react";
import SectionPill from "@/app/about-us/_components/section-pill";

// --- Data for the Branch Locations ---
const branchesData = [
  {
    name: "Abeokuta Branch",
    address:
      "No 25, Olusegun Obasanjo Way, Oke Imosan, Ibara, Abeokuta, Ogun State",
    phone: "+234 912 248 1176",
    phoneHref: "tel:+2349122481176",
  },
  {
    name: "Akure Branch",
    address:
      "No 19, Isolo Road, Along Osolo Aladadun Akintola, Akure, Ogun State",
    phone: "+234 904 455 0306",
    phoneHref: "tel:+2349044550306",
  },
  {
    name: "Ifo Branch",
    address: "Old Bank Bus Stop, Lagos Abeokuta Express Road, Ifo, Ogun State",
    phone: "+234 700 375 2972",
    phoneHref: "tel:+2347003752972",
  },
  {
    name: "Ota Branch",
    address: "Km 51, Lagos Abeokuta Expressway, Sango Ota, Ogun State",
    phone: "+234 915 738 4348",
    phoneHref: "tel:+2349157384348",
  },
];

// Reusable component for a single branch card
const BranchCard: React.FC<(typeof branchesData)[0]> = ({
  name,
  address,
  phone,
  phoneHref,
}) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300 p-3">
        <MapPin className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="mt-1 text-sm text-gray-600">{address}</p>
        <a
          href={phoneHref}
          className="mt-2 inline-block text-sm font-bold text-green-700 hover:text-green-800"
        >
          {phone}
        </a>
      </div>
    </div>
  </div>
);

// Main component for the locator section
const BranchLocator = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.735704072937!2d3.1678709!3d6.6796291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9ec46aba5e83%3A0x76b9ca8126fcbe02!2sCovenant%20Microfinance%20Bank!5e0!3m2!1sen!2sng!4v1758370830473!5m2!1sen!2sng";
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionPill>Other Branches</SectionPill>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find a Covenant Branch Near You
          </h2>
        </div>

        {/* Branch Grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          {branchesData.map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>

        {/* Embedded Map */}
        <div className="mt-16 overflow-hidden rounded-2xl ring-1 ring-gray-900/10">
          <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Covenant MFB Branch Locations"
              className="absolute inset-0"
            ></iframe>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Covenant+Microfinance+Bank+Ltd+Ota"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 z-10 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-md hover:bg-gray-50"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;
