export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  id: number;
  credentials?: string;
  biography: React.ReactNode;
};

export const boardMembers: TeamMember[] = [
  {
    id: 1,
    name: "Adm. Dcns. \nEbipre \nOluyemi ",
    role: "Board Chairperson",
    imageUrl: "/Mask group.svg",
    credentials: "FCIA",
    biography: (
      <>
        <p>
          Adm. Dcns. Ebipre Oluyemi holds an M.Sc. in Banking and Finance from
          Bayero University, Kano, and a B.Sc. in Accounting from Ahmadu Bello
          University, Zaria.
        </p>

        <p>
          She has had a distinguished career in the banking industry, serving in
          various capacities at Ecobank. Over the years, she rose through the
          ranks to become Head of Branch Operations as a Senior Manager and also
          served as Head of Retail Banking Operations for the Lagos and South
          West Region. She is also a seasoned consultant and facilitator in
          banking operations.
        </p>

        <p>
          Beyond her contributions to the financial sector, she is the Executive
          Partner at Longrich BioScience International. She holds membership in
          several esteemed professional bodies including the Chartered Institute
          of Bankers of Nigeria, the Institute of Chartered Accountants of
          Nigeria, and the Chartered Institute of Administration of Nigeria.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Dr Barry \nRoberts,\nCRM",
    role: "Managing Director/CEO",
    imageUrl: "/Mask group (1).svg",
    credentials: "FICA",
    biography: (
      <>
        <p>
          Dr. Barry Roberts is the Managing Director/Chief Executive Officer of
          Covenant Microfinance Bank Ltd, a state-licensed MFB with Head Office
          in Ota, Ogun State.
        </p>

        <p>
          He holds a Ph.D. in Banking and Finance from Igbinedion University,
          Okada, Edo State (October 2020), with research interests in Corporate
          Governance, Foreign Aid, and Foreign Direct Investment. He had
          previously obtained an M.Sc. (Finance) from Lagos State University,
          Ojo (2006), a B.Sc. (Banking and Finance) from Tansian University,
          Umunya (2014), an HND (Banking and Finance) from Lagos State
          Polytechnic, Isolo (1999), and an OND (Banking and Finance) from Kwara
          State Polytechnic, Ilorin (1986).
        </p>

        <p>
          He is an experienced banker with nearly three decades of commercial
          and microfinance banking experience, which began in 1995 when he
          joined the erstwhile Equitorial Trust Bank Ltd. His professional
          banking experience traversed Internal Control and Compliance, Branch
          Operations and Service Delivery, Business Development, Credit, and
          Risk Management. He served at different times as Branch Operations
          Manager in Daleko (Lagos), Jos, Abuja, and Calabar branches of
          Equitorial Trust Bank Ltd, having previously served as Branch Manager
          in Alaba and Trade Fair branches of the Bank.
        </p>

        <p>
          Following the acquisition of Equitorial Trust Bank by Sterling Bank in
          2011, he was appointed the Regional Service Manager (Midwest) of
          Sterling Bank PLC in November 2011, with supervisory responsibilities
          over channel operations, service delivery, E-business, and compliance
          in the region—which comprised twelve branches in Edo and Delta
          States—a position he held until March 2017 when he left the Bank to
          pursue his interest in Risk Management training and consulting.
        </p>

        <p>
          In October 2023, he was appointed to lead the transformation of
          Covenant Microfinance Bank Ltd as the Managing Director/Chief
          Executive Officer, and since then, the Bank has been unstoppable in
          her transformation journey. From two branches after operating for
          twenty years, the Bank has opened three additional branches in
          Abeokuta and Akute in 2024, and Ifo in June 2025.
        </p>

        <p>
          Dr. Barry Roberts is a Chartered Risk Manager and a Chief Examiner
          with the Chartered Risk Management Institute of Nigeria (CRMI) for the
          CRM Professional Certification Examinations, and a member of the
          Education and Examinations Committee of the Compliance Institute of
          Nigeria (CIN). He is a Fellow of The West Africa Association of
          Customer Service Professionals (WAACSP), Fellow of the National
          Institute of Credit Administration (Chartered), and a Governing Board
          member of the Nigeria Customer Service Index (NCSI). He is also an
          alumnus of the Lagos Business School Executive Education Programs.
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Prof. \nUwalomwa \nUwuigbe",
    role: "Board Member",
    imageUrl: "/Mask group (2).svg",
    biography: (
      <>
        <p>
          Professor Uwalomwa Uwuigbe is a seasoned academic and accounting
          professional with a rich educational background and over two decades
          of teaching and research experience. He earned his B.Sc. in Accounting
          from Delta State University in 1998, followed by an MBA from the
          University of Benin in 2003, an M.Phil. from Covenant University in
          2005, and a Ph.D. in Accounting in 2011. He also holds an M.Sc. in
          Accounting from the University of Lagos, completed in 2012.
        </p>

        <p>
          Prof. Uwuigbe began his academic career during his National Youth
          Service at the Federal College of Education, Kastina, and joined
          Covenant University as a lecturer in 2004. He has since served the
          institution in various leadership capacities, including Head of the
          Department of Accounting, Chairman of the Student Discipline
          Committee, and Chair of multiple academic and research committees.
        </p>

        <p>
          An active researcher and postgraduate lecturer, he has supervised over
          100 undergraduate and postgraduate theses and remains a contributing
          voice in sustainability, integrated reporting, and forensic
          accounting. His academic work includes numerous journal articles, book
          chapters, and international conference presentations.
        </p>

        <p>
          He is a Fellow of the International Institute of Certified Forensic
          Investigation Professionals (FCFIP), and holds memberships with ACFE
          (USA), CITN, NIM, and the International Corporate Governance Network
          (ICGN), among others. Currently, he also serves on the Board of
          Covenant Microfinance Bank Ltd.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Prof.\n Chinonye \nLove Moses",
    role: "Board Member",
    imageUrl: "/Mask group (3).svg",
    biography: (
      <>
        <p>
          Prof. Chinonye Love Moses is an accomplished academic with a B.Sc. in
          Accounting (Second Class Upper) from the University of Jos (1991). She
          holds an MBA from the same university (1997), an M.Sc. in Management
          from the University of Lagos (2002), and a Ph.D. in Business
          Administration from Covenant University (2009).
        </p>

        <p>
          With decades of diverse teaching experience across institutions
          including the University of Jos, Plateau State Polytechnic, Delta
          State University, and Lagos State University, she joined Covenant
          University in 2003 and has served in various academic and
          administrative capacities since.
        </p>

        <p>
          Her areas of specialization include entrepreneurship (women, social,
          agro-), intrapreneurship, innovation, strategic and international
          management, consumer and organizational behavior, and microfinancing.
          A prolific researcher, she has published extensively in journals and
          edited volumes. Prof. Moses is a recipient of several academic honors
          and is a member of the Nigeria Institute of Management, Institute for
          Operations Research of Nigeria, and Academy of Management of Nigeria.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Prof.\n Kehinde \nAdetiloye",
    role: "Board Member",
    imageUrl: "/Mask group (4).svg",
    biography: (
      <>
        <p>
          Professor Kehinde Adekunle Adetiloye is a distinguished finance and
          policy expert with over three decades of combined experience spanning
          banking, financial regulation, consultancy, and academia. He is widely
          recognized for his strategic insights in risk management, financial
          markets, corporate governance, and sustainable finance.
        </p>

        <p>
          A Fellow of the Chartered Institute of Bankers of Nigeria (CIBN),
          Associate of the Chartered Institute of Stockbrokers (CIS), and
          Associate of the Chartered Risk Management Institute (CRMI), Professor
          Adetiloye has established a strong track record in board-level
          advisory, policy advocacy, and research impact. He is particularly
          skilled in advancing financial inclusion, strengthening banking
          operations, and driving regulatory and governance reforms.
        </p>

        <p>
          His professional journey includes two decades of service at the
          Federal Mortgage Bank of Nigeria (FMBN) and the defunct Federal
          Mortgage Finance Limited (FMFL), where he gained extensive expertise
          in financial sector development and housing finance. Transitioning to
          academia, he has excelled at Covenant University, Nigeria, where he
          has served in leadership roles such as Head of Department, Coordinator
          of Linkage Programmes, and Director at Covenant Microfinance Bank.
        </p>

        <p>
          As an academic and mentor with over 15 years of teaching, research,
          and postgraduate supervision, Professor Adetiloye specializes in
          financial markets, capital flows, risk management, and sustainable
          finance. His scholarly contributions include numerous publications in
          Scopus-indexed journals, curriculum development, and the successful
          guidance of PhD and postgraduate students.
        </p>

        <p>
          His excellence has been recognized with notable awards, including the
          Best Paper Award at the International Academy of African Business &
          Development Conference in Morocco (2012) and Best Lecturer of the Year
          at Covenant University (2008).
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Prof.\n Evans \nOsabuohien",
    role: "Board Member",
    imageUrl: "/Mask group (5).svg",
    biography: (
      <>
        <p>
          Prof. Evans Osabuohien is an accomplished economist and academic with
          over 21 years of experience in teaching, research, and policy
          advisory. He holds a Ph.D. in Economics from Covenant University,
          where he currently serves as Professor of Economics and former Head of
          the Department of Economics and Development Studies.
        </p>

        <p>
          His academic background also includes a B.Sc. from Ambrose Alli
          University and an M.Sc. in Economics from Covenant University. Prof.
          Osabuohien has completed research training and fellowships at
          prestigious global institutions in Germany, Sweden, Russia, United
          States, United Kingdom, Kenya and Tanzania, among others.
        </p>

        <p>
          As a prolific researcher, he has authored 5 books and over 215
          publications, including journal articles, and book chapters. His
          research focuses on development economics, institutional economics,
          agricultural and international economics, particularly in Africa.
        </p>

        <p>
          He has served as a resource person for various international
          organisations including the African Economic Research Consortium
          (AERC), UNCTAD, UNEP, UNU-WIDER among others.
        </p>

        <p>
          His editorial experience includes serving as the editor of key
          scholarly volumes such as the Handbook of Research on In-Country
          Determinants and Implications of Foreign Land Acquisitions.
        </p>

        <p>
          Prof. Osabuohien is a fellow and member of several professional and
          academic bodies, including the Nigerian Economic Society, Royal
          Economic Society (UK), African Growth and Development Policy Modeling
          Consortium (AGRODEP), Swedish Institute, Alexander von Humboldt (AvH)
          Foundation and German Academic Exchange Services (DAAD), as so on.
        </p>

        <p>
          Recognised for his leadership and innovation in academia, he has
          received multiple grants, awards, and invitations to international
          conferences and workshops. His work continues to shape economic
          thought and policy discussions within and beyond Africa. He is the
          Founding Chair of DePECOS Institutions and Development Research Centre
          (DeDeRC) where he coordinates the African Scholars Mentorship Network
          (ASMN) with over 1200 members across many African countries and
          beyond.
        </p>

        <p>He is married with children.</p>
      </>
    ),
  },
];

export const managementStaff: TeamMember[] = [
  {
    id: 1,
    name: "Ibukun Olaleye",
    role: "Head, Enterprise Risk Management & Recovery",
    imageUrl: "/Mask group (6).svg",
    biography: (
      <>
        <p>
          Ibukun Olaleye is a seasoned risk and finance professional with over
          two decades of experience spanning banking operations, internal audit,
          financial control, and enterprise risk management. A graduate of
          Banking and Finance, he currently leads the Bank’s risk and recovery
          functions, overseeing risk governance, regulatory compliance, credit
          monitoring, and strategic recovery efforts.
        </p>

        <p>
          He is a Member of the Chartered Risk Management Institute of Nigeria
          (CRMI), the National Institute of Credit Administration (NICA), and a
          Certified Microfinance Banker (CIBN). With deep expertise in risk
          analysis, internal controls, compliance, and fraud prevention, Mr.
          Olaleye plays a vital role in strengthening institutional resilience
          and fostering a strong risk-aware culture.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Oluwunmi \n Temidayo \nEsther",
    role: "Branch Manager, Ifo, Ogun State",
    imageUrl: "/Mask group (7).svg",
    biography: (
      <>
        <p>
          Olawumi Temidayo Esther currently serves as the Branch Manager of the
          Ifo branch in Ogun State, bringing over 12 years of in-depth
          experience across multiple roles within the banking sector. Throughout
          her career, she has demonstrated a consistent commitment to customer
          satisfaction and operational excellence.
        </p>

        <p>
          Her professional journey includes roles as Teller, Head Teller,
          Marketing Officer, Risk Officer, Head of Operations at the Sango
          branch, and Recovery Officer. Esther has built a solid reputation for
          her ability to manage cash flow, oversee teller operations, and
          resolve complex customer issues with efficiency and professionalism. 
        </p>

        <p>
          She is skilled in risk management, regulatory compliance, and
          promoting banking products and services while fostering a positive
          work culture. A strong leader, she has mentored and trained staff with
          a focus on upholding operational integrity and service excellence. 
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "Alowonle \nMichael \nOladimeji",
    role: "Branch Manager, Abeokuta, Ogun State",
    imageUrl: "/Mask group (8).svg",
    biography: (
      <>
        <p>
          Alowonle Michael Oladimeji is a seasoned banking professional with
          over 17 years of experience in the financial services industry. His
          career spans a broad spectrum of expertise, including branch
          operations, treasury management, credit administration, loan recovery,
          and regulatory compliance. Currently, he serves as the Branch Manager
          at Covenant Microfinance Bank’s Abeokuta Branch, where he provides
          strategic leadership and oversees the branch’s performance across
          deposit mobilization, credit growth, recovery processes, and customer
          service. Known for his pragmatic leadership style and deep
          understanding of the banking landscape, Michael ensures the alignment
          of branch objectives with the bank’s mission to deliver inclusive
          financial services.
        </p>

        <p>
          Before assuming his current role, he served as the Head of Financial
          Control, where he was instrumental in shaping and implementing the
          bank’s strategic financial plan. His leadership contributed to
          strengthened internal controls, improved financial reporting
          structures, and enhanced corporate governance.
        </p>

        <p>
          Michael holds a Higher National Diploma in Business Administration
          from the Federal Polytechnic, Ilaro, Ogun State, and is currently
          pursuing an MBA in Finance at Unicef University, Zambia.
        </p>

        <p>
          He is a member of several professional bodies, including the Chartered
          Institute of Bankers of Nigeria (MCIB), the Institute of Chartered
          Economists of Nigeria (ACE), the Institute of Credit Administration
          (FICA), the Institute of Chartered Accountants of Nigeria (ICAN), and
          the Compliance Institute of Nigeria (CIN).
        </p>

        <p>
          His key competencies include branch management, credit administration,
          financial control, treasury and investment management, regulatory
          compliance, team leadership, customer relationship management, and
          community-focused financial outreach.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Justina\n Meekness Okorie",
    role: "Head, Administration and Human Resources Department",
    imageUrl: "/Mask group (9).svg",
    biography: (
      <>
        <p>
          Justina Meekness Okorie is a seasoned banking and administrative
          professional with a solid academic foundation and extensive experience
          in the financial services sector. She holds a Diploma in Linguistics
          and a Bachelor of Education in Social and Extension Services from the
          University of Calabar. She furthered her academic journey by obtaining
          a Master’s degree in Community Development and Social Work from the
          University of Lagos.
        </p>

        <p>
          Her career in banking began in 2015 with Covenant Microfinance Bank.
          Since then, she has served in various capacities across multiple
          departments, showcasing her versatility and dedication to
          organizational growth. Currently, she serves as the Head of the
          Administration and Human Resources Department, where she leads
          strategic HR initiatives and oversees the bank’s administrative
          functions.
        </p>

        <p>
          Justina is also an active member of several professional bodies,
          including the Chartered Institute of Bankers of Nigeria (CIBN), the
          Chartered Institute of Administration of Nigeria, and the Chartered
          Institute of Human Resources Management (CIHRM). These affiliations,
          along with her educational background and practical experience,
          highlight her commitment to excellence in banking, administration, and
          community development.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Oyerinde\n Olawale",
    role: "Head, Financial Control",
    imageUrl: "/Mask group (10).svg",
    biography: (
      <>
        <p>
          Oyerinde Olawale is a dynamic and results-driven finance professional
          with over 17 years of progressive experience in the banking sector.
          His expertise spans across banking operations, enterprise risk
          management, compliance, financial control, and credit administration.
          Throughout his career, he has demonstrated a strong ability to lead
          cross-functional teams, streamline processes, and strengthen
          regulatory compliance frameworks.
        </p>

        <p>
          He has held several strategic roles including Head of Business
          Development, Head of Enterprise Risk Management and Recovery, and Head
          of Operations. His outstanding contributions earned him the Best Staff
          of the Year award in 2011—a testament to his dedication and
          performance excellence.
        </p>

        <p>
          Academically, he holds a Bachelor’s degree and is currently pursuing a
          Master’s degree. He is also professionally certified as an Associate
          Chartered Accountant (ACA), a Microsoft Certified Professional (MCP),
          and a Fellow of the Institute of Credit Administration (FICA).
        </p>

        <p>
          Olawale is an active member of several reputable professional bodies
          including the Institute of Chartered Accountants of Nigeria (ICAN),
          the Chartered Institute of Bankers of Nigeria (CIBN), and the National
          Institute of Credit Administration (NICA).
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "Fagbemi Alao\n Oladapo",
    role: "Head, Internal Control and Compliance",
    imageUrl: "/Mask group (11).svg",
    biography: (
      <>
        <p>
          Fagbemi Alao Oladapo is a seasoned finance and compliance professional
          with over two decades of experience in internal control, audit, and
          financial compliance within the banking sector. He currently serves as
          the Head of Internal Control and Chief Compliance Officer at Covenant
          Microfinance Bank, where he is responsible for overseeing regulatory
          compliance, internal control systems, and risk management frameworks.
        </p>

        <p>
          Over the years, Mr. Fagbemi has held various leadership roles across
          reputable financial institutions. He served as Head of Internal
          Control & Compliance at IRL Microfinance Bank Limited from December
          2020 to March 2022. Prior to that, he worked at Wema Bank Plc between
          April 2016 and September 2020 as the Resident Internal Control &
          Compliance Officer.
        </p>

        <p>
          His extensive tenure at Sterling Bank Plc spanned from 2006 to 2014,
          where he served in roles such as Regional Head of Internal Control for
          LM2 and the South West, Hub Leader, and Team Leader of Financial
          Controls. He also worked at Magnum Bank Plc (2002–2006) as Team
          Leader, Internal Audit, and began his professional journey at Dele
          Lemoboye & Co. (1996–2002) as Assistant Manager, Audit.
        </p>

        <p>
          Mr. Fagbemi holds a Higher National Diploma (HND) in Accountancy and
          is a qualified Associate Chartered Accountant (ACA) with the Institute
          of Chartered Accountants of Nigeria (ICAN). His experience,
          professional qualifications, and leadership in internal controls and
          compliance make him a valuable asset to the financial services sector.
        </p>
      </>
    ),
  },
  {
    id: 7,
    name: "Ayoola Ige",
    role: "Branch Manager, Canaanland",
    imageUrl: "/Mask group (12).svg",
    biography: (
      <>
        <p>
          Ige Paul Ayoola holds a Higher National Diploma (HND) in Accountancy
          from The Federal Polytechnic, Ado-Ekiti, and is currently pursuing his
          MCP certification. He also earned a certificate in Developing Your
          Leadership Style from the International Direct Selling Educational
          Institute (IDSEI). With over 11 years of experience in retail and SME
          banking operations, he brings a wealth of expertise to his role.
        </p>

        <p>
          Presently serving as Branch Manager at CMFB, Paul leads his team to
          achieve both individual and collective targets in loans, deposits, and
          other financial products of the bank. His leadership is focused on
          driving growth, operational efficiency, and customer satisfaction.
        </p>

        <p>
          He has participated in numerous seminars and workshops covering topics
          such as Customer Service, Agricultural Desk Operations, Branch
          Operations and Management, Team Building, Finance, and General
          Business Management. He has built a strong track record in credit
          administration, business development, sales, marketing, portfolio
          management, and risk management.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Adm. \nGabriel\n Osabohien",
    role: "Head, Banking Operations",
    imageUrl: "/Mask group (18).svg",
    biography: (
      <>
        <p>
          Gabriel Osabohien is a seasoned operations and risk management
          professional with decades of experience across banking, consulting,
          and community development sectors. He holds a Bachelor’s degree in
          Accountancy and an MBA in Financial Management. He is a Fellow of
          several prestigious Professional institutions, including the
          Association of Chartered Certified System Accountants–Global (USA),
          National Institute of Credit Administration, Chartered Institute of
          Administration, and Enterprise Risk Management Professionals, and has
          completed other development programs/Certifications from the
          Metropolitan School of Business and Management – UK, Lagos Business
          School (Pan-Atlantic University), and Asia Development Bank Institute
          (ADBI). He is also a Member of the Compliance Institute of Nigeria.
        </p>

        <p>
          Gabriel has made significant contributions through publications in
          esteemed international journals. He serves as a Board member and on
          the Editorial Team of the <em>Southern Perspective</em> scientific
          journal, <em>Austral</em>, and he also serves as a peer reviewer for
          various renowned international journals.
        </p>

        <p>
          Gabriel’s expertise spans operational strategy, internal control, team
          leadership, and technology-driven service optimization. At Stanbic
          IBTC Bank Plc, he was involved in transformational roles in internal
          control/audit, branch operations, centralized Operations (OPC),
          account services, investment, and verification. He pioneered and
          headed the bank’s centralized mandate processing unit (SigCap).
        </p>

        <p>
          As Head of Internal Audit and Risk Management at the Daily Telegraph
          Publishing Company, Gabriel designed and implemented enterprise-wide
          audit frameworks, advising the board on governance and internal
          control structures.
        </p>

        <p>
          At Perfect Investment and Consulting Services Ltd, he leads
          operational optimization, market innovation, and social impact
          programs, driving initiatives focused on economic scalability,
          sustainability, and community development.
        </p>

        <p>
          Gabriel Osabohien is currently Head of Banking Operations. He oversees
          Operations across the Bank, E-business, Treasury, and ICT departments.
          He brings a strategic skill set, including people management,
          innovation, business assurance, and scalability, as well as a proven
          ability to align operational risk and control with business growth. He
          is also involved in developing policy frameworks.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Oluwatoyin\n Bolujoko-Oluwole",
    role: "Branch Manager, Sango",
    imageUrl: "/Mask group (14).svg",
    credentials: "BSc, MSc, MCIB, MICA",
    biography: (
      <>
        <p>
          Oluwatoyin Bolujoko-Oluwole is a seasoned microfinance professional
          with over 12 years of experience in the industry. She holds a B.Sc. in
          Mass Communication from Madonna University, an MSc in Industrial
          Relations and Human Resource Management from Olabisi Onabanjo
          University, and professional certifications including MCIB and MICA.
        </p>

        <p>
          Her career spans leadership roles at Royal Trust MFB and Glory
          Microfinance Bank, where she pioneered innovative products, including
          Nigeria’s first customized debit card for a microfinance institution.
        </p>

        <p>
          At Covenant Microfinance Bank, she leads the Sango Branch, overseeing
          credit operations, risk management, financial inclusion initiatives,
          and customer relationship management. Known for her diligence and
          commitment, Oluwatoyin views her work in microfinance not just as a
          career but as a calling.
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Adetunji \nAdedeji Akanbi",
    role: "Head, Internal Audit",
    imageUrl: "/Mask group (15).svg",
    credentials: "B.A (HONS) English, ACA,MCIB",
    biography: (
      <>
        <p>
          Deji Adetunji is a Chartered Accountant with over twenty years of
          banking experience, which has taken him through a number of banks. He
          holds a Bachelor of Arts degree in English Language from the
          University of Ibadan.
        </p>

        <p>
          He is an Associate of the Institute of Chartered Accountants of
          Nigeria as well as the Chartered Institute of Personnel Management of
          Nigeria. He also holds the Certificate in MicroFinance of the
          Chartered Institute of Bankers of Nigeria.
        </p>

        <p>
          He has varied experience in Audit Practice, Insurance, and Banking.
        </p>

        <p>
          He is presently the Head of Internal Audit at Covenant Microfinance
          Bank.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Emmanuel \nAdeleke\n Adekeye",
    role: "Branch Manager,Akute",
    imageUrl: "/Mask group (16).svg",
    biography: (
      <>
        <p>
          Mr. Emmanuel Adeleke Adekeye is a consummate professional banker with
          expertise across Asset and Liability Management, Enterprise Risk
          Management, Compliance, Recovery, Fincon, Treasury, Banking Operations
          and Branch Banking.
        </p>

        <p>
          He holds an M.Sc. in Finance from Covenant University, Ota, and
          attended the Lagos Business School, completing the Manager As Coach
          (MAC) program.
        </p>

        <p>
          Emmanuel joined the Bank as an Executive Trainee in 2011, rose through
          the ranks, and has garnered over 14 years of banking experience,
          holding various leadership positions in the bank.
        </p>

        <p>
          He was appointed Sango Branch Manager in 2022, where he transformed
          the branch from a four-year loss position to profitability in less
          than six months. He is currently the Akute Branch Manager, Covenant
          Microfinance Bank Ltd.
        </p>

        <p>
          He is an Associate of the Chartered Institute of Bankers of Nigeria
          (ACIB), holds the Micro-finance Certification Programme (MCP), and is
          a Fellow of the National Institute of Credit Administration (FICA).
        </p>
      </>
    ),
  },
  {
    id: 12,
    name: "Odeyemi \nOluwakemi \nChristianah",
    role: "Head, Business Development",
    imageUrl: "/Mask group (17).svg",
    biography: (
      <>
        <p>
          Odeyemi Oluwakemi Christianah is a goal-driven and highly analytical
          sales coach with 15 years of experience spanning both Commercial
          Banking and Microfinance Banking. Over the course of her career, she
          has served as a Business Development Manager, Credit and Risk Manager,
          Customer Relationship Expert, Portfolio Manager, Product Manager, and
          Analyst. She possesses a proven ability to influence corporate growth
          through strategic, fact-based data and insights.
        </p>

        <p>
          Her professional expertise cuts across Commercial Banks and
          Microfinance Banks, where she has consistently demonstrated strong
          leadership, analytical skills, and teamwork. She holds a B.Sc. in
          Economics from Olabisi Onabanjo University, obtained in 2006.
        </p>

        <p>
          In her current role as Head of Business Development at Covenant
          Microfinance Bank, she is responsible for driving the overall sales
          performance of the bank. She develops sales strategies, implements
          initiatives to achieve revenue targets, and collaborates with other
          departments to ensure sustainable growth. She also manages a portfolio
          of high-net-worth individual clients by creating customized financial
          plans and addressing complex banking needs.
        </p>

        <p>
          In addition, she provides leadership and direction to multiple sales
          teams, sets departmental goals, conducts credit appraisals, and
          ensures that all activities align with the organization’s objectives.
        </p>

        <p>
          Academically and professionally, she holds a B.Sc. in Economics from
          Olabisi Onabanjo University. She is a Graduate Member of the Chartered
          Institute of Management of Nigeria (CIMN), a Member of the Chartered
          Institute of Bankers of Nigeria (CIBN), and a Member of the Chartered
          Institute of Loan & Risk Management of Nigeria (CILRM).
        </p>
      </>
    ),
  },
];
