import React from "react";

// StudyProgressCard displays the user's study progress
export default function StudyProgressCard({ percent }) {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="w-36 h-36 rounded-full bg-[#A8DADC] flex items-center justify-center mb-3 shadow">
        <span className="text-3xl font-bold text-white">{percent}%</span>
      </div>
      <div className="text-gray-700 text-base font-medium">
        Bạn đã hoàn thành {percent}% các bài học!
      </div>
    </div>
  );
}