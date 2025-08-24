import React, { useState } from "react";
import LogoCircle from "../components/LogoCircle";
import StickySidebar from "../components/StickySidebar";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F55656] to-[#FFB6B6] flex">
      {/* Sidebar trái desktop/tablet */}
      <aside className="hidden sm:flex flex-col items-center bg-white shadow-lg w-64 h-screen fixed top-0 left-0 z-40 px-0">
        <div className="flex flex-col items-center py-7 gap-2 w-full">
          <LogoCircle text="三" />
          <span className="font-bold text-[#D7263D] text-lg tracking-wide">Tone 3 Magic</span>
        </div>
        <nav className="flex flex-col gap-1 mt-5 w-full px-4">
          {["home", "theory", "practice", "vocab"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-3 py-3 px-4 rounded-xl transition
                ${
                  activeTab === key
                    ? "bg-[#FFE2E7] text-[#D7263D] font-bold shadow-sm"
                    : "text-gray-400 hover:bg-[#F7F7F7]"
                }
                hover:text-[#D7263D]
              `}
            >
              <span>
                {key === "home" && (
                  <svg width="24" height="24" fill="none">
                    <path d="M4 10.5L12 4l8 6.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10.5z" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="15" width="6" height="7" rx="1" fill="currentColor" />
                  </svg>
                )}
                {key === "theory" && (
                  <svg width="24" height="24" fill="none">
                    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {key === "practice" && (
                  <svg width="24" height="24" fill="none">
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {key === "vocab" && (
                  <svg width="24" height="24" fill="none">
                    <path d="M12 17l-6-5.5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.5L12 17z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="9" r="2" fill="currentColor" />
                  </svg>
                )}
              </span>
              <span className="text-base">
                {{
                  home: "Trang chủ",
                  theory: "Lý thuyết",
                  practice: "Luyện tập",
                  vocab: "Từ khó"
                }[key]}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTENT: căn giữa, fit mọi màn hình, spacing đều, không thừa thiếu */}
      <main className="flex-1 flex justify-center items-center sm:pl-64 px-2 py-2">
        <div
          className="
            w-full
            max-w-md
            sm:max-w-xl
            lg:max-w-2xl
            bg-white rounded-2xl shadow-2xl
            px-4 sm:px-8 py-6 sm:py-8
            flex flex-col gap-4
            items-center
            min-h-[calc(100vh-32px)]
            justify-center
            transition-all
          "
          style={{
            minHeight: 'calc(100vh - 32px)',
            maxHeight: 'calc(100vh - 32px)',
            overflowY: 'auto',
          }}
        >
          <h1 className="text-[#D7263D] text-2xl sm:text-3xl font-bold mb-2 text-center tracking-wide">
            Chào mừng, !
          </h1>
          {/* Tiến trình học tập */}
          <section className="w-full">
            <div className="font-bold text-red-400 mb-1 text-base sm:text-lg">Tiến trình học tập</div>
            <div className="flex flex-col items-center bg-[#FFF4F4] rounded-xl py-3 mb-0">
              <div className="text-3xl sm:text-4xl font-bold text-[#D7263D]">75%</div>
              <div className="text-gray-700 mt-1 text-center text-base">Bạn đã hoàn thành 75% các bài học!</div>
            </div>
          </section>
          {/* Bài học gợi ý */}
          <section className="w-full">
            <div className="font-bold text-red-400 mb-1 text-base sm:text-lg">Bài học gợi ý tiếp theo</div>
            <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col gap-1">
              <span className="font-semibold text-[#D7263D] text-base sm:text-lg">Quy tắc biến âm khi 3 dấu 3 liên kề</span>
              <span className="text-gray-700 text-sm">Nắm vững cách phát âm khi có ba thanh 3 liên tiếp.</span>
              <button className="mt-2 px-4 py-2 rounded-lg bg-[#D7263D] text-white font-bold shadow text-base w-max self-start">Bắt đầu học</button>
            </div>
          </section>
          {/* Tiếp tục học */}
          <section className="w-full">
            <div className="font-bold text-red-400 mb-1 text-base sm:text-lg">Tiếp tục học</div>
            <div className="bg-[#FFF4F4] rounded-xl p-3">
              <span className="font-semibold text-[#D7263D] text-base sm:text-lg">Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau</span>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                <div className="bg-[#D7263D] h-3 rounded-full transition-all" style={{ width: "60%" }} />
              </div>
              <div className="mt-1 text-gray-700 text-sm">Đã hoàn thành 60%</div>
            </div>
          </section>
          {/* Thành tựu */}
          <section className="w-full">
            <div className="font-bold text-red-400 mb-1 text-base sm:text-lg">Thành tựu gần đây</div>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
                <span className="text-yellow-400 text-2xl">🏅</span>
                <span className="font-bold mt-1 mb-1 text-[#D7263D] text-base text-center">Hoàn thành bài 1</span>
                <span className="text-xs text-gray-700 text-center">Quy tắc 2 dấu 3</span>
              </div>
              <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
                <span className="text-purple-400 text-2xl">⏱️</span>
                <span className="font-bold mt-1 mb-1 text-[#D7263D] text-base text-center">Đạt 90% Quiz</span>
                <span className="text-xs text-gray-700 text-center">Quiz cơ bản</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky menu dưới cho mobile, nền nổi bật, shadow, bo góc */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-2 pb-2">
        <div className="bg-white rounded-t-2xl shadow-xl border border-red-100">
          <StickySidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}