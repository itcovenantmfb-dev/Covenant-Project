type ContentPart = {
  type: "text" | "link" | "email" | "phone" | "title";
  content: string;
  href?: string;
};

export type UssdCardData = {
  lineContent?: ContentPart[];
  title?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
  };
};

export const ussdData: UssdCardData[] = [
  {
    lineContent: [
      { type: "title", content: "Registration Issues:" },
      { type: "text", content: " Send error details/ screenshot to " },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    lineContent: [{ type: "title", content: "Contact E-business Unit" }],
    contactInfo: {
      phone: "+234-08100716957",
      email: "hiebusiness@covenantmfb.com.ng",
    },
  },
  {
    lineContent: [
      { type: "title", content: "Log Failed Transactions:" },
      { type: "text", content: " Click " },
      { type: "link", content: "here", href: "/forms" },
      { type: "text", content: " to fill online complaint form" },
    ],
  },
  {
    lineContent: [
      { type: "title", content: "Forgot PIN:" },
      {
        type: "text",
        content: " Download PIN Reset Form, Fill, Scan and email to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
];
