import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const socials = [
  {
    icon: "/icons/facebook 1.svg",
    link: "#",
    alt: "Facebook",
  },
  {
    icon: "/icons/linkedin 1.svg",
    link: "#",
    alt: "LinkedIn",
  },
  {
    icon: "/icons/instagram 1.svg",
    link: "#",
    alt: "Instagram",
  },
  {
    icon: "/icons/twitter-154 1.svg",
    link: "#",
    alt: "Twitter",
  },
];

const footerItems = [
  {
    title: "Quick Links",
    links: [
      {
        text: "About Us",
        route: "/about-us",
      },
      {
        text: "Accounts & Deposits",
        route: "/accounts",
      },
      {
        text: "Loans & Credits",
        route: "/loans",
      },
      {
        text: "Digital Banking",
        route: "/digital-banking",
      },
      {
        text: "Cards & Payments",
        route: "/cards-and-payments",
      },
      {
        text: "POS",
        route: "/pos",
      },
      {
        text: "Careers",
        route: "/careers",
      },
    ],
  },
  {
    title: "Short Links",
    links: [
      {
        text: "Privacy Policy",
        route: "/privacy-policy",
      },
      {
        text: "Whistle Blowing Policy",
        route: "/whistle-blowing-policy",
      },
      {
        text: "Anti Money Laundering Policy",
        route: "/anti-money-laundering-policy",
      },
      {
        text: "Terms and Conditions",
        route: "/terms-and-conditions",
      },
      {
        text: "Risk Management",
        route: "/risk-management-policy",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        text: "KM 10 Idiroko Road, Cannanland, City, Ota Ogun State.",
        icon: "/icons/Location on.svg",
      },
      {
        text: "+234 (0) 810 071 6957",
        icon: "/icons/Phone.svg",
      },
      {
        text: "info@covenantmfb.com",
        icon: "/icons/Email.svg",
      },
    ],
  },
];

const Footer = () => (
  <footer
    style={{
      backgroundImage: "url('/Footer.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="relative w-full pt-40 pb-10 px-8 lg:px-20 text-white overflow-hidden z-10"
  >
    <div className="max-w-[1200px] mx-auto flex flex-col justify-between items-start gap-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col items-start gap-6 max-w-xs">
          <Image
            src="/icons/Company logo.svg"
            alt="Covenant MFB"
            width={190}
            height={85}
          />
          <p className="text-[#F1F5EB]  text-sm lg:text-base">
            Transforming ordinary individuals into creators of wealth since 2003
          </p>
          <div className="flex gap-3 mt-2">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="rounded-[12px] h-11 w-11 flex items-center justify-center bg-white/4 backdrop-blur-md hover:bg-white/20 transition"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row gap-8 w-fit flex-1 justify-between">
          {footerItems.map((item, index) => (
            <div key={index}>
              <h4 className="text-[#B6E44B] font-semibold mb-3">
                {item.title}
              </h4>
              <div className="space-y-1 text-white/80 text-sm">
                {item.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    {"route" in link ? (
                      <li className="flex  items-start gap-1">
                        <span className="mb-1">•</span>
                        <Link href={link.route}>{link.text}</Link>
                      </li>
                    ) : (
                      <div className="flex items-center gap-2">
                        {"icon" in link && (
                          <Image
                            src={link.icon}
                            alt=""
                            width={24}
                            height={24}
                          />
                        )}
                        {link.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 bg-white/4 backdrop-blur-md border border-white/8 rounded-2xl px-5 py-6 h-fit">
          <span className="text-white font-semibold mb-1">
            Download our App
          </span>
          <Button className="bg-white/8 border border-white/12 backdrop-blur-md text-white/70 rounded-[12px] px-6 py-2 font-semibold text-sm flex items-center gap-2 shadow-md h-12 w-full">
            <Image
              src="/google-play 1.svg"
              alt="Google Play"
              width={24}
              height={24}
            />
            <span className="text-left leading-3 text-xs font-normal">
              Get It On <br />
              <span className="font-semibold text-white text-base">
                Google Play
              </span>
            </span>
          </Button>
          <Button className="bg-white/8 border border-white/12 backdrop-blur-md text-white/70 rounded-[12px] px-6 py-2 font-semibold text-sm flex items-center gap-2 shadow-md h-12 w-full">
            <Image src="/apple 1.svg" alt="App Store" width={24} height={24} />
            <span className="text-left leading-3 text-xs font-normal">
              Download on the <br />
              <span className="font-semibold text-white text-base">
                App Store
              </span>
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full text-center text-white/60 text-xs mt-12">
        © 2025 Covenant Microfinance Bank | All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
