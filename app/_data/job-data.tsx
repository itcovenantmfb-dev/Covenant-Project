export interface Job {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  experience: "Entry-Level" | "Mid-Level" | "Senior";
  location: "Lagos, Nigeria" | "Abuja, Nigeria" | "Remote";
  category: "Technology" | "Finance & Accounting" | "Operations";
  slug: string;
  tags: string[];
  primaryResponsibilities: React.ReactNode;
  jobSpecification: React.ReactNode;
  experienceRequired: string;
  employmentType: "Full-Time" | "Part-Time" | "Contract";
  salary: string;
}

export const allJobs: Job[] = [
  {
    id: 1,
    title: "Operations and Administrative Assistant",
    description:
      "We need a reliable and detail-oriented person to join our team! If you thrive in a structured environment, enjoy keeping things organized, and have a knack for supporting smooth day-to-day operations.",
    imageSrc: "/career.png",
    experience: "Entry-Level",
    location: "Lagos, Nigeria",
    category: "Operations",
    slug: "ops-assistant-lagos",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer",
    description:
      "Lead the development of our next-generation digital banking platform. You will be responsible for building beautiful, responsive, and accessible user interfaces with React and Next.js.",
    imageSrc: "/career.png",
    experience: "Senior",
    location: "Remote",
    category: "Technology",
    slug: "senior-frontend-engineer",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 3,
    title: "Financial Analyst",
    description:
      "Join our finance team to provide data-driven insights that guide our strategic decisions. A strong background in financial modeling and reporting is required.",
    imageSrc: "/career.png",
    experience: "Mid-Level",
    location: "Abuja, Nigeria",
    category: "Finance & Accounting",
    slug: "financial-analyst-abuja",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 4,
    title: "Operations and Administrative Assistant",
    description:
      "Join our finance team to provide data-driven insights that guide our strategic decisions. A strong background in financial modeling and reporting is required.",
    imageSrc: "/career.png",
    experience: "Entry-Level",
    location: "Abuja, Nigeria",
    category: "Operations",
    slug: "ops-assistant-abuja",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 5,
    title: "Customer Support Specialist",
    description:
      "Join our finance team to provide data-driven insights that guide our strategic decisions. A strong background in financial modeling and reporting is required.",
    imageSrc: "/career.png",
    experience: "Entry-Level",
    location: "Remote",
    category: "Operations",
    slug: "customer-support-remote",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 6,
    title: "Lead Backend Engineer",
    description:
      "Join our finance team to provide data-driven insights that guide our strategic decisions. A strong background in financial modeling and reporting is required.",
    imageSrc: "/career.png",
    experience: "Senior",
    location: "Lagos, Nigeria",
    category: "Technology",
    slug: "lead-backend-engineer",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
  {
    id: 7,
    title: "Junior Accountant",
    description:
      "Join our finance team to provide data-driven insights that guide our strategic decisions. A strong background in financial modeling and reporting is required.",
    imageSrc: "/career.png",
    experience: "Entry-Level",
    location: "Lagos, Nigeria",
    category: "Finance & Accounting",
    slug: "junior-accountant",
    tags: ["Mid-level", "General", "Medical"],
    primaryResponsibilities: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure data integrity and efficient
        retrieval. Using version control systems like Git to manage code changes
        and collaborate with other developers.
      </p>
    ),
    jobSpecification: (
      <p>
        Designing and implementing user interfaces using HTML, CSS, and
        JavaScript frameworks like React or Angular. Building and maintaining
        server-side application logic, databases, and APIs using technologies
        such as Node.js, Python, Ruby, or Java. Designing, implementing, and
        managing databases (SQL or NoSQL) to ensure...
      </p>
    ),
    experienceRequired: "Minimum 3 Years",
    employmentType: "Full-Time",
    salary: "₦300,000",
  },
];
