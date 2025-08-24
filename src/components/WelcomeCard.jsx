import React from "react";

// WelcomeCard displays avatar and nickname
export default function WelcomeCard({ nickname = "Người dùng" }) {
  return (
    <div className="flex items-center bg-white rounded-xl shadow mb-6 px-6 py-4">
      <div className="w-12 h-12 bg-[#A8DADC] rounded-full flex items-center justify-center mr-4">
        <svg width="32" height="32" fill="none">
          <circle cx="16" cy="12" r="8" fill="#fff"/>
          <ellipse cx="16" cy="24" rx="11" ry="6" fill="#fff"/>
        </svg>
      </div>
      <span className="text-xl font-bold text-gray-800">Chào mừng, {nickname}!</span>
    </div>
  );
}