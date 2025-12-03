type ContentPart = {
  type: "text" | "link" | "email" | "phone" | "title";
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
      { type: "title", content: "Forgot Username/Password/Secret Answer" },
      {
        type: "link",
        content: "Download PIN Reset Form",
        href: "/forms",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    content: [
      { type: "title", content: "Registration Issues" },
      { type: "text", content: " Send error details/ screenshot to " },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    content: [
      { type: "title", content: "Limit Increase" },
      {
        type: "link",
        content: "Download Limit Increase Form, ",
        href: "/forms",
      },
      { type: "text", content: " Fill, Scan and email to " },

      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
];

export const bottomRowCard: CardData = {
  content: [
    { type: "title", content: "Log Failed Transactions" },
    { type: "text", content: " Click " },
    { type: "link", content: "here", href: "/forms" },
    {
      type: "text",
      content: " to fill online complaint form or contact E-business Unit",
    },
  ],
  contactInfo: {
    phone: "+234-08100716957",
    email: " hiebusiness@covenantmfb.com.ng",
  },
};
