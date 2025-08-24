import React from "react";

// AchievementCard displays a single achievement
export default function AchievementCard({ icon, title, subtitle, bgColor = "#FFD700" }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center w-40 mr-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2`} style={{ background: bgColor }}>
        {icon}
      </div>
      <div className="font-bold text-gray-800 text-center mb-1">{title}</div>
      <div className="text-gray-600 text-sm text-center">{subtitle}</div>
    </div>
  );
}