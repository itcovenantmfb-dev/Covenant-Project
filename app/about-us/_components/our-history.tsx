import React from "react";
import Image from "next/image";
import SectionPill from "./section-pill";

const OurHistorySection = () => {
  return (
    <section data-aos="fade-up" className="bg-white py-16 sm:py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <SectionPill>Our History</SectionPill>
          <h2 className="mt-4 text-lg lg:text-[28px] font-bold text-start leading-snug">
            Discover Covenant MFB&apos;s rich history of growth, innovation, and
            community-focused banking since its founding.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-2 p-6 lg:p-10">
          <div className="flex-1 text-gray-600 space-y-4 leading-relaxed">
            <div className="flex items-start gap-2">
              <p>
                Covenant Microfinance Bank was incorporated on May 6, 2003, as a
                private limited liability company and commenced operations on
                March 15, 2004, under the name Covenant University Community
                Bank Limited (CUCB Ltd.). In response to regulatory reforms, it
                was converted into a microfinance bank in January 2008, in line
                with the Central Bank of Nigeria&apos;s directive.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <p>
                By December 2012, the bank had met the ₦100 million capital
                requirement and was licensed to operate as a State Microfinance
                Bank. Continuing its leadership in digital banking, Covenant MFB
                became one of the first MFBs in 2014 to generate 10-digit NUBAN
                account numbers for its customers. That same year, the bank was
                successfully integrated with Nigeria Central Switch (NCS) and
                gained access to the NIBSS Instant Payment (NIP) service,
                InterSwitch ATM Network, PayDirect, and QuickTeller platforms.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <p>
                With over two decades of service, Covenant Microfinance Bank has
                grown into one of Ogun State&apos;s leading microfinance
                institutions, combining innovation, trust, and financial
                empowerment to serve individuals and businesses alike.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/ABK-PIC.png"
              alt=" Picture of CMFB Main Entrance"
              width={400}
              height={600}
              className="h-full rounded-2xl object-cover shadow-lg mr-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistorySection;
