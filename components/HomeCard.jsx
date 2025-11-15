"use client";
import { Globe, Target, Trophy, Users } from "lucide-react";

export default function HomeCard({ icon, title, date }) {
  const IconComponent =
    icon === "globe" ? Globe :
    icon === "target" ? Target :
    icon === "trophy" ? Trophy :
    Users;

  return (
    <div className="w-[300px] rounded-xl border shadow-sm overflow-hidden bg-white">
      
      {/* Top Section */}
      <div className="p-4 flex justify-between items-start">
        <IconComponent className="w-6 h-6" />
        <p className="text-sm text-gray-600">{date}</p>
      </div>

      {/* Title */}
      <div className="px-4 pb-6">
        <p className="text-lg font-medium text-gray-900">{title}</p>
      </div>

      {/* Bottom Blue Section */}
      <div className="bg-[#0C5575] p-4 flex gap-2 items-center">
        {/* User icons */}
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
          <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
          <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-black text-sm font-semibold">
            +3
          </div>
        </div>
      </div>

    </div>
  );
}
