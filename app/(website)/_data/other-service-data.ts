type ContentPart = {
  type: "text" | "link" | "email" | "phone";
  content: string;
  href?: string;
};

type ServiceItem = {
  content: ContentPart[];
  contactInfo?: {
    phone?: string;
    email?: string;
  };
};

export type ServiceCard = ServiceItem[];

export type SectionData = {
  id: string;
  title: string;
  cards: ServiceCard[];
};

export const otherServicesData: SectionData[] = [
  {
    id: "card-service",
    title: "Card Service",
    cards: [
      [
        {
          content: [
            {
              type: "text",
              content: "Block ATM: Put the Information on the Banner here.",
            },
          ],
        },
        {
          content: [
            {
              type: "text",
              content:
                "Forgot PIN: Download PIN Reset Form, Fill, Scan and email to ",
            },
            { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
          ],
        },
      ],
      [
        {
          content: [
            { type: "text", content: "Log Failed Transactions: Click " },
            { type: "link", content: "here", href: "#" },
            {
              type: "text",
              content:
                " to fill online complaint form or contact E-business Unit",
            },
          ],
          contactInfo: {
            phone: "+234-08100716957",
            email: "hiebusiness@covenantmfb.com.ng",
          },
        },
      ],
    ],
  },
  {
    id: "loans",
    title: "Loans",
    cards: [
      [
        {
          content: [
            { type: "text", content: "Confirm loan balance: send a mail to " },
            { type: "email", content: "hibizdev@covenantmfb.com.ng" },
            { type: "text", content: " with your Account information" },
          ],
        },
      ],
      [
        {
          content: [
            {
              type: "text",
              content:
                "Log Loan Issues: Click here to fill online complaint form or contact Biz Development Unit",
            },
          ],
          contactInfo: {
            phone: "+234-08100716957",
            email: "hibizdev@covenantmfb.com.ng",
          },
        },
      ],
    ],
  },
];
