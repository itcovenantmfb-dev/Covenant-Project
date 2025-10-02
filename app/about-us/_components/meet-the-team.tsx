"use client";
import React, { useState } from "react";
import SectionPill from "./section-pill";
import {
  boardMembers,
  managementStaff,
  TeamMember,
} from "../../_data/team-data";
import Image from "next/image";
import { TeamMemberCard, BiographyModal } from "./team-card";

const MeetTheTeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleViewBio = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  return (
    <>
      <section
        data-aos="fade-up"
        className="bg-[#F8FBF8] py-12 sm:py-16 lg:py-24 px-4 sm:px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-auto max-w-5xl text-center">
            <SectionPill>Meet The Team</SectionPill>
            <p className="mt-4 text-base sm:text-lg lg:text-[28px] font-bold text-center lg:text-start leading-relaxed">
              At the heart of everything we do is a passionate and experienced
              team, dedicated to driving our mission forward. Each member brings
              unique expertise and energy, working together to create meaningful
              impact and lasting change.
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-600 mb-8">
              Board Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
              {/* <div className="flex flex-wrap justify-center gap-8"> */}
              {boardMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onViewBio={handleViewBio}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-600 mb-8">
              Management Staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 justify-items-center">
              {/* <div className="flex flex-wrap justify-center gap-8"> */}
              {managementStaff.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onViewBio={handleViewBio}
                />
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      <BiographyModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default MeetTheTeamSection;
