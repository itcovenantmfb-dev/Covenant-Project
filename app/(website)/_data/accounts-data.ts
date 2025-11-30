export interface AccountFeatures {
  text: string;
}

export interface AccountBenefit {
  text: string;
}

export interface AccountRequirement {
  text: string;
}

export interface AccountTargetClient {
  text: string;
}

export interface ItemsRequirement {
  list: string;
}

export interface AccountData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  items: ItemsRequirement[];
  image: string;
  overview: {
    title: string;
    description: string;
  };
  features?: AccountFeatures[];
  benefits?: AccountBenefit[];
  requirements: AccountRequirement[];

  targetClients?: AccountTargetClient[];
}

export const ACCOUNT_DATA: AccountData[] = [
  {
    id: "savings-account",
    name: "Savings Account",
    shortName: "Savings Account",
    description:
      "For individuals looking to save and earn interest with flexible withdrawals.",
    items: [
      { list: "Easy opening" },
      { list: "Earn interest" },
      { list: "Flexible access" },
      { list: "24/7 banking" },
      { list: "Simple upkeep" },
    ],
    image: "/Mask group (21).svg",

    overview: {
      title: "Overview",
      description:
        "We understand the importance of setting aside funds for your future needs. Our Savings Account is designed to help you grow your money steadily while working towards your life goals. It's a straightforward savings option that makes it easy to accumulate funds and achieve your aspirations.",
    },
    benefits: [
      { text: "Simple and hassle-free account opening process." },
      { text: "Competitive and attractive interest rates." },
      { text: "Unlimited deposits with flexible withdrawal options." },
      { text: "24/7 access to your money through our e-Banking platforms." },
      {
        text: "No over-the-counter charges, once withdrawal is not made more than 3 times.",
      },
      { text: "Withdraw funds at any time without prior notice." },
      {
        text: "Interest will be forfeited if more than three withdrawals are made in a month.",
      },
    ],
    requirements: [
      { text: "2 Passport photographs" },
      { text: "Valid Identification & BVN" },
      { text: "Recent utility bill not later than 3 months" },
      { text: "Minimum account balance: ₦500" },
    ],

    targetClients: [
      { text: "Economically active individuals" },
      { text: "Company employees" },
      { text: "Private companies" },
      { text: "Limited liability companies" },
      { text: "Registered and non-registered groups, and more." },
    ],
  },
  {
    id: "current-account",
    name: "Current Account",
    shortName: "Current Account",
    description:
      "Tailored for individuals and businesses for daily transactions.",
    items: [
      { list: "Third-party access" },
      { list: "Zero minimum balance" },
      { list: "Loan eligibility" },
      { list: "Free statements" },
      { list: "Cheque lodgment" },
      { list: "24/7 access" },
    ],
    image: "/Mask group (2).png",
    overview: {
      title: "Overview",
      description:
        "Enjoy seamless banking and added privileges with our Current Account. Benefit from easy access to funds, loans, and overdraft facilities, all designed to make your financial life easier.",
    },

    benefits: [
      {
        text: "Convenient lodgment of cheques, dividend warrants, and other financial instruments",
      },
      { text: "Access to loans and overdraft facilities." },
      {
        text: "Free E-statement of account (available on request).",
      },
      { text: "24/7 access to your funds through our e-Banking services." },
      { text: "No withdrawal equals no maintenance charge." },
      { text: "Third-party withdrawals permitted." },
      { text: "Cheque book issued upon request." },
    ],

    requirements: [
      { text: "Minimum account opening balance: ₦3000" },
      { text: "2 referees with current bank account" },
      { text: "Valid Identification & BVN" },
      { text: "Recent utility bill not later than 3 months" },
      { text: "₦50 postage stamp" },
    ],

    targetClients: [
      { text: "Economically active individuals" },
      { text: "Company employees" },
      { text: "Private and limited liability companies" },
      { text: "Registered and non-registered groups, and more." },
    ],
  },
  {
    id: "covenant-children-account",
    name: "Covenant Children's Savings Account",
    shortName: "Children's Account",
    description:
      "Teach children financial literacy with our child-friendly savings plan.",
    items: [
      { list: "Attractive interest" },
      { list: "Early discipline" },
      { list: "Convertible later" },
      { list: "Low balance" },
      { list: "Education savings" },
      { list: "Safe & flexible" },
    ],
    image: "/Mask group (3).png",
    overview: {
      title: "Overview",
      description:
        "This account allows parents to build savings for their children while helping the children develop good money management skills from an early age.",
    },

    benefits: [
      { text: "Minimum account balance: ₦500" },
      { text: "Attractive interest rates" },
      {
        text: "Convertible to a regular savings account once the child reaches the eligible age",
      },
    ],

    requirements: [
      { text: "2 passport photograph each of the signatory and the child" },
      { text: "Birth certificate of the child" },
      {
        text: "Valid identification & BVN of the signatory",
      },
      {
        text: "Recent utility bill not later than 3 months",
      },
      {
        text: "Minimum account balance: ₦500",
      },
    ],

    targetClients: [{ text: "Children and students under 18 years old" }],
  },

  {
    id: "fixed-deposit",
    name: "Fixed Deposit Account",
    shortName: "Fixed Deposit",
    description: "Helps you achieve specific financial goals with discipline.",
    items: [
      { list: "High returns" },
      { list: "Secure funds" },
      { list: "Flexible terms" },
      { list: "Reinvest option" },
      { list: "Easy access" },
      { list: "Guaranteed growth" },
    ],
    image: "/Mask group (4).png",
    overview: {
      title: "Overview",
      description:
        "If you're looking to save for the future over the long term, our Fixed Deposit Account is the perfect choice for both individuals and businesses. You can invest a specific amount at an agreed interest rate for fixed periods of 90 or 180 days. At maturity, based on your instructions, your funds can either be reinvested (rolled over) or returned to you along with the accrued interest.",
    },

    benefits: [
      { text: "Competitive interest rates" },
      { text: "A secure way to grow your savings over time." },
      { text: "Convenient access to your account information." },
      {
        text: "Option to terminate before maturity ( 25 percent on the accrued interest will be forfeited)",
      },
      { text: "Maximize your returns." },
      { text: "Risk-free investment option." },
      { text: "Guaranteed interest rate for your chosen investment period" },
    ],

    requirements: [
      {
        text: "You don't necessarily need to have an account with Covenant MFB to operate this account",
      },
    ],

    targetClients: [
      { text: "Retirees" },
      { text: "Private companies" },
      { text: "Limited liability companies" },
      { text: "Registered and non-registered groups" },
    ],
  },
  {
    id: "shiloh-savings",
    name: "Shiloh Savings Account",
    shortName: "Shiloh Savings",
    description:
      "Save easily for Shiloh with high interest and stress-free banking.",
    items: [
      { list: "Event savings" },
      { list: "High interest" },
      { list: "Low opening balance" },
      { list: "24/7 access" },
      { list: "Stress-free setup" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Shiloh Savings Account is specially created to help you, our valued customer, prepare financially for the annual Shiloh event. Whether you want to set aside funds to cover expenses during the program or save up to restock your business for the sales boom that comes with the event, this account makes it easy and rewarding.",
    },

    benefits: [
      { text: "Minimum account balance: ₦500.00" },
      { text: "Full access to our eBanking solutions" },
      { text: "Simple and stress-free account opening process." },
      { text: "Attractive interest rate, higher than the current market rate" },
      { text: "No over-the-counter charges" },
    ],

    requirements: [
      { text: "2 passport photograph" },
      { text: "Valid identification & BVN" },
      { text: "Recent utility bill not later than 3 months" },
      { text: "Minimum account balance: ₦500" },
    ],

    targetClients: [
      {
        text: "Open to all attendees of the annual Shiloh event held at Faith Tabernacle, Canaan-land, Ota.",
      },
    ],
  },

  {
    id: "covenant-daily-investment",
    name: "Covenant Daily Investment Scheme (CODIAS)",
    shortName: "CODIAS",
    description: "Daily savings made simple and rewarding for business growth.",
    items: [
      { list: "Daily savings" },
      { list: "Simple process" },
      { list: "Access loans" },
      { list: "Business growth" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Covenant Daily Investment Scheme is tailored for traders, especially market women, artisans, and small-scale business owners, helping them develop a consistent saving habit that can strengthen and grow their businesses.",
    },

    features: [
      { text: "No hidden charges." },
      { text: "Affordable and easy to maintain." },
      { text: "Simple and stress-free process." },
      { text: "Access to soft trading loans." },
    ],

    requirements: [
      { text: "2 passport photograph" },
      { text: "Valid identification & BVN" },
      { text: "Recent utility bill not later than 3 months" },
    ],

    targetClients: [
      { text: "Micro-entrepreneurs" },
      { text: "Artisans" },
      { text: "Traders" },
    ],
  },
  {
    id: "Corporate Current  Account",
    name: "Corporate Current  Account",
    shortName: "CCA",
    description:
      "Empowering Registered Companies with Secure Banking Solutions",
    items: [
      { list: "Secure Business Banking" },
      { list: "Trusted Corporate Partner" },
      { list: "Tailored for Corporates" },
      { list: "Smart Financial Control" },
      { list: "Regulatory Compliance Assured" },
      { list: "Efficient Account Management" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Corporate (LTD) Account is designed for registered limited liability companies seeking a secure and efficient banking solution for their business operations. It offers full access to digital banking services, enabling smooth financial transactions, payments, and account management.",
    },

    features: [
      { text: "Minimum opening balance of ₦13,000" },
      {
        text: "Designed specifically for registered limited liability companies",
      },
      {
        text: "Full access to our e-Banking platforms for seamless business transactions",
      },
      {
        text: "Multiple authorized signatories approved by the Board of Directors",
      },
      {
        text: "Secure, compliant, and aligned with regulatory requirements (including SCUML where applicable).",
      },
    ],

    requirements: [
      { text: "Duly completed account opening form." },
      {
        text: "Duly completed letter of set-off.",
      },
      {
        text: "Resolution from the Board of Directors/ Proprietor(s) authorizing the opening of the account and approving the account signatories",
      },
      {
        text: "Affix company seal (if available)",
      },
      {
        text: "Certified true copies of incorporation documents (original + photocopies)",
      },
      { text: "Initial deposit of ₦13,000" },
      {
        text: "Two recent passport size photographs of each signatory, white background, with full face forward (name and signature on reverse side)",
      },
      {
        text: "Memorandum and article of association (original and photocopy)",
      },
      {
        text: "Proof of residential address of Signatories and Directors and utility bill of business address - any of the following (public utility bill, PHCN bill, water bills, Tenancy agreement rent receipt) original + photocopy",
      },
      {
        text: "Bank Verification Number (BVN) of Proprietors and Directors.",
      },
      {
        text: "Valid means of identification. Either international passport, driver’s license, voter’s card, national identity card of Directors or Proprietors and all shareholders",
      },
      {
        text: "Tax identification number for the company. ",
      },
      {
        text: "₦50 postage stamp",
      },
      {
        text: "SCUML (Special Control Unit Against Money Laundering) registration where applicable.",
      },
      {
        text: "Duly filled two reference forms by Corporate Limited Liability Company Holders",
      },
      { text: "Business permit, residential permit (For foreign nationals)." },
      {
        text: "Duly completed letter of set-off.",
      },
      {
        text: "Form CAC2, form CAC7/ CAC2.3 Particulars of Directors of the Company (Original & photocopy).",
      },
      {
        text: "Form CAC2 allotment of shares of the company (original and photocopy).",
      },
      {
        text: "Certificate of Exception form using LTD after Name where Applicable (original and photocopy)",
      },
      {
        text: "BVN of all the signatories and all shareholders",
      },
    ],
  },

  {
    id: "Sole Proprietorship/Partnership Account",
    name: "Sole Proprietorship/Partnership Account",
    shortName: "Sole Proprietorship",
    description: "Smart Banking Designed for Small and Growing Business Owners",
    items: [
      { list: "Effortless Business Banking" },
      { list: "Flexible Financial Solutions" },
      { list: "Reliable Partner Support" },
      { list: "Seamless Digital Access" },
      { list: "Smart Financial Control" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Sole Proprietorship/Partnership Account is designed for small and medium-scale business owners who want a reliable and professional banking solution to manage their business finances efficiently.",
    },

    features: [
      { text: "Simple and straightforward account opening process." },
      { text: "Minimum opening balance of ₦13,000." },
      {
        text: "Access to a wide range of e-Banking solutions for easy transactions anytime, anywhere.",
      },
      {
        text: "Attractive and competitive interest rates on account balances.",
      },
      { text: "No over-the-counter charges for withdrawals." },
      {
        text: "Enables smooth financial operations for partnerships and sole proprietors.",
      },
      {
        text: "Complies with regulatory requirements such as SCUML registration (where applicable).",
      },
      {
        text: "Secure account setup with valid identification, BVN verification, and proper business documentation.",
      },
      {
        text: "Enhances business credibility through formal banking records and transaction history.",
      },
    ],

    requirements: [
      { text: "Duly completed account opening form" },
      { text: "Duly completed letter of set-off" },
      { text: "Affix company seal (if available)" },
      {
        text: "Certified true copies of incorporation documents (original + photocopies)",
      },
      { text: "Initial deposit of ₦13,000" },
      {
        text: "Two recent passport size photographs of each signatory, white background, with full face forward (name and signature on reverse side).",
      },
      {
        text: "Proof of residential address of Signatories and Directors and utility bill of business address - any of the following (public utility bill, PHCN bill, water bills, Tenancy agreement rent receipt) original + photocopy",
      },
      { text: "Bank Verification Number (BVN) of Proprietors and Directors." },
      {
        text: "Valid means of identification. Either international passport, driver’s license, voter’s card, national identity card of Directors or Proprietors.",
      },
      { text: "Tax identification number for the company. " },
      { text: "₦50 postage stamp." },
      {
        text: "SCUML (Special Control Unit Against Money Laundering) registration where applicable.",
      },
      { text: "Duly filled two reference forms by Corporate Account Holders" },
      { text: "Business permit, residential permit (For foreign nationals)." },
      { text: "BVN of all the signatories " },
      { text: "Board resolution for joint ventures (on letterhead paper)" },
    ],
  },

  {
    id: "Unincorporated Societies / Clubs / Association Accounts",
    name: "Unincorporated Societies / Clubs / Association Accounts",
    shortName: "Unincorporated Societies",
    description:
      "Banking Made Easy for Clubs, Associations, and Community Groups",
    items: [
      { list: "Transparent Fund Management" },
      { list: "Seamless Group Transactions" },
      { list: "Secure Banking Platform" },
      { list: "Community-Focused Support" },
      { list: "Easy Account Access" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Unincorporated Societies / Clubs / Association Account is designed to meet the financial needs of social groups, clubs, religious bodies, and associations that are not formally incorporated as companies. It provides a reliable and transparent platform to manage group funds, handle contributions, and carry out transactions conveniently.",
    },
    features: [
      { text: "Minimum opening balance of ₦13,000" },
      {
        text: "Simple and transparent account opening process with clear documentation requirements",
      },
      { text: "Supports community development and growth." },
      { text: "No over-the-counter charges for deposits or withdrawals" },
      {
        text: "Multiple authorized signatories for flexible and secure account management",
      },
      {
        text: "Resolution-based authorization, ensuring accountability and transparency",
      },
      {
        text: "BVN-linked security for all signatories to ensure safe and traceable transactions",
      },
      {
        text: "Proof of identity and address verification for added compliance and protection",
      },
      {
        text: "SCUML registration support, where applicable, to meet regulatory standards",
      },
    ],

    requirements: [
      { text: "Duly completed account opening form" },
      {
        text: "Duly completed letter of set-off",
      },
      { text: "Affix association seal (if available)" },
      {
        text: "Certified true copies of Certificate of Registration (original + photocopies)",
      },
      {
        text: "Resolution of the governing organs of the society, clubs and association.",
      },
      {
        text: "A copy of constitutions, rules and regulations of the association etc.",
      },
      {
        text: "Initial deposit of ₦13,000",
      },
      {
        text: "Two recent passport size photographs of each signatory, white background, with full face forward (name and signature on reverse side).",
      },
      {
        text: "Proof of residential address of Signatories and Directors and utility bill of business address - any of the following (public utility bill, PHCN bill, water bills, Tenancy agreement rent receipt) original + photocopy",
      },
      { text: "Bank Verification Number (BVN) of Proprietors or Directors." },
      {
        text: "Valid means of identification. Either international passport, driver’s license, voter’s card, national identity card of Directors or Proprietors.",
      },
      { text: "₦50 postage stamp" },
      {
        text: "SCUML (Special Control Unit Against Money Laundering) registration where applicable.",
      },
      {
        text: "Duly filled two reference forms by Corporate Account Holders",
      },
      {
        text: "BVN of all the signatories ",
      },
      {
        text: "Authorizing the opening of the account and approving the account signatories.",
      },
    ],
  },
];
