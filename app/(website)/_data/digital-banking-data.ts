export interface DigitalBankingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  linkUrl?: string;
  imageWidth?: number;
}

export interface SecurityFeature {
  title: string;
  description: string;
}

export const DIGITAL_BANKING_SERVICES: DigitalBankingService[] = [
  {
    id: "mobile-banking",
    title: "Mobile Banking",
    description:
      "Bank anywhere, anytime with 24/7 access to your accounts and transactions.",
    features: [
      "View balance anywhere with 24/7 access",
      "Fund balance transactions or top-ups online",
      "Easy to control with real-time account monitoring",
      "Enhanced security with encrypted data and verification",
    ],
    image: "/i12_15 1.png",
    imageWidth: 380,
    linkUrl: "/products/digital-banking/mobile-banking",
  },
  {
    id: "pos",
    title: "POS (Point of Sale)",
    description:
      "Seamlessly accept payments and manage your business transactions.",
    features: [
      "Easily manage business cash and digital transactions",
      "Send money to accounts from cash sales and payments",
      "Direct access to merchant's bank account",
      "Access complete transaction history pos terminal",
    ],
    imageWidth: 300,
    image: "/point-sale-machine-design-resource 1.png",
    linkUrl: "/products/digital-banking/pos",
  },
  {
    id: "debit-card",
    title: "Debit Card / ATM",
    description:
      "Access your funds anywhere with our secure debit cards and ATM network.",
    features: [
      "Access the easy and thrill of carrying cash",
      "Instant cashless transactions and receipts",
      "Partners bank transfers and payments instantly",
      "Check balances and transactions anytime",
    ],
    imageWidth: 470,
    image: "/credit-card 1.svg",
    linkUrl: "/products/digital-banking/debit-card",
  },
];

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    title: "Bank-level Security",
    description: "256-bit encryption and biometric authentication",
  },
  {
    title: "Instant Transactions",
    description: "Real-time transfers and instant notifications",
  },
  {
    title: "24/7 Access",
    description: "Bank anytime, anywhere, even when branches are closed",
  },
];

export const USSD_CODE = "*566*44#";
