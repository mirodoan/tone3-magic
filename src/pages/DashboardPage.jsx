import React from "react";
import LayoutWithSidebar from "../layouts/LayoutWithSidebar";

export default function DashboardPage() {
  // Sidebar/menu is handled by LayoutWithSidebar (responsive for desktop/tablet/mobile)

  return (
    <LayoutWithSidebar>
      {/* Responsive main dashboard content */}
      <div
        className="
          w-full
          max-w-md
          sm:max-w-lg
          md:max-w-xl
          lg:max-w-2xl
          bg-white rounded-2xl shadow-2xl
          px-4 sm:px-8 md:px-12 py-6 sm:py-8
          flex flex-col gap-4
          items-center
          min-h-full
          sm:min-h-[calc(100vh-32px)]
          sm:justify-center
          transition-all
          pt-4 pb-24
          sm:pt-0 sm:pb-0
        "
        // The padding and max-width above ensure beautiful centering on all iPads and tablets!
      >
        {/* Welcome title */}
        <h1 className="text-[#D7263D] text-2xl md:text-3xl font-bold mb-2 text-center tracking-wide">
          Chào mừng, !
        </h1>
        {/* Study Progress Section */}
        <section className="w-full">
          <div className="font-bold text-red-400 mb-1 text-base md:text-lg">
            Tiến trình học tập
          </div>
          <div className="flex flex-col items-center bg-[#FFF4F4] rounded-xl py-3 mb-0">
            <div className="text-3xl md:text-4xl font-bold text-[#D7263D]">
              75%
            </div>
            <div className="text-gray-700 mt-1 text-center text-base">
              Bạn đã hoàn thành 75% các bài học!
            </div>
          </div>
        </section>
        {/* Suggested Next Lesson Section */}
        <section className="w-full">
          <div className="font-bold text-red-400 mb-1 text-base md:text-lg">
            Bài học gợi ý tiếp theo
          </div>
          <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col gap-1">
            <span className="font-semibold text-[#D7263D] text-base md:text-lg">
              Quy tắc biến âm khi 3 dấu 3 liên kề
            </span>
            <span className="text-gray-700 text-sm md:text-base">
              Nắm vững cách phát âm khi có ba thanh 3 liên tiếp.
            </span>
            <button className="mt-2 px-4 py-2 rounded-lg bg-[#D7263D] text-white font-bold shadow text-base w-max self-start">
              Bắt đầu học
            </button>
          </div>
        </section>
        {/* Continue Learning Section */}
        <section className="w-full">
          <div className="font-bold text-red-400 mb-1 text-base md:text-lg">
            Tiếp tục học
          </div>
          <div className="bg-[#FFF4F4] rounded-xl p-3">
            <span className="font-semibold text-[#D7263D] text-base md:text-lg">
              Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau
            </span>
            {/* Progress bar */}
            <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#D7263D] h-3 rounded-full transition-all"
                style={{ width: "60%" }}
              />
            </div>
            <div className="mt-1 text-gray-700 text-sm md:text-base">
              Đã hoàn thành 60%
            </div>
          </div>
        </section>
        {/* Recent Achievements Section */}
        <section className="w-full">
          <div className="font-bold text-red-400 mb-1 text-base md:text-lg">
            Thành tựu gần đây
          </div>
          <div className="flex gap-3 flex-wrap">
            {/* Achievement 1 */}
            <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
              <span className="text-yellow-400 text-2xl">🏅</span>
              <span className="font-bold mt-1 mb-1 text-[#D7263D] text-base md:text-lg text-center">
                Hoàn thành bài 1
              </span>
              <span className="text-xs md:text-sm text-gray-700 text-center">
                Quy tắc 2 dấu 3
              </span>
            </div>
            {/* Achievement 2 */}
            <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
              <span className="text-purple-400 text-2xl">⏱️</span>
              <span className="font-bold mt-1 mb-1 text-[#D7263D] text-base md:text-lg text-center">
                Đạt 90% Quiz
              </span>
              <span className="text-xs md:text-sm text-gray-700 text-center">
                Quiz cơ bản
              </span>
            </div>
          </div>
        </section>
      </div>
    </LayoutWithSidebar>
  );
}