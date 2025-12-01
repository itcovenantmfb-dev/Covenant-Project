import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    icon: "/icons/x-social-media-white-icon 1.png",
    link: "https://x.com/covenantmfb_",
    alt: "Twitter",
  },
  {
    icon: "/icons/youtube (2).svg",
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
        text: "KM 10 Canaanland Idiroko Road, Ota Ogun State.",
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
      className="max-w-[1200px] mx-auto flex flex-col justify-between items-start gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 ml-8 lg:ml-0">
          <Image
            src="/COVENANT-MICROFINANCE-BANK-LTD---AUDIT-COMPLAINCE-TRUSTMARK 1.svg"
            alt="Covenant MFB"
            width={150}
            height={150}
            className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px]"
          />
          <p className="text-[#F1F5EB] text-sm leading-relaxed">
            Transforming ordinary individuals <br />
            into creators of wealth since 2003
          </p>
          <div className=" hidden lg:flex gap-3 mt-2">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="rounded-[12px] h-11 w-11 flex items-center justify-center bg-white/4 backdrop-blur-md hover:bg-white/20 transition"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={21}
                  height={21}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Columns 2, 3, 4: Links */}
        {footerItems.map((item, index) => (
          <div key={index} className="text-left ml-8 lg:ml-0">
            <h4 className="text-[#B6E44B] font-semibold mb-4 text-lg">
              {item.title}
            </h4>
            <div className="flex flex-col gap-2 text-white/80 text-sm">
              {item.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  {"route" in link ? (
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <Link
                        href={link.route}
                        className="hover:text-white transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ) : (
                    <div className="flex items-start gap-3">
                      {"icon" in link && (
                        <Image
                          src={link.icon}
                          alt=""
                          width={18}
                          height={18}
                          className="flex-shrink-0 mt-1"
                        />
                      )}
                      <span>{link.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Column 5: App Downloads */}
        <div className="flex flex-col items-start gap-4 bg-white/4 backdrop-blur-md border border-white/8 rounded-2xl p-5 h-fit ml-8 lg:ml-0">
          <span className="text-white font-semibold">Download our App</span>
          <Link
            href="https://play.google.com/store/apps/details?id=com.covenantmfb.mobileapp&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="bg-white/8 border border-white/12 backdrop-blur-md text-white/70 rounded-[12px] px-4 py-2 font-semibold text-sm flex items-center gap-2 shadow-md h-12 w-full">
              <Image
                src="/google-play 1.svg"
                alt="Google Play"
                width={24}
                height={24}
              />
              <span className="text-left leading-tight text-xs font-normal">
                Get It On <br />
                <span className="font-semibold text-white text-base">
                  Google Play
                </span>
              </span>
            </Button>
          </Link>
          <Link
            href="https://apps.apple.com/ng/app/covenantmfb-edge-banking/id6504527106"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="bg-white/8 border border-white/12 backdrop-blur-md text-white/70 rounded-[12px] px-4 py-2 font-semibold text-sm flex items-center gap-2 shadow-md h-12 w-full">
              <Image
                src="/apple 1.svg"
                alt="App Store"
                width={24}
                height={24}
              />
              <span className="text-left leading-tight text-xs font-normal">
                Download on the <br />
                <span className="font-semibold text-white text-base">
                  App Store
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="  flex justify-center items-center lg:hidden   mx-auto">
        <div className="  flex  lg:hidden  gap-3 ">
          {socials.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className="rounded-[12px] h-11 w-11 flex items-center justify-center bg-white/4 backdrop-blur-md hover:bg-white/20 transition"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full text-center text-white/60 text-xs mb-2 lg:mb-8 pt-2 lg:pt-8">
        © 2025 Covenant Microfinance Bank | All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
