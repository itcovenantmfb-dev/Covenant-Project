import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./(website)/_components/navbar";
import Footer from "./(website)/_components/footer-section";
import CTA from "./(website)/_components/cta-section";

function NotFound() {
  return (
    <>
      <Navbar />
      <section
        data-aos="fade-up"
        className=" py-12 sm:py-16 lg:py-24 px-4 sm:px-6"
      >
        <h1 className="text-8xl font-bold text-[#1B1C31] text-center mb-10 sm:mb-20 mt-16 sm:mt-0">
          404
        </h1>

        <h2 className="text-4xl font-bold text-[#1B1C31] text-center ">
          Ops.. Page not found
        </h2>
        {/* Background Image */}
        <Image
          src="/worldmap (7).svg"
          alt="Background"
          fill
          className="object-cover object-center -z-10"
        />
        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="px-4 py-2 bg-[#1D9B5E] text-white rounded-xl hover:bg-green-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}

export default NotFound;
