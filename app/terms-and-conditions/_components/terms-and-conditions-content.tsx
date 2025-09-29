"use client";

import React from "react";

const TermsAndConditionsContent = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-gray-700 leading-relaxed">
        {/* Section: General */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">General</h2>
        <p className="mb-4">
          These Terms and Conditions (“Agreement”) govern your use of the
          Covenant Microfinance Bank Limited (“Covenant Microfinance Bank” or
          “the Bank”) information service (the “Service”), including Decision
          Areas. Additional terms may apply to specific sections of the Service,
          and together with this Agreement, they form the full terms governing
          your use.
        </p>
        <p>
          Covenant Microfinance Bank reserves the right to modify this Agreement
          at any time. Changes take effect immediately upon publication on the
          Service. Continued use of the Service after changes have been posted
          constitutes your acceptance of the revised terms. If you do not agree
          to these terms, you must stop using the Service immediately.
        </p>

        {/* Section: Use of Content */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Use of Content
        </h2>
        <p className="mb-4">
          The Service contains information, software, graphics, photos, videos,
          links, and other materials (collectively, “Content”), which are
          protected by copyright, trademark, and other proprietary rights owned
          by Covenant Microfinance Bank or third parties.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Content is provided for personal, non-commercial use only.</li>
          <li>
            You may not modify, distribute, reproduce, sell, publish, or exploit
            any Content without prior permission, except as expressly allowed by
            this Agreement.
          </li>
          <li>
            Downloadable software may not be reverse-engineered unless
            specifically authorized by the copyright holder.
          </li>
          <li>
            You may post Content you own, Content in the public domain, or
            Content you are authorized to use. By posting, you grant Covenant
            Microfinance Bank a royalty-free right to edit, copy, publish, and
            distribute such Content in any medium.
          </li>
          <li>
            You may download Content for personal, non-commercial use provided
            copyright notices are preserved. Storing or redistributing large
            portions of Content without authorization is prohibited.
          </li>
        </ul>

        {/* Section: No Endorsement */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          No Endorsement
        </h2>
        <p className="mb-4">
          Covenant Microfinance Bank does not guarantee or endorse the accuracy,
          reliability, or opinions expressed in Content provided by
          third-parties. You may see links to external sites ("External Sites").
          Covenant Microfinance Bank is not responsible for the availability,
          accuracy, or content of these External Sites. Concerns about any
          External Site should be directed to its administrator.
        </p>

        {/* Section: Indemnity */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Indemnity</h2>
        <p>
          You agree to indemnify and hold Covenant Microfinance Bank, its
          affiliates, officers, directors, agents, licensors, and service
          providers harmless from any claims, losses, costs, or damages
          (including legal fees) arising from your use of the Service, including
          unauthorized use of your account. The Bank may assume exclusive
          defense of any matter subject to indemnification, in which case you
          agree to cooperate with its defense.
        </p>

        {/* Section: Disclaimer & Liability */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Disclaimer of Warranties & Limitation of Liability
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            The Service and Content are provided “as is” and “as available”,
            without warranties of any kind, express or implied.
          </li>
          <li>
            Covenant Microfinance Bank does not guarantee uninterrupted,
            error-free service or that Content is virus-free.
          </li>
          <li>
            You assume full responsibility for your use of the Service and
            reliance on its Content.
          </li>
          <li>
            Covenant Microfinance Bank shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from use of,
            or inability to use, the Service.
          </li>
        </ul>

        {/* Section: Liability Instruments */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Liability Instruments
        </h2>
        <p>
          All liability instruments issued or purported to be issued by Covenant
          Microfinance Bank (e.g., Guarantees, Bonds, Letters of Credit, etc.)
          must be independently verified in writing by the Bank’s Company
          Secretary or Legal Adviser. The Bank shall not be responsible for any
          loss or damage resulting from reliance on unverified or
          unauthenticated instruments.
        </p>

        {/* Section: BVN */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Bank Verification Number (BVN)
        </h2>
        <p className="mb-4">
          By providing your BVN, you authorize Covenant Microfinance Bank Ltd to
          collect and store your data from the BVN database as part of Know Your
          Customer (KYC) requirements.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Your BVN data will be treated confidentially and used to prevent
            fraud, with disclosure only to CBN-approved stakeholders.
          </li>
          <li>
            The Bank reserves the right to decline account or wallet
            applications at its discretion, including when applicants appear on
            sanction lists or BVN watchlists.
          </li>
          <li>
            Additional documents may be requested at account opening or during
            use of the Service.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TermsAndConditionsContent;
