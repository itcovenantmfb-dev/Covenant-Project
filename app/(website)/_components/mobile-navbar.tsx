"use client";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  ChevronDown,
  ChevronUp,
  X,
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
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "../_data/nav-items";
import BrandLogo from "./Logo";

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

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleDropdown = (itemText: string) => {
    setExpandedDropdown(expandedDropdown === itemText ? null : itemText);
  };

  return (
    <>
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
      >
        <Image
          src="/icons/mob-nav.svg"
          alt="flash icon"
          width={30}
          height={30}
          className="inline mr-2"
        />
      </button>
      <Drawer open={open} onOpenChange={setOpen} direction="bottom">
        <DrawerContent className="bg-[#001F05] text-[#DBE4C4] px-6 pt-2 pb-6 flex flex-col max-h-[80vh]">
          <DrawerHeader className="flex flex-row justify-between items-center mb-4 p-0">
            <BrandLogo small />
            <DrawerClose asChild>
              <button className="text-white text-2xl ml-4">
                <X />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <p className="text-white text-xs font-medium mb-4 uppercase tracking-wider">
            Main Menu
          </p>
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.text === "Online Banking" ? (
                    <div className="mt-6">
                      <div className="w-full relative">
                        <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-lg z-40" />
                        <button
                          className="font-jakarta border border-[#0D4A06] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-3 px-6 font-medium text-base flex items-center rounded-full w-full justify-between relative z-20"
                          onClick={() => toggleDropdown(item.text)}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={item.icon || "/placeholder.svg"}
                              alt={item.text}
                              width={16}
                              height={16}
                              className="inline"
                            />
                            <span>{item.text}</span>
                          </div>
                          {expandedDropdown === item.text ? (
                            <ChevronUp className="h-[16px] w-[16px]" />
                          ) : (
                            <ChevronDown className="h-[16px] w-[16px]" />
                          )}
                        </button>
                      </div>
                      {expandedDropdown === item.text && item.subItems && (
                        <div className="mt-2 space-y-2 rounded-xl p-3">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.route}
                              className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-[#0D4A06]"
                              onClick={() => setOpen(false)}
                              {...(subItem.route.startsWith('https') && {
                                target: "_blank",
                                rel: "noopener noreferrer"
                              })}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#75FF8C] flex items-center justify-center mt-0.5">
                                {getIconComponent(subItem.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-white">
                                  {subItem.label}
                                </p>
                                <p className="text-xs text-[#DBE4C4] mt-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.isDropdown ? (
                    <div>
                      <button
                        className="flex items-center gap-3 py-3 px-4 rounded-xl  hover:bg-[#0D4A06] transition w-full text-left"
                        onClick={() => toggleDropdown(item.text)}
                      >
                        <Image
                          src={item.icon || "/placeholder.svg"}
                          alt={item.text}
                          width={18}
                          height={18}
                        />
                        <span className="font-medium text-base text-white">
                          {item.text}
                        </span>
                        {expandedDropdown === item.text ? (
                          <ChevronUp className="h-[16px] w-[16px] ml-auto text-white" />
                        ) : (
                          <ChevronDown className="h-[16px] w-[16px] ml-auto text-white" />
                        )}
                      </button>
                      {expandedDropdown === item.text && item.subItems && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.route}
                              className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-[#0D4A06]"
                              onClick={() => setOpen(false)}
                              {...(subItem.route.startsWith('https') && {
                                target: "_blank",
                                rel: "noopener noreferrer"
                              })}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#75FF8C] flex items-center justify-center mt-0.5">
                                {getIconComponent(subItem.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-white">
                                  {subItem.label}
                                </p>
                                <p className="text-xs text-[#DBE4C4] mt-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.text !== "Contact" ? (
                    <Link
                      href={item.route || ""}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl  hover:bg-[#0D4A06] transition"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.text}
                        width={18}
                        height={18}
                      />
                      <span className="font-medium text-base text-white">
                        {item.text}
                      </span>
                    </Link>
                  ) : null}
                </div>
              ))}
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
