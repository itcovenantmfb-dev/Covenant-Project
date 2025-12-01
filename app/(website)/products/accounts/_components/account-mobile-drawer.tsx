"use client";

import { useState } from "react";

import Image from "next/image";
import { Building2 } from "lucide-react";

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
import type { AccountData } from "@/app/(website)/_data/accounts-data";

interface AccountDetailDialogProps {
  account: AccountData | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType =
  | "overview"
  | "benefits"
  | "features"
  | "requirements"
  | "target-clients";

export function AccountMobileDrawer({
  account,
  isOpen,
  onClose,
}: AccountDetailDialogProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  if (!account) return null;

  const hasBenefits = account.benefits && account.benefits.length > 0;
  const hasFeatures = account.features && account.features.length > 0;
  const hasTargetClients =
    account.targetClients && account.targetClients.length > 0;

  const secondTabLabel = hasBenefits ? "Benefits" : "Features";
  const secondTabId = hasBenefits ? "benefits" : "features";

  // Build tabs dynamically
  const tabs = [
    {
      id: "overview" as TabType,
      label: "Overview",
      icon: "/icons/avatar-img.svg",
    },
    {
      id: secondTabId as TabType,
      label: secondTabLabel,
      icon: "/icons/avatar-img.svg",
    },
    {
      id: "requirements" as TabType,
      label: "Requirements",
      icon: "/icons/avatar-img.svg",
    },
  ];

  if (hasTargetClients) {
    tabs.push({
      id: "target-clients" as TabType,
      label: "Target Clients",
      icon: "/icons/avatar-img.svg",
    });
  }

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
      case "benefits":
        return (
          <div className="space-y-4">
            <div className="flex  flex-col items-left justify-center gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">Benefits</h3>
            </div>
            <div className="space-y-3">
              {account.benefits?.map((benefits, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B]">
                    {benefits.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "features":
        return (
          <div className="space-y-4">
            <div className="flex flex-col gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">Features</h3>
            </div>

            <div className="space-y-3">
              {account.features?.map((feature, index) => (
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

      case "requirements":
        return (
          <div className="space-y-4">
            <div className="flex flex-col items-left gap-2 text-green-600">
              <Image src={"/bank.svg"} width={20} height={20} alt="" />
              <h3 className="font-semibold text-lg text-[#020617]">
                Requirements
              </h3>
            </div>
            <div className="space-y-3">
              {account.requirements.map((requirements, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B] h-full">
                    {requirements.text}
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
              {account.targetClients?.map((client, index) => (
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

            <Accordion type="single" collapsible className="w-full mb-20">
              {tabs.map((tab) => (
                <AccordionItem
                  className="border-none"
                  key={tab.id}
                  value={tab.id}
                >
                  <AccordionTrigger
                    className="px-4"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex gap-2 justify-center items-center">
                      {tab.icon && (
                        <Image src={tab.icon} width={10} height={10} alt="" />
                      )}
                      {tab.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {renderTabContent()}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
