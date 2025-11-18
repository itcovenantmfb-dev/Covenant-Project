"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

      if (!scriptUrl) {
        toast.error("Newsletter service is not configured");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: "Newsletter Subscription",
        }),
      });

      // With no-cors mode, we can't read the response, but if no error is thrown, it's successful
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="relative w-full flex justify-center items-center z-30 mt-12"
      style={{ marginBottom: "-120px" }}
    >
      <div className="w-full max-w-6xl bg-gradient-to-b p-4 mx-5  lg:mx-0 from-[#1D9B5E] to-[#074426] rounded-[12px] lg:rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-6 py-12 lg:py-20 px-4 lg:px-16 shadow-xl">
        <div className="flex-1 text-left max-w-[471px]">
          <h2 className="text-white font-semibold text-3xl lg:text-[40px] mb-4">
            Bank News in Your Inbox
          </h2>
          <p className="text-[#EBF1FF] text-justify tracking-widest text-base mb-6 max-w-lg">
            Be the first to hear about new services, updates, and opportunities
            from Covenant MFB. Subscribe and stay in the loop.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col items-center justify-end gap-4 w-full max-w-xl"
        >
          <div
            className="flex items-center bg-white rounded-[20px] pl-6 pr-2 py-3 md:py-2 w-full
  focus-within:border-2 focus-within:border-[#001102] focus-within:ring-2 focus-within:ring-[#1D9B5E]/40 transition-all duration-200"
          >
            <Image
              src="/icons/email 1.svg"
              alt="email"
              width={24}
              height={24}
              className="mr-2"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              className="bg-transparent outline-none text-[#8A8A8A] text-base w-full disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#A2DE49] text-[#001102] px-8 py-3 h-fit rounded-[20px] font-normal text-lg lg:text-xl hidden md:flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8BC93A]"
            >
              <Image
                src="/icons/send 1.svg"
                alt="Subscribe"
                width={20}
                height={20}
              />
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#A2DE49] text-[#001102] px-8 py-3 h-fit rounded-[20px] font-normal text-lg lg:text-xl flex items-center gap-2 w-full md:hidden disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8BC93A]"
          >
            <Image
              src="/icons/send 1.svg"
              alt="Subscribe"
              width={20}
              height={20}
            />
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
