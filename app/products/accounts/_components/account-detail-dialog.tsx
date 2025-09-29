"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Building2 } from "lucide-react";
import type { AccountData } from "@/app/_data/accounts-data";
import { cn } from "@/lib/utils";

interface AccountDetailDialogProps {
  account: AccountData | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "overview" | "features" | "benefits" | "target-clients";

export function AccountDetailDialog({
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
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:!max-w-[650px]  !max-h-[80vh] hidden lg:block border-none rounded-4xl overflow-auto bg-[#FEFEFE]  gap-6 ">
          <DialogHeader className="mb-10">
            <div className="flex items-center justify-center">
              <DialogTitle className="text-[#1D9B5E] text-xl text-center font-semibold text-balance">
                • {account.name}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div>
            <div className=" flex justify-between  items-center  py-0  ">
              {tabs.map((tab) => (
                <div
                  className={cn(
                    activeTab === tab.id
                      ? "bg-[#F1F5EB] pt-3 px-8 rounded-tl-2xl rounded-t-4xl "
                      : "p-0   rounded-2xl"
                  )}
                  key={tab.id}
                >
                  <Button
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-md font-medium rounded-full ${
                      activeTab === tab.id
                        ? "bg-[#0D4A06] hover:bg-green-700 transition-all text-[#F1F5EB]"
                        : "hover:bg-green-50  hover:text-green-700 hover:border-green-200"
                    }`}
                  >
                    {tab.icon && (
                      <Image src={tab.icon} width={10} height={10} alt="" />
                    )}
                    {tab.label}
                  </Button>
                </div>
              ))}
            </div>
            <div className="bg-[#A2DE49] rounded-b-4xl rounded-tr-4xl">
              {" "}
              <div
                className={cn(
                  "flex flex-col justify-center  overflow-y-auto h-[415px] py-6 bg-[#F1F5EB] rounded-b-4xl rounded-tr-4xl px-8",
                  activeTab === "target-clients" && "rounded-none "
                )}
              >
                {renderTabContent()}
              </div>
              <div className="flex-shrink-0 pt-0">
                <Button className="w-full bg-[#A2DE49] rounded-b-4xl hover:bg-green-700 text-black">
                  <Image src={"/Lightning.png"} width={20} height={20} alt="" />
                  Visit any Covenant Microfinance Bank branch nearest to you to
                  apply
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
