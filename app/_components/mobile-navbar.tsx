"use client";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NAV_ITEMS } from "@/app/_data/nav-items";

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
        <DrawerContent className="bg-[#fff]  text-[#DBE4C4] px-6 pt-2  flex flex-col max-h-[80vh]">
          <DrawerHeader className="flex flex-row justify-between items-center mb-8 p-0">
            <Image
              src="/icons/logo.svg"
              alt="company logo"
              width={56}
              height={53}
            />
            <DrawerClose asChild>
              <button className="text-[#043B20] text-2xl ml-4">
                <X />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-[#F1F5EB] transition w-full text-left"
                        onClick={() => toggleDropdown(item.text)}
                      >
                        <Image
                          src={item.icon || "/placeholder.svg"}
                          alt={item.text}
                          width={18}
                          height={18}
                        />
                        <span className="font-medium text-base text-[#043B20]">
                          {item.text}
                        </span>
                        {expandedDropdown === item.text ? (
                          <ChevronUp className="h-[16px] w-[16px] ml-auto text-[#043B20]" />
                        ) : (
                          <ChevronDown className="h-[16px] w-[16px] ml-auto text-[#043B20]" />
                        )}
                      </button>
                      {expandedDropdown === item.text && item.subItems && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.route}
                              className="block py-2 px-3 rounded-lg hover:bg-[#F1F5EB] transition"
                              onClick={() => setOpen(false)}
                            >
                              <p className="text-sm font-semibold text-[#043B20]">
                                {subItem.label}
                              </p>
                              <p className="text-xs text-[#5B5B5B] mt-1">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.route || ""}
                      className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-[#F1F5EB] transition"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.text}
                        width={18}
                        height={18}
                      />
                      <span className="font-medium text-base text-[#043B20]">
                        {item.text}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <DrawerFooter>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-3 px-6 font-medium text-base flex items-center rounded-full w-full justify-center"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/icons/flash_icon.svg"
                  alt="flash icon"
                  width={14}
                  height={16}
                  className="inline mr-2"
                />
                Contact Us
              </Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
