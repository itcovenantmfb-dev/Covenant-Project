
import React from "react";
import { AccountCard } from "./account-card";
import { ACCOUNT_DATA } from "@/app/(website)/_data/accounts-data";
import Title from "@/app/(website)/_components/title";

const AccountsSection = () => {
  return (
    <section data-aos="fade-up" className="bg-[#F1F5EB] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
        <Title
          text="Accounts & Deposits"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[950px] text-center">
          <h2 className="font-semibold text-lg sm:text-xl lg:text-[28px] text-[#020617] leading-relaxed">
            Covenant MFB offers flexible and reliable deposit accounts to help
            you manage, save, and grow your money securely. Whether you're
            saving for the future or running a business, we have the right
            account for you.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 sm:gap-8">
          {ACCOUNT_DATA.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;
