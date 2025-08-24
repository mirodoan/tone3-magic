import React from "react";

// ContinueLessonCard shows lesson in progress
export default function ContinueLessonCard({ percent = 60 }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-2">
      <div className="font-bold text-gray-800 mb-2">
        Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-[#457B9D] h-3 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">Đã hoàn thành {percent}%</span>
        <button className="bg-[#A8DADC] text-white rounded-full px-4 py-1 text-sm font-semibold">Tiếp tục</button>
      </div>
    </div>
  );
}