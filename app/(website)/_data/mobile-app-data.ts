type ContentPart = {
  type: "text" | "link" | "email" | "phone";
  content: string;
  href?: string;
};

export type CardData = {
  content: ContentPart[];
  contactInfo?: {
    phone?: string;
    email?: string;
  };
};

export const topRowData: CardData[] = [
  {
    content: [
      {
        type: "text",
        content:
          "Forgot Username/Password/Secret Answer: Download PIN Reset Form, Fill, Scan and email to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    content: [
      {
        type: "text",
        content: "Registration Issues: Send error details/ screenshot to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    content: [
      {
        type: "text",
        content:
          "Limit Increase: Download Limit Increase Form, Fill, Scan and email to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
];

export const bottomRowCard: CardData = {
  content: [
    { type: "text", content: "Log Failed Transactions: Click " },
    { type: "link", content: "here", href: "#" },
    {
      type: "text",
      content: "\nto fill online complaint form or contact \nE-business Unit",
    },
  ],
  contactInfo: {
    phone: "+234-08100716957",
    email: "hiebusiness@covenantmfb.com.ng",
  },
};
