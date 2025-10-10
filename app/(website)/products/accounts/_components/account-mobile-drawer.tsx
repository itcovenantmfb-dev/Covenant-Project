"use client";

import { useState } from "react";

import Image from "next/image";
import { Building2 } from "lucide-react";
import type { AccountData } from "@/app/_data/accounts-data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface AccountDetailDialogProps {
  account: AccountData | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "overview" | "features" | "benefits" | "target-clients";

export function AccountMobileDrawer({
  account,
  isOpen,
  onClose,
}: AccountDetailDialogProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  if (!account) return null;

  const tabs = [
    {
      id: "overview" as TabType,
      label: "Overview",
      icon: "/icons/avatar-img.svg",
    },
    {
      id: "features" as TabType,
      label: "Features",
      icon: "/icons/avatar-img.svg",
    },
    {
      id: "benefits" as TabType,
      label: "Benefits",
      icon: "/icons/avatar-img.svg",
    },
    {
      id: "target-clients" as TabType,
      label: "Target Clients",
      icon: "/icons/avatar-img.svg",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-4 ">
            <div className="flex  flex-col items-left gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">
                {account.overview.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-8 text-[#5B5B5B]">
              {account.overview.description}
            </p>
          </div>
        );
      case "features":
        return (
          <div className="space-y-4">
            <div className="flex  flex-col items-left justify-center gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">Features</h3>
            </div>
            <div className="space-y-3">
              {account.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "benefits":
        return (
          <div className="space-y-4">
            <div className="flex flex-col items-left gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">Benefits</h3>
            </div>
            <div className="space-y-3">
              {account.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B]">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "target-clients":
        return (
          <div className="space-y-4">
            <div className="flex flex-col items-left gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">
                Target Clients
              </h3>
            </div>
            <div className="space-y-3">
              {account.targetClients.map((client, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B]">
                    {client.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="block lg:hidden">
        <Drawer open={isOpen} onOpenChange={onClose}>
          <DrawerContent className="p-4  block lg:hidden bg-[#FEFEFE]">
            <DrawerHeader>
              <DrawerTitle className="text-[#1D9B5E] text-lg font-semibold text-center">
                • {account.name}
              </DrawerTitle>
            </DrawerHeader>

            <Accordion type="single" collapsible className="w-full">
              {tabs.map((tab) => (
                <AccordionItem className="border-none" key={tab.id} value={tab.id}>
                  <AccordionTrigger className="px-4" onClick={() => setActiveTab(tab.id)}>
                    <div className="flex gap-2 justify-center items-center">
                      {tab.icon && (
                        <Image src={tab.icon} width={10} height={10} alt="" />
                      )}
                      {tab.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent  className="px-4"  >{renderTabContent()}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
