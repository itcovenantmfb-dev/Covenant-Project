"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import MobileNavbar from "./mobile-navbar";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Building2,
  Briefcase,
  Users,
  Globe,
  Smartphone,
  DollarSign,
  CreditCard,
  Wallet,
  LayoutGrid,
  Image as ImageIcon,
  Video,
  Newspaper,
  Heart,
  HelpCircle,
  FileText,
  MessageCircleQuestion,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import BrandLogo from "./Logo";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "../_data/nav-items";

// Icon component mapping
const iconComponents: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Users,
  Globe,
  Smartphone,
  DollarSign,
  CreditCard,
  Wallet,
  LayoutGrid,
  ImageIcon,
  Video,
  Newspaper,
  Heart,
  HelpCircle,
  FileText,
  MessageCircleQuestion,
  GraduationCap,
};

// Get icon component from icon name
const getIconComponent = (iconName: string) => {
  const IconComponent = iconComponents[iconName] || Building2;
  return <IconComponent className="w-5 h-5 text-[#09244B]" />;
};

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={` sticky hidden lg:block top-0 w-full z-50 py-3 lg:py-5 transition-colors duration-300 ${
          isHomePage
            ? "bg-[url('/hero-banner.svg')] bg-cover bg-top"
            : "bg-[#001102]"
        }`}
      >
        <div className="w-full max-w-[1350px] mx-auto px-6 flex justify-between items-center">
          <BrandLogo />

          <div
            ref={dropdownRef}
            className="flex items-center justify-center gap-7.5 text-[#DBE4C4] text-[13px]"
          >
            {NAV_ITEMS.map((item) =>
              item.text === "Online Banking" ? (
                <div key={item.route} className="relative">
                  <div className="w-fit relative">
                    <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />
                    <button
                      onMouseEnter={() => setOpenDropdown(item.route)}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.route ? null : item.route
                        )
                      }
                      className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-2.5 px-4.5 h-fit font-medium text-[13px] flex items-center rounded-full relative z-20"
                    >
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.text}
                        width={14}
                        height={14}
                        className="inline mr-2"
                      />
                      {item.text}
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 ml-1 transition-transform duration-200",
                          openDropdown === item.route && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  {openDropdown === item.route && (
                    <div
                      data-aos="fade-up"
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl z-50 animate-in fade-in-0 zoom-in-98 duration-150"
                    >
                      <div
                        className={cn(
                          "px-6 py-6 w-auto relative z-10 bg-white rounded-2xl",
                          item.subItems && item.subItems.length === 1
                            ? "min-w-[320px] max-w-[400px]"
                            : "min-w-[250px] max-w-[250px]"
                        )}
                      >
                        <div
                          className={cn(
                            "grid gap-3",
                            item.subItems && item.subItems.length === 1
                              ? "grid-cols-1"
                              : "grid-cols-2 md:grid-cols-1"
                          )}
                        >
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.route}
                              href={subItem.route}
                              onClick={() => setOpenDropdown(null)}
                              className={cn(
                                "flex items-start gap-3 px-4 py-3 text-sm cursor-pointer hover:bg-[#F1F5EB] rounded-xl transition-all duration-200",
                                pathname === subItem.route && "bg-[#F1F5EB]"
                              )}
                              {...(subItem.route.startsWith("https") && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              })}
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#A2DE49] flex items-center justify-center mt-0.5">
                                {getIconComponent(subItem.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-[#043B20] mb-0.5">
                                  {subItem.label}
                                </p>
                                <p className="text-xs text-[#5B5B5B] leading-relaxed">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : item.isDropdown ? (
                <div key={item.route} className="relative">
                  <button
                    onMouseEnter={() => setOpenDropdown(item.route)}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.route ? null : item.route
                      )
                    }
                    className={cn(
                      "hover:bg-transparent focus:bg-transparent cursor-pointer text-[#DBE4C4] hover:text-white p-0 font-normal text-[13px] gap-1 relative px-3 py-2 rounded-md flex items-center",
                      item.subItems?.some(
                        (subItem) => pathname === subItem.route
                      ) && "text-white"
                    )}
                  >
                    {item.subItems?.some(
                      (subItem) => pathname === subItem.route
                    ) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#75FF8C]/20 to-transparent rounded-md" />
                    )}
                    <div className="relative z-10 flex items-center justify-center gap-1.5">
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.text}
                        width={14}
                        height={15}
                      />
                      <p>{item.text}</p>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          openDropdown === item.route && "rotate-180"
                        )}
                      />
                    </div>
                    {item.subItems?.some(
                      (subItem) => pathname === subItem.route
                    ) && (
                      <div className="absolute bottom-0 cursor-pointer left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full" />
                    )}
                  </button>

                  {openDropdown === item.route && (
                    <div
                      data-aos="fade-up"
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl z-50 animate-in fade-in-0 zoom-in-98 duration-150"
                    >
                      {/* Arrow pointing up
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"></div> */}

                      <div
                        className={cn(
                          "px-6 py-6 w-auto relative z-10 bg-white rounded-2xl",
                          item.text === "Products"
                            ? "min-w-[850px] max-w-[950px]"
                            : item.subItems && item.subItems.length === 1
                              ? "min-w-[320px] max-w-[400px]"
                              : "min-w-[550px] max-w-[650px]"
                        )}
                      >
                        {item.text === "Products" ? (
                          <div className="flex gap-6">
                            <div className="grid grid-cols-2 gap-3">
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.route}
                                  href={subItem.route}
                                  onClick={() => setOpenDropdown(null)}
                                  className={cn(
                                    "flex items-start gap-3 px-4 py-3 text-sm cursor-pointer hover:bg-[#F1F5EB] rounded-xl transition-all duration-200",
                                    pathname === subItem.route && "bg-[#F1F5EB]"
                                  )}
                                  {...(subItem.route.startsWith("https") && {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  })}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#A2DE49] flex items-center justify-center mt-0.5">
                                    {getIconComponent(subItem.icon)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-[#043B20] mb-0.5">
                                      {subItem.label}
                                    </p>
                                    <p className="text-xs text-[#5B5B5B] leading-relaxed">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="flex-shrink-0 w-[280px]">
                              <Image
                                src="/Front 1.svg"
                                alt="Grow with a Bank"
                                width={280}
                                height={300}
                                className="rounded-xl object-cover"
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={cn(
                              "grid gap-3",
                              item.subItems && item.subItems.length === 1
                                ? "grid-cols-1"
                                : "grid-cols-2 md:grid-cols-2"
                            )}
                          >
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.route}
                                href={subItem.route}
                                onClick={() => setOpenDropdown(null)}
                                className={cn(
                                  "flex items-start gap-3 px-4 py-3 text-sm cursor-pointer hover:bg-[#F1F5EB] rounded-xl transition-all duration-200",
                                  pathname === subItem.route && "bg-[#F1F5EB]"
                                )}
                                {...(subItem.route.startsWith("https") && {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                })}
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#A2DE49] flex items-center justify-center mt-0.5">
                                  {getIconComponent(subItem.icon)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-bold text-[#043B20] mb-0.5">
                                    {subItem.label}
                                  </p>
                                  <p className="text-xs text-[#5B5B5B] leading-relaxed">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.route}
                  href={item.route}
                  className={cn(
                    "flex items-center justify-center gap-1.5 transition-colors hover:text-white text-[#DBE4C4] text-[13px] relative px-3 py-2 rounded-md",
                    pathname === item.route && "text-white"
                  )}
                >
                  {pathname === item.route && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#75FF8C]/20 to-transparent rounded-md" />
                  )}
                  <div className="relative z-10 flex items-center justify-center gap-1.5">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.text}
                      width={13}
                      height={15}
                    />
                    <p>{item.text}</p>
                  </div>
                  {pathname === item.route && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* <div className="hidden lg:flex w-fit relative">
            <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />
          </div>
          <MobileNavbar /> */}
        </div>
        {/* Mobile Navbar */}
      </nav>
      <nav
        className={` fixed block lg:hidden top-0 w-full z-50 py-3 lg:py-5  duration-300`}
      >
        <div className="mx-10 py-2 px-6 rounded-full bg-[#001102] flex justify-between items-center">
          <BrandLogo small />
          <MobileNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
