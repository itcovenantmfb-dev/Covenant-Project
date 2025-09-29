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
import { LoanData } from "@/app/_data/loans-data";
import { LoanDetailDialog } from "./loan-detail-dialog";
import { useState } from "react";
import { LoanMobileDrawer } from "./loan-mobile-drawer";


interface LoanCardProps {
  loan: LoanData;
}

export function LoanCard({ loan }: LoanCardProps) {
  const [selectedLoan, setSelectedLoan] = useState<LoanData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedLoan(null);
  };

  const handleCloseDrawer = () => {
    setIsMobileDrawerOpen(false);
    setSelectedLoan(null);
  };

  return (
    <>
      <Card className="h-full grid grid-cols-1 lg:grid-cols-1 gap-0 text-[#000]/60 border-none hover:shadow-lg bg-white transition-shadow duration-200">
        <CardHeader className="rounded-md relative">
          <div className="rounded-4xl hidden lg:flex">
            <Image
              src={loan.image || "/placeholder.svg"}
              alt={loan.name}
              width={600}
              height={600}
              className="rounded-4xl px-0 "
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <CardTitle className="text-xl font-semibold text-[#04391F]">
              {loan.name}
            </CardTitle>
            {/* <CardDescription className="text-[#000]/60 w-full text-md">
              {loan.description}
            </CardDescription> */}
          </div>

          <div className="flex flex-col gap-4">
            {loan.items.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Image
                  src={"/icons/mark.svg"}
                  alt="mark-icon"
                  width={20}
                  height={20}
                />
                <p>{item.list}</p>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              setSelectedLoan(loan);
              setIsDialogOpen(true);
            }}
            className="bg-green-600 hover:bg-green-700 hidden lg:block text-white"
          >
            View Details
          </Button>

          <Button
            onClick={() => {
              setSelectedLoan(loan);
              setIsMobileDrawerOpen(true);
            }}
            className="bg-green-600 hover:bg-green-700 block lg:hidden text-white"
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      <LoanDetailDialog
        loan={selectedLoan}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
      <LoanMobileDrawer
        loan={selectedLoan}
        isOpen={isMobileDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
}