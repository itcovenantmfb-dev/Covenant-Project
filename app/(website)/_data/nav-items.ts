export const NAV_ITEMS = [
  {
    icon: "/icons/about_icon.svg",
    text: "About Us",
    route: "/about-us",
    isDropdown: true,
    subItems: [
      {
        label: "Our Company",
        route: "/about-us",
        icon: "Building2",
        description: "Learn more about who we are and what we do.",
      },
      {
        label: "Careers",
        route: "/careers",
        icon: "Briefcase",
        description:
          "Ready to grow with us? Explore exciting career opportunities.",
      },
      {
        label: "Our Team",
        route: "/our-team",
        icon: "Users",
        description: "Meet the dedicated professionals driving our success.",
      },
    ],
  },
  {
    icon: "/icons/products_icon.svg",
    text: "Products",
    route: "/products",
    isDropdown: true,
    subItems: [
      {
        label: "Internet Banking",
        route: "/products/digital-banking",
        icon: "Globe",
        description:
          "Explore the range of financial and value-added services we provide.",
      },
      {
        label: "Mobile Banking and USSD Magic Code",
        route: "/products/digital-banking/mobile-banking",
        icon: "Smartphone",
        description:
          "Access your account and perform transactions on your phone.",
      },
      {
        label: "Loans",
        route: "/products/loans",
        icon: "DollarSign",
        description:
          "Flexible loan options designed to help you achieve your goals.",
      },
      {
        label: "Cards",
        route: "/products/cards",
        icon: "CreditCard",
        description:
          "Convenient cash withdrawals and services at our ATMs Nationwide.",
      },
      {
        label: "Accounts",
        route: "/products/accounts",
        icon: "Wallet",
        description:
          "Choose from variety of account types tailored to your needs.",
      },
      {
        label: "POS",
        route: "/products/digital-banking/pos",
        icon: "LayoutGrid",
        description:
          "Seamless point-of-sale solutions for businesses and merchants.",
      },
    ],
  },
  {
    icon: "/icons/Vector (2).svg",
    text: "Media",
    route: "/media",
    isDropdown: true,
    subItems: [
      {
        label: "Picture Gallery",
        route: "/gallery",
        icon: "ImageIcon",
        description:
          "Every photo tells a story of growth, service, and connection.",
      },
      {
        label: "Video",
        route: "/media/video",
        icon: "Video",
        description: "Watch our journey of growth and impact.",
      },
      {
        label: "News/Announcement",
        route: "/news",
        icon: "Newspaper",
        description: "See what's new at Covenant Microfinance Bank.",
      },
      {
        label: "Corporate Social Responsibility (CSR)",
        route: "/media/csr",
        icon: "Heart",
        description: "Empowering lives and communities.",
      },
    ],
  },


  {
    icon: "/icons/support_icon.svg",
    text: "Support",
    route: "/support",
    isDropdown: true,
    subItems: [
      {
        label: "Help Center",
        route: "/support/help-center",
        icon: "HelpCircle",
        description: "Have questions or need support? Reach out to us.",
      },
      {
        label: "Forms & Downloads",
        route: "/forms",
        icon: "FileText",
        description:
          "Easily access and download essential banking forms anytime.",
      },
      {
        label: "FAQ",
        route: "/faq",
        icon: "MessageCircleQuestion",
        description: "Find instant answers to your most important questions.",
      },
    ],
  },
    {
    icon: "/icons/Frame 140 (2).svg",
    text: "Payments",
    route: "/payments",
    isDropdown: true,
    subItems: [
      {
        label: "CU School Fees",
        route: "/payments/cu-school-fees",
        icon: "GraduationCap",
        description:
          "Conveniently pay your Covenant University school fees with ease.",
      },
    ],
  },
  {
    icon: "/icons/contact_icon.svg",
    text: "Contact Us",
    route: "/contact",
    center: true,
  },

  {
    icon: "/icons/Frame 140 (1).svg",
    text: "Online Banking",
    route: "/online-banking",
    isDropdown: true,
    subItems: [
      {
        label: "Mobile Banking",
        route: "/products/digital-banking/mobile-banking",
        icon: "Smartphone",
        description:
          "Bank anywhere, anytime — fast and convenient on your phone.",
      },
      {
        label: "Internet banking",
        route: "/products/digital-banking",
        icon: "Globe",
        description: "Manage your account online with ease.",
      },
      {
        label: "Corporate Internet banking",
        route: "/products/digital-banking/corporate",
        icon: "Building2",
        description:
          "Simplify your business transactions with secure corporate online access.",
      },
    ],
  },
];
