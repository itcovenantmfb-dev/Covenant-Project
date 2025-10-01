"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "../../_data/team-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

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
        className="max-w-3xl p-0 rounded-2xl"
        showCloseButton={false}
      >
        <DialogHeader className="bg-[#0c3c26] p-5 rounded-t-2xl text-left">
          <DialogTitle className="text-xl font-bold text-[#a3d960]">
            {member.name}
            {member.credentials && (
              <span className="ml-2 font-normal text-gray-300 text-sm">
                {member.credentials}
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300 mt-1">
            {member.role}
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 bg-gray-50 rounded-b-2xl max-h-[70vh] overflow-y-auto">
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
    <div className="relative w-64 group">
      <Image
        src="/Mask.svg"
        alt="Svg"
        height={400}
        width={500}
        className="object-cover"
      />
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={200}
        height={400}
        className="object-fit absolute top-0 left-1/2 -translate-x-1/2"
      />

      <div className="absolute bottom-6 left-6 right-6">
        <div className="rounded-sm bg-white/80 p-4 text-center backdrop-blur-sm shadow-md">
          <h3 className="text-base font-bold text-green-900">{member.name}</h3>
          <p className="text-xs text-gray-600">{member.role}</p>
        </div>

        <div className="flex justify-center -mt-3 relative z-10">
          <button
            onClick={() => onViewBio(member)}
            className="rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
          >
            View Biography
          </button>
        </div>
      </div>
    </div>
  );
};
