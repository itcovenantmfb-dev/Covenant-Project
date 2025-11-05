export interface Form {
  id: number;
  title: string;
  description: string;
  category: "Accounts" | "Credits" | "Electronic" | "ATM/Debit" | "Others";
  fileType: string;
  fileSize: string;
  downloadLink: string; // Path to the PDF file in your /public folder
}

export const allForms: Form[] = [
  {
    id: 1,
    title: "Individual Current Account Opening Form",
    description:
      "For individuals opening a personal current account with Covenant Microfinance Bank. Provides basic details and identification to begin banking with ease.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individual-current.pdf",
  },
  {
    id: 2,
    title: "Individual Account Update Form",
    description:
      "To request changes to your existing individual account. Submit updated contact, identification, or personal information to keep your profile current.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individual-update.pdf",
  },
  {
    id: 3,
    title: "Individual Savings Account Opening Form",
    description:
      "Designed for individuals who wish to start a savings account. Provides necessary details to join a simple, interest-earning savings plan.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individual-savings.pdf",
  },
  {
    id: 4,
    title: "Shiloh Savings Account Opening Form",
    description:
      'For opening a "Shiloh" savings account with special benefits. Submit your information to enjoy features unique to that account scheme.',
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/shiloh-savings.pdf",
  },
  {
    id: 5,
    title: "Corporate Current Account Opening Form",
    description:
      "For companies or organizations to open a current account. Provides business documentation, director details, and information for activation.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-current.pdf",
  },

  {
    id: 6,
    title: "Corporate Account Update Form",
    description:
      "Use to update corporate account details. Submit changes to business address, authorized signatories, or corporate information for record maintenance.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-account-update.pdf",
  },
  {
    id: 7,
    title: "Sole Proprietorship Account Opening Form",
    description:
      "For sole proprietors to open business accounts under their name. Supply business info, owner details, and required documentation for activation.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/sole-proprietorship.pdf",
  },

  {
    id: 8,
    title: "Covenant Children’s Education Form",
    description:
      "To open an education savings account for children. Provide child’s and guardian’s details to begin saving toward educational goals.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/covenant-children.pdf",
  },

  {
    id: 9,
    title: "Fixed Deposit Account Opening Form",
    description:
      "For customers wishing to place funds in a fixed deposit. Select a tenure and deposit amount to earn higher returns securely.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/fixed-deposit.pdf",
  },
  {
    id: 10,
    title: "Joint Account Opening Form",
    description:
      "To open a joint account with two or more individuals. Provide each party’s information and consent to share access and liability.",
    category: "Accounts",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/joint-account.pdf",
  },

  {
    id: 11,
    title: "Corporate Credit Application Form",
    description:
      "For corporate entities applying for credit or loan facilities. Provide financials, business plans, and assurances to support credit approval.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-credit.pdf",
  },
  {
    id: 12,
    title: "Overdraft Facility Application Form",
    description:
      "To apply for an overdraft on an existing account. Submit account details, income proof, and justification for the overdraft facility.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/overdraft-facility.pdf",
  },

  {
    id: 13,
    title: "Individual Credit Application Form",
    description:
      "For individuals seeking personal credit or loan. Provide employment, income, and guarantor details to support your application.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individaul-credit.pdf",
  },

  {
    id: 14,
    title: "Standing Order Form",
    description:
      "To instruct regular automatic payments or transfers from your account. Fill in beneficiary, amount, and frequency to automate payments.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/satnding-order.pdf",
  },
  {
    id: 15,
    title: "DAAP (Dream Asset Acquisition Product)",
    description:
      "For applying to the DAAP loan product. Submit necessary details about the asset, repayment plan, and personal information.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/dream-assest.pdf",
  },
  {
    id: 16,
    title: "Guarantee / Indemnity Form",
    description:
      "For guarantors to support someone’s loan. Provide your details and agreement to indemnify in case of default by the borrower.",
    category: "Credits",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/guarantee-indemnity.pdf",
  },

  {
    id: 17,
    title: "Funds Transfer Request Form",
    description:
      "To request internal or external transfers from your account. Specify recipient, amount, and account details to complete transfer request.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/funds-transfer.pdf",
  },

  {
    id: 18,
    title: "Indemnity Form for Token Release",
    description:
      "To request release of a security token after loss or liability. Provide indemnity details and identification to receive replacement.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/indenmity-form.pdf",
  },

  {
    id: 19,
    title: "Electronic Banking Agreement",
    description:
      "To enroll in electronic banking services. Agree to terms and provide consent to use online and mobile banking features.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/electronic-banking.pdf",
  },

  {
    id: 20,
    title: "SMS Alert Application Form",
    description:
      "To activate SMS alerts for your account transactions. Provide mobile number and preferences to receive notifications securely.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/sms-alert.pdf",
  },

  {
    id: 21,
    title: "Hardware Token Application Form",
    description:
      "To apply for a physical security token for online banking. Provide necessary identification and account information to request the device.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/hardware-token.pdf",
  },

  {
    id: 22,
    title: "ATM Enrolment Form",
    description:
      "For customers to enroll in ATM services. Provide account and identity information to enable ATM access on your account.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/atm-enrolment.pdf",
  },

  {
    id: 23,
    title: "Corporate Internet Banking Application",
    description:
      "For businesses to register for internet banking. Submit company, signatory, and security details to gain online access.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-internet.pdf",
  },

  {
    id: 24,
    title: "Transfer Limit Form",
    description:
      "To request or change transaction transfer limits on your account. Specify desired limits and reasons for approval.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/transfer-limit.pdf",
  },

  {
    id: 25,
    title: "Individual Internet Banking",
    description:
      "To sign up for personal internet banking. Provide account and identity information to enable online access and services.",
    category: "Electronic",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individaul-internet.pdf",
  },

  {
    id: 26,
    title: "Verve Debit Card Request Form",
    description:
      "To request issuance of a Verve debit card. Provide your account and identity information so the bank can issue your card.",
    category: "ATM/Debit",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/verve-debit.pdf",
  },
  {
    id: 27,
    title: "Mastercard Prepaid Request Form",
    description:
      "To apply for a prepaid Mastercard. Provide personal and funding information to activate the prepaid card service.",
    category: "ATM/Debit",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/mastercard-prepaid.pdf",
  },

  {
    id: 28,
    title: "ATM Dispense Error Form",
    description:
      "To report issues if the ATM fails to dispense cash properly. Give transaction details and your account information for investigation.",
    category: "ATM/Debit",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/atm-dispense.pdf",
  },

  {
    id: 29,
    title: "Corporate KYC Update Form",
    description:
      "For corporate customers to update Know-Your-Customer details. Provide new documentation, addresses, and compliance info for record update.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-kyc.pdf",
  },

  {
    id: 30,
    title: "Corporate Account Reactivation Form",
    description:
      "To reactivate a dormant corporate account. Provide organizational information, authorized signatories, and compliance documents to restore service.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/corporate-account.pdf",
  },

  {
    id: 31,
    title: "Reference Letter Sample",
    description:
      "Template for requesting or issuing reference letters. Provide basic details to generate a letter supporting credit or business needs.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/refernce-letter-sampl.pdf",
  },

  {
    id: 32,
    title: "Individual KYC Update Form",
    description:
      "For individuals to update KYC information. Submit updated identification, address, or personal data to stay compliant and current.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individaul-kyc-update.pdf",
  },

  {
    id: 33,
    title: "Individual Account Reactivation Form",
    description:
      "To reactivate a dormant individual account. Provide identity details and account info to resume usage and access.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/individaul-account.pdf",
  },

  {
    id: 34,
    title: "BVN Enrolment Form",
    description:
      "To enroll for your Bank Verification Number (BVN). Provide necessary personal and biometric information to register for BVN service.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/bvn-enrolment.pdf",
  },

  {
    id: 35,
    title: "BVN Update Form",
    description:
      "To update or correct BVN information. Submit corrections and supporting documents to update your BVN record accurately.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/bvn-update.pdf",
  },

  {
    id: 36,
    title: "Cheque Book Requisition Form",
    description:
      "To request issuance of a cheque book for your account. Specify number of leaves and account details to fulfil your request.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/cheque-book.pdf",
  },

  {
    id: 37,
    title: "Statement of Account Form",
    description:
      "To request an official statement of your account history. Provide period and account details to retrieve your statement in document form.",
    category: "Others",
    fileType: "PDF",
    fileSize: "235kb",
    downloadLink: "/forms/statement-of-account.pdf",
  },
];
