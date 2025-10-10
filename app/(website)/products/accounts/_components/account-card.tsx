"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AccountData } from "@/app/_data/accounts-data";
import { AccountDetailDialog } from "./account-detail-dialog";
import { useState } from "react";
import { AccountMobileDrawer } from "./account-mobile-drawer";

interface AccountCardProps {
  account: AccountData;
}

export function AccountCard({ account }: AccountCardProps) {
  const [selectedAccount, setSelectedAccount] = useState<AccountData | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedAccount(null);
  };

  const handleCloseDrawer = () => {
    setIsMobileDrawerOpen(false);
    setSelectedAccount(null);
  };

  return (
    <>
      <Card className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 text-[#000]/60 border-none hover:shadow-lg bg-white transition-shadow duration-200">
        <CardHeader className="rounded-md relative min-h-[200px] lg:min-h-auto">
          <div className="rounded-4xl flex lg:flex">
            <Image
              src={account.image || "/placeholder.svg"}
              alt={account.name}
              fill
              className="object-contain rounded-4xl px-2 absolute"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-4 sm:p-6">
          <div className="flex flex-col gap-3">
            <CardTitle className="text-lg sm:text-xl font-semibold text-[#04391F]">
              {account.name}
            </CardTitle>
            <CardDescription className="text-[#000]/60 w-full text-sm sm:text-md leading-relaxed">
              {account.description}
            </CardDescription>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {account.items.map((i,index) => (
              <div key={index} className="flex gap-2 items-start">
                <Image
                  src={"/icons/mark.svg"}
                  alt="mark-icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 mt-0.5"
                />
                <p className="text-sm sm:text-base">{i.list}</p>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              setSelectedAccount(account);
              setIsDialogOpen(true);
            }}
            className=" bg-green-600 hover:bg-green-700 hidden lg:block text-white"
          >
            View Details
          </Button>

          <Button
            onClick={() => {
              setSelectedAccount(account);
              setIsMobileDrawerOpen(true);
            }}
            className=" bg-green-600 hover:bg-green-700 block lg:hidden text-white"
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      <AccountDetailDialog
        account={selectedAccount}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
      <AccountMobileDrawer
        account={selectedAccount}
        isOpen={isMobileDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
}
