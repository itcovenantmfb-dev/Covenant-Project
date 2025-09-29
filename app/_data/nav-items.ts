export const NAV_ITEMS = [
  {
    icon: "/icons/about_icon.svg",
    text: "About Us",
    route: "/about-us",
  },
  {
    icon: "/icons/products_icon.svg",
    text: "Products",
    route: "/products",
    isDropdown: true,
    subItems: [
      {
        label: "Services",
        route: "/products/services",
        description:
          "Explore the range of financial and value-added services we provide.",
      },
      {
        label: "Accounts",
        route: "/products/accounts",
        description:
          "Choose from a variety of account types tailored to your needs.",
      },
      {
        label: "Digital Banking",
        route: "/products/digital-banking",
        description:
          "Bank anywhere, anytime with our digital platforms and solutions.",
      },
      {
        label: "Mobile Banking",
        route: "/products/digital-banking/mobile-banking",
        description:
          "Access your account and perform transactions securely on your phone.",
      },
      {
        label: "Pos",
        route: "/products/digital-banking/pos",
        description:
          "Seamless point-of-sale solutions for businesses and merchants.",
      },
      {
        label: "Atm",
        route: "/products/digital-banking/atm",
        description:
          "Convenient cash withdrawals and services at our ATMs nationwide.",
      },
      {
        label: "Loans",
        route: "/products/loans",
        description:
          "Flexible loan options designed to help you achieve your goals.",
      },
    ],
  },
  {
    icon: "/icons/news_icon.svg",
    text: "News",
    route: "/news",
  },
  {
    icon: "/icons/support_icon.svg",
    text: "FAQs",
    route: "/faq",
  },
  {
    icon: "/icons/careers_icon.svg",
    text: "Careers",
    route: "/careers",
  },
];
