type ContentPart = {
  type: "text" | "link" | "email" | "phone" | "ussd";
  content: string;
  href?: string;
};

type ServiceItem = {
  content: ContentPart[];
  subContent?: ContentPart[];
  contactInfo?: {
    phone?: string;
    email?: string;
  };
};

export type ServiceCardData = {
  title: string;
  items: ServiceItem[];
};

export const servicesData: ServiceCardData[] = [
  {
    title: "Block Account",
    items: [
      {
        content: [
          { type: "text", content: "Dial " },
          { type: "ussd", content: "*566*44*911#" },
          { type: "text", content: " on any phone and follow the prompt" },
        ],
      },
      {
        content: [
          { type: "text", content: "Click " },
          { type: "link", content: "here", href: "/forms" },
          { type: "text", content: " to Fill online block form" },
        ],
      },
      {
        content: [
          { type: "text", content: "send a mail to " },
          {
            type: "email",
            content: "hicsu@covenantmfb.com.ng",
            href: "mailto:hicsu@covenantmfb.com.ng",
          },
          {
            type: "text",
            content:
              " with your Account information stating the reason why you want to block your account.",
          },
        ],
      },
    ],
  },
  {
    title: "Update Account",
    items: [
      {
        content: [
          { type: "text", content: "Download the Account Update form " },
          { type: "link", content: "here", href: "/forms" },
          {
            type: "text",
            content:
              ", fill, attach supporting documents (Valid ID, Recent Passport, Utility Bill, BVN, NIN Slip, TIN for Corporate Accounts etc) and scan to ",
          },
          {
            type: "email",
            content: "hicsu@covenantmfb.com.ng",
            href: "mailto:hicsu@covenantmfb.com.ng",
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        content: [{ type: "text", content: "Activate Dormant Account" }],
      },
      {
        content: [{ type: "text", content: "Request Statement" }],
      },
      {
        content: [
          { type: "text", content: "Log Failed Transactions/Balance Issues:" },
        ],
        subContent: [
          { type: "text", content: "Click " },
          { type: "link", content: "here", href: "/forms" },
          {
            type: "text",
            content:
              " to fill online complaint form or Contact Customer Service",
          },
        ],
        contactInfo: {
          phone: "+234-08100716957",
          email: "hicsu@covenantmfb.com.ng",
        },
      },
    ],
  },
];
