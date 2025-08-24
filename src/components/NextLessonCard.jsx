import React from "react";

// NextLessonCard displays the next recommended lesson
export default function NextLessonCard() {
  return (
    <div className="flex items-center bg-white rounded-xl shadow p-4 mb-2">
      <div className="w-14 h-14 rounded-xl bg-[#A8DADC] flex items-center justify-center text-white text-xl mr-4">
        <svg width="28" height="28" fill="none"><rect x="6" y="8" width="16" height="12" rx="2" fill="currentColor" /></svg>
      </div>
      <div className="flex-1">
        <div className="font-bold text-gray-800 mb-1">Quy tắc biến âm khi 3 dấu 3 liền kề</div>
        <div className="text-gray-600 text-sm mb-2">Nắm vững cách phát âm khi có ba thanh 3 liên tiếp.</div>
        <button className="bg-[#457B9D] text-white rounded-full px-4 py-1 text-sm font-semibold">Bắt đầu học</button>
      </div>
    </div>
  );
}