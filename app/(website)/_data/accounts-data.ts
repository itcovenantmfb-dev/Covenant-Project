export interface AccountFeature {
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
  features: AccountFeature[];
  benefits: AccountBenefit[];

  targetClients: AccountTargetClient[];
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
      { list: "No charges" },
      { list: "Simple upkeep" },
    ],
    image: "/mini-house-stack-coins-with-green-blur 1.png",

    overview: {
      title: "Overview",
      description:
        "We understand the importance of setting aside funds for your future needs. Our Savings Account is designed to help you grow your money steadily while working towards your life goals. It's a straightforward savings option that makes it easy to accumulate funds and achieve your aspirations.",
    },
    features: [
      { text: "Simple and hassle-free account opening process." },
      { text: "Competitive and attractive interest rates." },
      { text: "Unlimited deposits with flexible withdrawal options." },
      { text: "24/7 access to your money through our e-Banking platforms." },
      {
        text: "Interest will be forfeited if more than 3 withdrawals are made in a month.",
      },
    ],
    benefits: [
      { text: "Easy and affordable to maintain." },
      { text: "Enjoy competitive interest earnings." },
      { text: "No over-the-counter charges." },
      { text: "Withdraw funds at any time without prior notice." },
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
    features: [
      { text: "Third-party withdrawals permitted." },
      { text: "No minimum balance requirement." },
      { text: "Cheque book issued upon request." },
    ],
    benefits: [
      {
        text: "Convenient lodgment of cheques, dividend warrants, and other financial instruments",
      },
      { text: "Access to loans and overdraft facilities." },
      {
        text: "Free monthly printed statement of account (available on request)",
      },
      { text: "24/7 access to your funds through our e-Banking services." },
      { text: "No withdrawal equals no maintenance charge." },
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
    features: [
      { text: "Minimum opening balance ₦2,000.00" },
      { text: "Minimum balance: ₦500.00" },
    ],
    benefits: [
      { text: "Attractive interest rates" },
      { text: "Ideal for parents saving towards their children's education" },
      {
        text: "Convertible to a regular savings account once the child reaches the eligible age",
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
    features: [
      { text: "Competitive interest rates" },
      { text: "A secure way to grow your savings over time." },
      { text: "Convenient access to your account information." },
      {
        text: "Option to terminate before maturity (accrued interest will be forfeited)",
      },
    ],
    benefits: [
      { text: "Maximize your returns." },
      { text: "Risk-free investment option." },
      { text: "Guaranteed interest rate for your chosen investment period" },
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
      { list: "No charges" },
      { list: "Stress-free setup" },
    ],
    image: "/Mask group (5).png",
    overview: {
      title: "Overview",
      description:
        "The Shiloh Savings Account is specially created to help you, our valued customer, prepare financially for the annual Shiloh event. Whether you want to set aside funds to cover expenses during the program or save up to restock your business for the sales boom that comes with the event, this account makes it easy and rewarding.",
    },
    features: [
      { text: "Minimum opening balance ₦2,000.00" },
      { text: "Minimum balance: ₦500.00" },
      { text: "Full access to our eBanking solutions" },
    ],
    benefits: [
      { text: "Simple and stress-free account opening process." },
      { text: "Attractive interest rate, higher than the current market rate" },
      { text: "No over-the-counter charges" },
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
      { list: "No charges" },
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
    benefits: [
      { text: "No hidden charges." },
      { text: "Affordable and easy to maintain." },
      { text: "Simple and stress-free process." },
      { text: "Access to soft trading loans." },
    ],

    targetClients: [
      { text: "Micro-entrepreneurs" },
      { text: "Artisans" },
      { text: "Traders" },
    ],
  },
];
