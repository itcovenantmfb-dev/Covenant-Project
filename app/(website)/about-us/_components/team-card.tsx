"use client";

import React from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { TeamMember } from "../../_data/team-data";

// --- The Reusable Biography Modal ---
interface BiographyModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BiographyModal: React.FC<BiographyModalProps> = ({
  member,
  isOpen,
  onClose,
}) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-[90vw] max-w-3xl p-0 rounded-2xl bg-gray-50 flex flex-col border-none"
        showCloseButton={false}
      >
        <DialogHeader className="bg-[#0c3c26] rounded-t-2xl p-4 text-left flex-shrink-0 relative">
          <DialogTitle className="text-xl font-bold text-[#a3d960]">
            {member.name}
            {member.credentials && (
              <span className="ml-2 font-normal text-gray-300 text-sm whitespace-pre-line">
                {member.credentials}
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300 mt-1">
            {member.role}
          </DialogDescription>
        </DialogHeader>

        <div className="py-2 px-6 bg-gray-50 rounded-b-2xl max-h-[70vh] overflow-y-auto">
          <div className="text-base text-gray-500 leading-relaxed space-y-4">
            {member.biography || (
              <p className="text-gray-500 italic">Biography not available.</p>
            )}
          </div>
        </div>
        <DialogClose asChild>
          <button
            type="button"
            className="absolute top-4 right-4 flex items-center justify-center h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          >
            <X className="h-5 w-5 text-white/80 bg-white-600" />
            <span className="sr-only">Close</span>
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

// --- The Reusable Team Member Card ---
interface TeamMemberCardProps {
  member: TeamMember;
  onViewBio: (member: TeamMember) => void;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onViewBio,
}) => {
  return (
    <div className="flex w-auto max-w-[350px] items-stretch rounded-2xl bg-[#FFFFFF] p-3 shadow-sm ring-1 ring-gray-900/5">
      <div className="relative h-40 w-40 flex-shrink-0">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="rounded-xl"
        />
      </div>

      <div className="ml-4 flex justify-between flex-grow flex-col ">
        <div>
          <h3 className="text-lg font-bold text-green-900 whitespace-pre-line leading-tight">
            {member.name}
          </h3>
          {member.credentials && (
            <p className="mt-1 text-sm font-medium text-gray-700">
              {/* ({member.credentials}) */}
            </p>
          )}
          <p className=" text-sm text-gray-500">{member.role}</p>
        </div>

        <div className="">
          <button
            onClick={() => onViewBio(member)}
            className="rounded-lg bg-[#1D9B5E] px-2 py-1 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 w-[140px]"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};
