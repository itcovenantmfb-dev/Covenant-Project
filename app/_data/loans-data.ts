export interface LoanFeature {
  text: string;
}

export interface LoanRequirement {
  text: string;
}

export interface LoanTargetClient {
  text: string;
}

export interface ItemsRequirement {
  list: string;
}

export interface LoanData {
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
  features: LoanFeature[];
  requirements: LoanRequirement[];
  targetClients: LoanTargetClient[];
}

export const LOAN_DATA: LoanData[] = [
  {
    id: "regular-loan-overdraft",
    name: "Regular Loan/Overdraft Facilities",
    shortName: "Regular Loan",
    description:
      "At Covenant Microfinance Bank, we are committed to improving your quality of life and business by giving you access to specially designed loans and overdraft facilities.",
    items: [
      { list: "Stress-free application process." },
      { list: "Quick access to emergency funds." },
      { list: "Flexible repayment terms." },
      { list: "Competitive interest rates." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "At Covenant Microfinance Bank, we are committed to improving your quality of life and business by giving you access to specially designed loans and overdraft facilities. Each facility is tailored to suit your needs, while taking into account your request, the bank's capacity, and our risk management framework.",
    },
    features: [
      { text: "Simple, stress-free application process." },
      { text: "Flexible and convenient repayment terms." },
      { text: "Competitive and affordable interest rates." },
      { text: "Quick access to funds for short-term financial needs." },
      { text: "Support for urgent or unexpected expenses." },
      { text: "Option to pay off the facility before the agreed repayment date." },
    ],
    requirements: [
      { text: "For salary earners: salary account domiciled with Covenant Microfinance Bank." },
      { text: "An active banking relationship with us for 3-6 months." },
      { text: "Two guarantors." },
    ],
    targetClients: [
      { text: "Salary earners" },
      { text: "Micro-entrepreneurs." },
    ],
  },
  {
    id: "salary-earners-loan",
    name: "Salary Earner's Loan",
    shortName: "Salary Loan",
    description:
      "Our Salary Earner's Loan is tailored to help individuals in paid employment with reputable organizations meet their financial needs quickly and conveniently.",
    items: [
      { list: "Loan tied to monthly salary." },
      { list: "Repayment through salary deductions." },
      { list: "6–12 months repayment period." },
      { list: "Fast processing (24–48 hours)." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "Our Salary Earner's Loan is tailored to help individuals in paid employment with reputable organizations meet their financial needs quickly and conveniently.",
    },
    features: [
      { text: "The loan amount is determined by your monthly salary." },
      { text: "Flexible repayment period between 6 to 12 months." },
      { text: "Easy repayment through monthly deductions from your salary." },
      { text: "Can be used for personal needs such as household expenses, healthcare, or children's education." },
      { text: "Fast processing time of 24 to 48 hours." },
    ],
    requirements: [
      { text: "Salary account must be domiciled with Covenant Microfinance Bank." },
      { text: "A written application letter and a completed loan application form." },
      { text: "A completed guarantor's form." },
    ],
    targetClients: [
      { text: "Individuals earning a salary" },
    ],
  },
   {
    id: "lpo-project-financing",
    name: "LPO / Project Financing",
    shortName: "LPO Financing",
    description:
      "Our LPO/Project Financing facility is designed to support customers who have secured valid job or supply orders from reputable and credible organizations within Nigeria.",
    items: [
      { list: "Financing of up to 70% of the total project value." },
      { list: "Loan amount starting from ₦500,000." },
      { list: "Short tenor for quick turnover (90 days)." },
      { list: "Affordable reducing balance interest." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "Our LPO/Project Financing facility is designed to support customers who have secured valid job or supply orders from reputable and credible organizations within Nigeria. It provides the working capital you need to execute these orders successfully, ensuring you deliver on time and maintain a strong business reputation. This product is ideal for businesses that have confirmed purchase orders but require quick access to funds to meet their obligations.",
    },
    features: [
      { text: "Financing of up to 70% of the total project value." },
      { text: "Loan amount starting from ₦500,000." },
      { text: "Maximum tenor of 90 days for quick turnover." },
      { text: "Affordable interest rates calculated on a reducing balance." },
    ],
    requirements: [
      { text: "A valid Local Purchase Order (LPO)." },
      { text: "Completed Letter of Domiciliation of Payment with Covenant Microfinance Bank." },
      { text: "Application letter and facility application form." },
      { text: "Duly filled guarantor's form." },
    ],
    targetClients: [
      { text: "Small business owners" },
      { text: "Micro-entrepreneurs" },
    ],
  },
  {
    id: "micro-enterprise-loan",
    name: "Micro-Enterprise Loan",
    shortName: "Enterprise Loan",
    description:
      "At Covenant Microfinance Bank, we are committed to supporting small businesses. This loan facility was designed specifically for small business owners to provide the financial boost they need to grow and thrive.",
    items: [
      { list: "Loans from ₦100,000 – ₦2,000,000." },
      { list: "Up to 24 months repayment." },
      { list: "Tailored for small businesses." },
      { list: "Affordable rates with collateral flexibility." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "At Covenant Microfinance Bank, we are committed to supporting small businesses. This loan facility was designed specifically for small business owners to provide the financial boost they need to grow and thrive.",
    },
    features: [
      { text: "Loan amounts from ₦500,000 to ₦2,000,000." },
      { text: "Maximum tenor of 6 months for first-time borrowers and 24 months for existing customers." },
      { text: "Competitive and affordable interest rates." },
    ],
    requirements: [
      { text: "An active banking relationship with Covenant Microfinance Bank for 3-6 months." },
      { text: "Application letter with a completed loan application form." },
      { text: "Completed guarantor's forms were applicable." },
      { text: "Land property documents were applicable (land receipts, deed of agreement, survey plan or C of O)." },
    ],
    targetClients: [
      { text: "Salary earners" },
      { text: "Artisans" },
      { text: "Micro-entrepreneurs" },
    ],
  },
 
  {
    id: "daap-loan",
    name: "DreamAsset Acquisition Product (DAAP)",
    shortName: "DAAP",
    description:
      "Make your dream purchases a reality with our simple, flexible, and convenient payment plan.",
    items: [
      { list: "Buy brand-new appliances easily." },
      { list: "Pay only 10% upfront." },
      { list: "Up to 10 months repayment." },
      { list: "Quick processing" },
  
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "Make your dream purchases a reality with our simple, flexible, and convenient payment plan.",
    },
    features: [
      { text: "Brand new, original electronics and home appliances from trusted brands." },
      { text: "Warranty provided in line with supplier's policy." },
      { text: "Highly competitive prices." },
      { text: "Only 10% equity contribution required." },
      { text: "Up to 30 months and above repayment period." },
      { text: "Zero management fees." },
      { text: "Affordable interest rates." },
    ],
    requirements: [
      { text: "Active banking relationship for 3-6 months." },
      { text: "Upfront payment of 10% equity contribution." },
      { text: "Completed application and guarantor forms." },
    ],
    targetClients: [
      { text: "Micro-entrepreneurs" },
      { text: "Salary earners" },
    ],
  },
   {
    id: "fett-loan",
    name: "Financial Empowerment Through Transportation (FETT)",
    shortName: "FETT Loan",
    description:
      "We provide support for your transportation business by helping you acquire assets such as bicycles and motorcycles on request.",
    items: [
      { list: "Acquire motorcycles/tricycles with 5% upfront." },
      { list: "Repay over 12 months." },
      { list: "Flexible weekly repayment." },
      { list: "Insurance coverage included." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "We provide support for your transportation business by helping you acquire assets such as bicycles and motorcycles on request.",
    },
    features: [
      { text: "Pay as little as 20% of the cost price upfront." },
      { text: "Repayment period of up to 12 months." },
      { text: "Available to current account holders." },
      { text: "Flexible weekly repayment plan." },
      { text: "Mandatory weekly savings to build financial discipline." },
      { text: "Comprehensive insurance coverage included." },
    ],
    requirements: [
      { text: "Must have a current account with us." },
      { text: "Account should be active for at least 3 months." },
    ],
    targetClients: [
      { text: "Micro-entrepreneurs" },
      { text: "Small business owners" },
    ],
  },
  {
    id: "cooperative-loan",
    name: "Co-operative / Association Loan Scheme",
    shortName: "Cooperative Loan",
    description:
      "At Covenant Microfinance Bank, this facility is designed to support organized trade groups and artisan associations, such as welders, tailors, vulcanizers, and okada riders, by providing them with access to credit that empowers their businesses.",
    items: [
      { list: "Credit for group members." },
      { list: "Weekly repayment system." },
      { list: "Access to re-loans." },
      { list: "Training & business development support." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "At Covenant Microfinance Bank, this facility is designed to support organized trade groups and artisan associations, such as welders, tailors, vulcanizers, and okada riders, by providing them with access to credit that empowers their businesses.",
    },
    features: [
      { text: "Financial support for every member of the group." },
      { text: "Convenient weekly repayment plan." },
      { text: "Opportunity for re-loans after repayment." },
      { text: "Access to training and business development programs." },
    ],
    requirements: [
      { text: "Must be registered with the appropriate authority." },
      { text: "10% of the loan amount to be saved in a compulsory account." },
      { text: "Maximum repayment period of 12 months." },
      { text: "Mandatory savings commitment." },
    ],
    targetClients: [
      { text: "Micro-entrepreneurs" },
      { text: "Small business owners" },
      { text: "Artisans" },
    ],
  },
 
  {
    id: "education-bridge-loan",
    name: "Covenant Education Bridge Loan",
    shortName: "Education Loan",
    description:
      "Are you a parent or guardian with a child enrolled in Kingdom Heritage Model School, Faith Academy, Covenant University, or Landmark University? If you ever find yourself needing support to cover school fees before your income comes in, we're here to help.",
    items: [
      { list: "Up to ₦500,000 for school fees." },
      { list: "Flexible repayment (up to 8 months)." },
      { list: "Competitive interest rates." },
      { list: "Designed for Covenant/affiliated schools’ parents." },
    ],
    image: "/Mask group (6).png",
    overview: {
      title: "Overview",
      description:
        "Are you a parent or guardian with a child enrolled in Kingdom Heritage Model School, Faith Academy, Covenant University, or Landmark University? If you ever find yourself needing support to cover school fees before your income comes in, we're here to help.",
    },
    features: [
      { text: "Up to 9-months repayment period." },
      { text: "Maximum loan amount of ₦200,000." },
      { text: "Flexible repayment options and structure." },
      { text: "Competitive interest rates." },
    ],
    requirements: [
      { text: "Must have a domiciled account with CMFB." },
    ],
    targetClients: [
      { text: "Parents of Faith Academy students" },
      { text: "Parents of Covenant University Secondary School students" },
      { text: "Parents of Covenant University students" },
      { text: "Parents of Landmark University students" },
    ],
  },
];