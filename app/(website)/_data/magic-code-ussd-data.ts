type ContentPart = {
  type: "text" | "link" | "email" | "phone";
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
      {
        type: "text",
        content: "Registration Issues: Send error details/ screenshot to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
  {
    title: "Contact E-business Unit",
    contactInfo: {
      phone: "+234-08100716957",
      email: "hiebusiness@covenantmfb.com.ng",
    },
  },
  {
    lineContent: [
      { type: "text", content: "Log Failed Transactions: Click " },
      { type: "link", content: "here", href: "#" },
      { type: "text", content: " to fill online complaint form" },
    ],
  },
  {
    lineContent: [
      {
        type: "text",
        content:
          "Forgot PIN: Download PIN Reset Form, Fill, Scan and email to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
];
