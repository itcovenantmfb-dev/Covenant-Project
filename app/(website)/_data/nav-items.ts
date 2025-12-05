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
        description: "Learn about who we are",
      },
      {
        label: "Careers",
        route: "/careers",
        icon: "Briefcase",
        description: "Explore exciting career opportunities here",
      },
      {
        label: "Our Team",
        route: "/our-team",
        icon: "Users",
        description: "Meet our dedicated team members",
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
        icon: "Smartphone",
        description: "Explore our financial services online",
      },
      {
        label: "Mobile Banking and USSD Magic Code",
        route: "/products/digital-banking/mobile-banking",
        icon: "/icons/bank.svg",
        description: "Perform transactions on your phone",
      },
      {
        label: "Loans",
        route: "/products/loans",
        icon: "/icons/bitcoin-03.svg",
        description: "Flexible loans to achieve goals",
      },
      {
        label: "Cards",
        route: "/products/digital-banking/atm",
        icon: "/icons/atm-01.svg",
        description: "Convenient cash withdrawals at ATMs",
      },
      {
        label: "Accounts",
        route: "/products/accounts",
        icon: "/icons/user-account.svg",
        description: "Account types tailored to you",
      },
      {
        label: "POS",
        route: "/products/digital-banking/pos",
        icon: "/icons/repository.svg",
        description: "Point of sale for merchants",
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
        description: "Photos tell our story clearly",
      },
      {
        label: "Video",
        route: "https://www.youtube.com/@CovenantMFB ",
        icon: "Video",
        description: "Watch our journey and impact",
      },
      {
        label: "News/Announcement",
        route: "/news",
        icon: "Newspaper",
        description: "What's new at the bank",
      },
      {
        label: "Corporate Social Responsibility (CSR)",
        route: "/news?tab=csr",
        icon: "/icons/Group.svg",
        description: "Empowering lives and our communities",
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
        route: "/help-center",
        icon: "HelpCircle",
        description: "Get support and reach us",
      },
      {
        label: "Forms & Downloads",
        route: "/forms",
        icon: "FileText",
        description: "Access essential banking forms here",
      },
      {
        label: "FAQ",
        route: "/faq",
        icon: "MessageCircleQuestion",
        description: "Find answers to important questions",
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
        route: "https://payment.covenantmfb.com.ng",
        icon: "GraduationCap",
        description: "Pay Covenant University fees easily",
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
        description: "Bank fast on your phone",
      },
      {
        label: "Internet banking",
        route: " https://ibank.covenantmfb.com",
        icon: "Globe",
        description: "Manage your account online easily",
      },
      {
        label: "Corporate Internet banking",
        route: "https://prime360.covenantmfb.com",
        icon: "Building2",
        description: "Secure corporate online banking access",
      },
    ],
  },
];
