import { CardData } from "./mobile-app-data";

export const topRowData: CardData[] = [
  {
    content: [
      {
        type: "text",
        content: "Registration Issue: Send error details/ screenshot to ",
      },
      { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
    ],
  },
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
      content: " to fill online complaint form or contact E-business Unit ",
    },
  ],
  contactInfo: {
    phone: "+234-08100716957",
    email: "hiebusiness@covenantmfb.com.ng",
  },
};
