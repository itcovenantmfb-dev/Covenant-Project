"use client";

import React from "react";
import { MapPin } from "lucide-react";
import SectionPill from "../../about-us/_components/section-pill";

// --- Data for the Branch Locations ---
const branchesData = [
  {
    name: "Abeokuta Branch",
    address:
      "No 25, Olusegun Osoba Way, Oke Ilewo, Ibara, Abeokuta, Ogun State",
    phone: "+2347070930297",
    phoneHref: "tel:+2347070930297",
  },
  {
    name: "Akute Branch",
    address:
      "No 19, Ijoko Road, Along Ojodu Abiodun Arinfanle, Akute, Ogun State",
    phone: "+2347070326181",
    phoneHref: "tel:+2347070326181",
  },
  {
    name: "Ifo Branch",
    address: "Old Bank Bus Stop, Lagos Abeokuta Express Road, Ifo, Ogun State",
    phone: "+2347033752972",
    phoneHref: "tel:+2347033752972",
  },
  {
    name: "Sango Branch",
    address:
      "Km 151, Lagos Abeokuta Expressway,Joju Bus stop, Sango Ota, Ogun State",
    phone: "+2347079107417",
    phoneHref: "tel:+2347079107417",
  },
  {
    name: "Canaanland Branch",
    address:
      "Covenant Microfinance Bank Ltd KM 10, Idiroko Road, Canaanland Ota.",
    phone: "+2347068638427",
    phoneHref: "tel:+2347068638427",
  },
];

// Reusable component for a single branch card
const BranchCard: React.FC<(typeof branchesData)[0]> = ({
  name,
  address,
  phone,
  phoneHref,
}) => (
  <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-900/5">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300 p-2 sm:p-3">
        <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm sm:text-base font-semibold text-gray-800">
          {name}
        </p>
        <p className="mt-1 text-sm sm:text-lg font-bold text-[#1D9B5E]">
          {address}
        </p>

        <a
          href={phoneHref}
          className="mt-2 inline-block text-xs sm:text-sm font-bold text-[#043B20] hover:text-green-800"
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
    <section className="bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionPill>Other Branches</SectionPill>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900">
            Find a Covenant Branch Near You
          </h2>
        </div>

        {/* Branch Grid */}
        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 grid max-w-lg grid-cols-1 gap-6 sm:gap-8 sm:max-w-none sm:grid-cols-2">
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
