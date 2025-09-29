"use client";

import React from "react";

const AmlPolicyContent = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          Covenant Microfinance Bank Ltd. (CMFB) is dedicated to maintaining the
          highest standards of integrity and transparency. We are committed to
          preventing our banking and financial services from being used for
          money laundering, terrorist financing, or any other illicit
          activities.
        </p>

        <p className="mb-6">
          Our comprehensive AML/CFT program is founded on a commitment to full
          compliance with both the spirit and the letter of all applicable
          domestic and international laws, regulations, and guidelines —
          including the Central Bank of Nigeria (CBN) AML/CFT/CPF Regulations
          2022 and the Money Laundering (Prohibition) Act.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Key Elements of Our Policy include:
        </h2>
        <p className="mb-4">
          Robust Internal Controls: We have established sound internal policies,
          procedures, and controls to mitigate the risks of money laundering and
          terrorist financing.{" "}
        </p>

        <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Customer Due Diligence (CDD):</strong> We conduct thorough
            Customer Identification Programs (CIP) and apply ‘Know Your
            Customer’ (KYC) principles to verify the identity of all clients.
            This ensures we have a clear understanding of our customers and
            their business activities.
          </li>
          <li>
            <strong>Suspicious Activity Monitoring and Reporting:</strong> Our
            staff is trained to identify and report suspicious transactions and
            activities to the relevant regulatory and law enforcement
            authorities promptly.
          </li>
          <li>
            <strong>Continuous Training:</strong> We provide ongoing training
            for all employees to ensure they are aware of and adhere to the
            latest AML/CFT regulations and best practices.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We fully cooperate with all law
            enforcement agencies within the limits of confidentiality rules,
            actively supporting the global fight against financial crime.
          </li>
          <li>
            <strong>Robust Internal Controls:</strong> We have established sound
            internal policies, procedures, and controls to mitigate the risks of
            money laundering and terrorist financing.
          </li>
        </ul>

        <p>
          By upholding these principles, Covenant Microfinance Bank aims to
          protect the integrity of the financial system and maintain a high
          reputation for professionalism and ethical conduct.
        </p>
      </div>
    </section>
  );
};

export default AmlPolicyContent;
