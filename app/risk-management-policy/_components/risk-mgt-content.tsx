"use client";

import React from "react";

const RiskManagementPolicyContent = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-gray-700 leading-relaxed">
        {/* Intro Paragraph */}
        <p className="mb-6">
          The Enterprise Risk Management (ERM) Policy provides a structured
          framework for identifying, assessing, managing, and monitoring risks
          that could affect the organization's ability to achieve its
          objectives. It ensures that risk management is embedded into
          decision-making, planning, and daily operations.
        </p>

        {/* Section: Purpose */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Purpose</h2>
        <p className="mb-4">The policy aims to:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Promote a consistent and proactive approach to risk management
            across all levels.
          </li>
          <li>
            Safeguard assets, reputation, stakeholders, and long-term
            sustainability.
          </li>
          <li>
            Enhance strategic and operational decisions while ensuring
            compliance with applicable laws, regulations, and standards.
          </li>
        </ul>

        {/* Section: Scope */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Scope</h2>
        <p>
          The ERM Policy applies across all departments, business units,
          projects, and activities within the organization. Every employee —
          from the Board to operational staff — shares responsibility for
          identifying, reporting, and managing risks in their area of work.
        </p>

        {/* Section: Risk Management Framework */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Risk Management Framework
        </h2>
        <p className="mb-4">
          The policy follows international standards (e.g., ISO 31000) and
          includes the following core steps:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Risk Identification:</strong> Recognizing internal and
            external threats and opportunities that may impact objectives.
          </li>
          <li>
            <strong>Risk Assessment:</strong> Analyzing likelihood and impact to
            prioritize risks for action.
          </li>
          <li>
            <strong>Risk Response:</strong> Selecting appropriate strategies —
            avoidance, mitigation, transfer, or acceptance.
          </li>
          <li>
            <strong>Monitoring & Reporting:</strong> Regular review, tracking,
            and transparent communication of risk status.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> Learning from incidents and
            near-misses to strengthen organizational resilience.
          </li>
        </ul>

        {/* Section: Roles and Responsibilities */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Roles and Responsibilities
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Board of Directors:</strong> Provides oversight, approves
            risk appetite, and ensures accountability at the highest level.
          </li>
          <li>
            <strong>Executive Management:</strong> Implements risk strategies,
            integrates ERM into daily operations, and ensures policy compliance.
          </li>
          <li>
            <strong>Risk Management Committee:</strong> Coordinates
            enterprise-wide risk processes, evaluates risk reports, and advises
            leadership.
          </li>
          <li>
            <strong>Employees:</strong> Identify and report risks in their areas
            of work, and follow risk controls in day-to-day activities.
          </li>
        </ul>

        {/* Section: Risk Categories */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Risk Categories
        </h2>
        <p>
          Key risk categories include: strategic, operational, financial,
          compliance, reputational, technological, and environmental risks. The
          organization also considers emerging risks and opportunities. changes.
        </p>

        {/* Section: Reporting & Communication */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Reporting & Communication
        </h2>
        <p className="mb-4">
          A clear reporting structure ensures timely escalation of risks.
          Regular risk registers, dashboards, and reviews are maintained, and
          results are communicated across all levels.
        </p>

        {/* Section: Conclusion */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Conclusion
        </h2>
        <p>
          The ERM Policy establishes a culture of risk awareness,
          accountability, and continuous improvement. By embedding risk
          management into the organization’s strategy and daily operations,
          Covenant Microfinance Bank Ltd supports sustainable growth and builds
          resilience against uncertainties.
        </p>
      </div>
    </section>
  );
};

export default RiskManagementPolicyContent;
