import Title from "@/app/_components/title";
import { ACCOUNT_DATA } from "@/app/_data/accounts-data";
import React from "react";
import { AccountCard } from "./account-card";

const AccountsSection = () => {
  return (
    <section className="bg-[#F1F5EB] py-6 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <Title
          text="Accounts & Deposits"
          borderColor="[#1D9B5E]/40"
          textColor="#1D9B5E"
        />
        <div className="max-w-[950px]">
          <h2 className="font-semibold text-lg lg:text-[28px] text-[#020617]">
            Covenant MFB offers flexible and reliable deposit accounts to help
            you manage, save, and grow your money securely. Whether you're
            saving for the future or running a business, we have the right
            account for you.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-8">
          {ACCOUNT_DATA.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;
