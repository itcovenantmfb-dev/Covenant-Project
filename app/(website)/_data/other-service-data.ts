type ContentPart = {
  type: "text" | "link" | "email" | "phone" | "title";
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
            { type: "title", content: "Block ATM:" },
            {
              type: "text",
              content: " Put the Information on the Banner here.",
            },
          ],
        },
        {
          content: [
            { type: "title", content: "Forgot PIN:" },
            {
              type: "text",
              content: " Download PIN Reset Form, Fill, Scan and email to ",
            },
            { type: "email", content: "hiebusiness@covenantmfb.com.ng" },
          ],
        },
      ],
      [
        {
          content: [
            { type: "title", content: "Log Failed Transactions:" },
            { type: "text", content: " Click " },
            { type: "link", content: "here", href: "/forms" },
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
            { type: "title", content: "Confirm Loan Balance:" },
            { type: "text", content: "Send a mail to " },
            { type: "email", content: "hibizdev@covenantmfb.com.ng" },
            { type: "text", content: " with your Account information" },
          ],
        },
      ],
      [
        {
          content: [
            { type: "title", content: "Log Loan Issues:" },
            {
              type: "text",
              content:
                "Click here to fill online complaint form or contact Biz Development Unit",
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
