import { ReactNode } from "react";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  slug: string;
  content: ReactNode;
}

export const allBlogPosts: Post[] = [
  {
    id: 1,
    title:
      "Covenant Microfinance Bank Ltd. Opens New Branch in Abeokuta, Ogun State",
    excerpt:
      "Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world...",
    imageSrc: "/image5.png",
    date: "October 23, 2024",
    slug: "new-branch-abeokuta",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <br />
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <br />
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
        <br />
        <p>
          Among the dignitaries present was the Olubara of Ibara, Oba Jacob
          Omolade, who praised the bank’s decision to establish a presence in
          Egba land, expressing confidence in its positive impact on the
          region’s financial stability.
          <p>
            Also speaking, Professor Abiodun Adebayo, representing Covenant
            University, described the bank as a “family bank” long anticipated
            by the university community. He expressed optimism that the new
            branch would replicate the success of its main office and prayed for
            continued wisdom, prosperity, and success.
          </p>
          <br />
          <p>
            The Honourable Commissioner for Urban and Regional Planning, Town
            Planner Olatunji Odunlami, further emphasized the branch’s potential
            to unlock financial opportunities in Abeokuta and across Ogun State.
            She reassured the community of the bank’s steadfast commitment to
            professionalism, integrity, and sustainable development, stating,
            “Our growth is intertwined with the growth of the communities we
            serve.” The Abeokuta branch is expected to strengthen community
            bonds, stimulate economic activity, and provide robust financial
            support to individuals and small business owners alike
          </p>
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Decoding the Psychology of Pricing Tiers",
    excerpt:
      "Pricing perception impacts decision-making. Learn how visual cues and strategic tiering influence customer choices...",
    imageSrc: "/image2.png",
    date: "16 Jun 2024",
    slug: "psychology-of-pricing",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Unlocking Flexible Pricing for SaaS Success",
    excerpt:
      "Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world...",
    imageSrc: "/image3.png",
    date: "16 Jun 2024",
    slug: "flexible-saas-pricing",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Decoding the Psychology of Pricing Tiers",
    excerpt:
      "Pricing perception impacts decision-making. Learn how visual cues and strategic tiering influence customer choices...",
    imageSrc: "/image4.png",
    date: "16 Jun 2024",
    slug: "psychology-of-pricing-2",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Starter Plans Tailored for Small Businesses",
    excerpt:
      "Starter plans offer cost-effective solutions tailored to small businesses. Find out how they enable growth without breaking the bank....",
    imageSrc: "/image1.png",
    date: "16 Jun 2024",
    slug: "starter-plans-smb",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Unlocking Flexible Pricing for SaaS Success",
    excerpt:
      "Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world.",
    imageSrc: "/image2.png",
    date: "16 Jun 2024",
    slug: "flexible-saas-pricing-2",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "The Future of Digital Banking Security",
    excerpt:
      "Exploring the next generation of security protocols that are making digital banking safer than ever before.",
    imageSrc: "/image3.png",
    date: "15 Jun 2024",
    slug: "digital-banking-security",
    content: (
      <>
        <p>
          Covenant Microfinance Bank Ltd. has expanded its footprint in
          Nigeria’s financial sector with the official opening of a new branch
          in Abeokuta, Ogun State, on October 22, 2024. The launch underscores
          the bank’s commitment to providing innovative, accessible, and
          customer-focused financial solutions across the country.
        </p>
        <p>
          The inauguration ceremony, attended by distinguished dignitaries and
          stakeholders, marked a major step in the bank’s mission to empower
          individuals and small businesses. Speaking at the event, the
          Chairperson, Deaconess Ebipre Okuyemi, noted that the branch
          represents more than physical growth—it is an opportunity to enhance
          financial inclusion and help the people of Abeokuta achieve their
          aspirations.
        </p>
        <p>
          “This branch will deliver tailored services to support both
          individuals and businesses in reaching their financial goals,” Okuyemi
          affirmed, while appreciating the trust of customers and the dedication
          of the bank’s Board, management, and staff.
        </p>
      </>
    ),
  },
];
