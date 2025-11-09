import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube } from "lucide-react";

const socials = [
  {
    icon: "/icons/facebook 1.svg",
    link: "https://www.facebook.com/profile.php?id=100065216031591",
    alt: "Facebook",
  },
  {
    icon: "/icons/linkedin 1.svg",
    link: "https://www.linkedin.com/company/covenant-microfinance-bank-ltd",
    alt: "LinkedIn",
  },
  // {
  //   icon: "/icons/instagram 1.svg",
  //   link: "",
  //   alt: "Instagram",
  // },
  {
    icon: "/icons/twitter-154 1.svg",
    link: "https://x.com/covenantmfb_",
    alt: "Twitter",
  },
  {
    icon: "/icons/youtube.svg",
    link: "https://www.youtube.com/@CovenantMFB ",
    alt: "Youtube",
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
      {
        text: "Downloadable Forms",
        route: "/forms",
      },
      {
        text: "Gallery",
        route: "/gallery",
      },

      {
        text: "Our Team ",
        route: "/our-team",
      },
      {
        text: "Help Center ",
        route: "/help-center",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        text: "KM 10 Cannanland Idiroko Road, Ota Ogun State.",
        icon: "/icons/Location on.svg",
      },
      {
        text: "+234 (0) 810 071 6957",
        icon: "/icons/Phone.svg",
      },
      {
        text: "office@covenantmfb.com.ng",
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
    className="relative w-full pt-40 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-20 text-white overflow-hidden z-10"
  >
    <div
      data-aos="fade-up"
      className="max-w-[1200px] mx-auto flex flex-col justify-between items-start gap-6 sm:gap-4"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 max-w-full sm:max-w-xs text-center sm:text-left">
          <Image
            src="/COVENANT-MICROFINANCE-BANK-LTD---AUDIT-COMPLAINCE-TRUSTMARK 1.svg"
            alt="Covenant MFB"
            width={150}
            height={150}
            className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] lg:w-[190px] lg:h-[190px]"
          />
          <p className="text-[#F1F5EB] text-sm lg:text-base leading-relaxed">
            Transforming ordinary individuals <br />
            into creators of wealth since 2003
          </p>
          <div className="flex gap-3 mt-2 justify-center sm:justify-start">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="rounded-[12px] h-11 w-11 flex items-center justify-center bg-white/4 backdrop-blur-md hover:bg-white/20 transition"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={22}
                  height={22}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full lg:flex-1">
          {footerItems.map((item, index) => (
            <div key={index} className="text-center sm:text-left">
              <h4 className="text-[#B6E44B] font-semibold mb-3 text-base sm:text-lg">
                {item.title}
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                {item.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    {"route" in link ? (
                      <li className="flex items-start gap-1 justify-center sm:justify-start">
                        <span className="mb-1">•</span>
                        <Link
                          href={link.route}
                          className="hover:text-white transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ) : (
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        {"icon" in link && (
                          <Image
                            src={link.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                        )}
                        <span className="text-xs sm:text-sm leading-relaxed">
                          {link.text}
                        </span>
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
