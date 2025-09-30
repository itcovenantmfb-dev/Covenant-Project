"use client";
import React from "react";
import SectionPill from "./section-pill";
import { boardMembers, managementStaff } from "./team-data";
import Image from "next/image";

const MeetTheTeamSection = () => {
  return (
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
            {boardMembers.map((member) => (
              <div key={member.id} className="text-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={220}
                  height={220}
                  // className="w-[180px] h-[270px] sm:w-[200px] sm:h-[250px] lg:w-[220px] lg:h-[250px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-600 mb-8">
            Management Staff
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {managementStaff.map((member) => (
              <div key={member.id} className="text-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={220}
                  height={250}
                  // className="w-[140px] h-[250px] sm:w-[160px] sm:h-[250px] lg:w-[200px] lg:h-[250px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
