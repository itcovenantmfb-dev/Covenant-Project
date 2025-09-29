"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./mobile-navbar";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/_data/nav-items";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import BrandLogo from "./Logo";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <nav
        className={` sticky hidden lg:block top-0 w-full z-50 py-3 lg:py-5   transition-colors duration-300 ${
          isHomePage
            ? "bg-[url('/hero-banner.svg')] bg-cover bg-top"
            : "bg-[#001102]"
        }`}
      >
        <div className="w-full max-w-[1250px] mx-auto px-6 flex justify-between items-center">
          <BrandLogo />

          <NavigationMenu viewport={true}>
            <NavigationMenuList className="flex items-center justify-center gap-7.5 border-none text-[#DBE4C4] text-[13px]">
              {NAV_ITEMS.map((item) =>
                item.isDropdown ? (
                  <NavigationMenuItem key={item.route} className="border-none">
                    <NavigationMenuTrigger className=" hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-[#DBE4C4] hover:text-white p-0  font-normal text-[13px] gap-1">
                      <div className="flex items-center justify-center gap-1.5">
                        <Image
                          src={item.icon || "/placeholder.svg"}
                          alt={item.text}
                          width={14}
                          height={15}
                        />
                        <p>{item.text}</p>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className=" border-none mt-6 bg-white">
                      <div className="px-6 py-6  w-[800px]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {item.subItems?.map((subItem) => (
                            <div key={subItem.route}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.route}
                                  className={cn(
                                    "block px-3 py-2 text-sm hover:text-[#043B20] hover:bg-[#F1F5EB] rounded-md transition-colors font-medium",
                                    pathname === subItem.route &&
                                      "bg-[#F1F5EB] text-[#043B20]"
                                  )}
                                >
                                  <p className="text-md font-bold text-[#043B20]">
                                    {subItem.label}
                                  </p>
                                  <p className="text-sm text-[#5B5B5B]">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/products/services"
                              className="inline-flex items-center text-sm text-[#043B20] hover:text-[#00000] font-medium"
                            >
                              <Button className="bg-[#A2DE49]">
                                View All Products →
                              </Button>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.route}>
                    <Link
                      href={item.route}
                      className="flex items-center justify-center gap-1.5 transition-colors hover:text-white text-[#DBE4C4] text-[13px]"
                    >
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.text}
                        width={13}
                        height={15}
                      />
                      <p>{item.text}</p>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex w-fit relative">
            <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />
            <Link
              href="/contact-us"
              className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-2.5 px-4.5 h-fit font-medium text-[13px] flex items-center rounded-full relative z-20"
            >
              <Image
                src="/icons/contact_icon.svg"
                alt="flash icon"
                width={10}
                height={12}
                className="inline mr-2"
              />
              Contact Us
            </Link>
          </div>
          <MobileNavbar />
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
