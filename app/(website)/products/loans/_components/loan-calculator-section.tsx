import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoanCalculatorSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left side - Calculator */}
          <div className="shadow-md border border-[#DDDCE0] lg:col-span-8 rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-[#3F3E5E] text-xl sm:text-2xl font-bold">
                Loan Calculator
              </h3>
              <p className="text-[#3F3E5E] text-center text-sm sm:text-base">
                Plan your finances with our loan calculator to understand your
                monthly repayments.
              </p>

              <div className="space-y-4 sm:space-y-6 text-[#3F3E5E]">
                <div className="space-y-2">
                  <Label htmlFor="loan-amount" className="text-sm sm:text-base">Loan Amount ₦</Label>
                  <Input
                    id="loan-amount"
                    placeholder="Enter loan amount"
                    className="bg-white border border-[#DDDCE0] h-12"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="interest-rate" className="text-sm sm:text-base">Annual Interest Rate (%)</Label>
                    <Input
                      id="interest-rate"
                      placeholder="Enter interest rate"
                      className="bg-white border border-[#DDDCE0] h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loan-term" className="text-sm sm:text-base">Repayment Period (Months)</Label>
                    <Input
                      id="loan-term"
                      placeholder="Enter loan term"
                      className="bg-white border border-[#DDDCE0] h-12"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center pt-2">
                  <Button className="w-full sm:w-auto sm:min-w-[200px] bg-green-600 hover:bg-green-700 text-white h-12">
                    Calculate
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Results */}
          <div className="bg-[#1D9B5E] rounded-2xl p-6 lg:col-span-4 text-white">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl text-center font-semibold">Results</h3>

              <div className="space-y-4">
                <div className="flex flex-col bg-[#043B20] justify-between items-center p-4 rounded-lg">
                  <span className="text-[#A2DE49] text-sm sm:text-base">Monthly Payment</span>
                  <span className="font-semibold text-lg sm:text-xl">₦0.00</span>
                </div>

                <div className="flex flex-col justify-between items-center p-4 bg-[#043B20] rounded-lg">
                  <span className="text-[#A2DE49] text-sm sm:text-base">Total Payment</span>
                  <span className="font-semibold text-lg sm:text-xl">₦0.00</span>
                </div>

                <div className="flex flex-col justify-between items-center p-4 bg-[#043B20] rounded-lg">
                  <span className="text-[#A2DE49] text-sm sm:text-base">Total Interest</span>
                  <span className="font-semibold text-lg sm:text-xl">₦0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculatorSection;
