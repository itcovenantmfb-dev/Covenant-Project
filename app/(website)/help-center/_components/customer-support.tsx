"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import AccountServices from "./account-service";
import InternetBanking from "./internet-banking";
import MagicCodeUssd from "./magic-code-ussd";
import MobileApp from "./mobile-app";
import OtherServices from "./other-service";

interface BaseNavItem {
  id: string;
  label: React.ReactNode;
}
interface TabItem extends BaseNavItem {
  type: "tab";
  component: React.ReactNode;
}
interface LinkItem extends BaseNavItem {
  type: "link";
  href: string;
}
type NavItem = TabItem | LinkItem;

const navItems: NavItem[] = [
  {
    type: "tab",
    id: "account-services",
    label: (
      <div className="text-center text-sm leading-tight">
        Account
        <br />
        Services
      </div>
    ),
    component: <AccountServices />,
  },
  {
    type: "tab",
    id: "loans",
    label: "Loans",
    component: <OtherServices displaySectionId="loans" />,
  },
  {
    type: "tab",
    id: "mobile-app",
    label: (
      <div className="text-center text-sm leading-tight">
        Mobile
        <br />
        App
      </div>
    ),
    component: <MobileApp />,
  },
  {
    type: "tab",
    id: "ussd",
    label: (
      <div className="text-center text-sm leading-tight">
        USSD Magic
        <br />
        Code
      </div>
    ),
    component: <MagicCodeUssd />,
  },
  {
    type: "tab",
    id: "internet-banking",
    label: (
      <div className="text-center text-sm leading-tight">
        Internet
        <br />
        Banking
      </div>
    ),
    component: <InternetBanking />,
  },
  {
    type: "tab",
    id: "card-services",
    label: (
      <div className="text-center text-sm leading-tight">
        Card
        <br />
        Services
      </div>
    ),
    component: <OtherServices displaySectionId="card-service" />,
  },
  {
    type: "link",
    id: "forms",
    label: "Forms",
    href: "/forms",
  },
];

const CustomerSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(navItems[0].id);

  const activeComponent = (
    navItems.find(
      (item) => item.id === activeTab && item.type === "tab"
    ) as TabItem
  )?.component;

  return (
    <div>
      <div className="sticky px-2 py-6">
        <div
          className="
    w-fit md:w-full
    max-w-4xl
    bg-[#F0F5EB] rounded-xl p-6 shadow-md
    flex flex-wrap md:flex-nowrap
    justify-center md:justify-between
    gap-3
  "
        >
          {navItems.map((item) => {
            const baseClasses =
              "px-4 py-2 rounded-xl transition-all duration-300 ease-in-out flex-shrink-0 font-semibold";

            if (item.type === "link") {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${baseClasses} bg-transparent text-slate-700 hover:bg-white/50`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${baseClasses} ${
                  activeTab === item.id
                    ? "bg-white text-slate-800 shadow"
                    : "bg-transparent text-slate-700 hover:bg-white/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">{activeComponent}</div>
    </div>
  );
};

export default CustomerSupport;
