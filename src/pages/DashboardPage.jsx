import { useEffect, useState } from "react";

export default function DashboardPage({ nickname: initialNickname }) {
  // Chỉ lấy nickname nếu chưa truyền props vào (để dùng cho trường hợp gọi độc lập)
  const [nickname, setNickname] = useState(initialNickname || "");

  useEffect(() => {
    if (!initialNickname) {
      const nick = localStorage.getItem("nickname");
      if (nick) setNickname(nick);
    }
  }, [initialNickname]);

  return (
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
    >
      {/* Welcome title */}
      <h1 className="text-[#34B3FF] text-2xl md:text-3xl font-bold mb-2 text-center tracking-wide">
        Chào mừng{nickname ? `, ${nickname}!` : "!"}
      </h1>

      {/* Study Progress Section */}
      <section className="w-full">
        <div className="font-bold text-[#34B3FF] mb-1 text-base md:text-lg">
          Tiến trình học tập
        </div>
        <div className="flex flex-col items-center bg-[#FFF4F4] rounded-xl py-3 mb-0">
          <div className="text-3xl md:text-4xl font-bold text-[#28E98C]">
            75%
          </div>
          <div className="text-[#888] mt-1 text-center text-base">
            Bạn đã hoàn thành 75% các bài học!
          </div>
        </div>
      </section>

      {/* Suggested Next Lesson Section */}
      <section className="w-full">
        <div className="font-bold text-[#34B3FF] mb-1 text-base md:text-lg">
          Bài học gợi ý tiếp theo
        </div>
        <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col gap-1">
          <span className="font-semibold text-[#232323] text-base md:text-lg">
            Quy tắc biến âm khi 3 dấu 3 liên kề
          </span>
          <span className="text-[#34B3FF] text-sm md:text-base">
            Nắm vững cách phát âm khi có ba thanh 3 liên tiếp.
          </span>
          <button className="mt-2 px-4 py-2 rounded-lg bg-[#28E98C] text-white font-bold shadow text-base w-max self-start hover:bg-[#34B3FF] hover:text-white transition-all">
            Bắt đầu học
          </button>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="w-full">
        <div className="font-bold text-[#34B3FF] mb-1 text-base md:text-lg">
          Tiếp tục học
        </div>
        <div className="bg-[#FFF4F4] rounded-xl p-3">
          <span className="font-semibold text-[#232323] text-base md:text-lg">
            Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau
          </span>
          <div className="mt-2 w-full bg-[#FFF4F4] rounded-full h-3 relative overflow-hidden">
            <div
              className="h-3 rounded-full transition-all"
              style={{
                width: "60%",
                background: "linear-gradient(90deg,#FFB86F 0%,#28E98C 100%)"
              }}
            />
          </div>
          <div className="mt-1 text-[#34B3FF] text-sm md:text-base">
            Đã hoàn thành 60%
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="w-full">
        <div className="font-bold text-[#34B3FF] mb-1 text-base md:text-lg">
          Thành tựu gần đây
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
            <span className="text-[#FFD600] text-2xl">🏅</span>
            <span className="font-bold mt-1 mb-1 text-[#232323] text-base md:text-lg text-center">
              Hoàn thành bài 1
            </span>
            <span className="text-xs md:text-sm text-[#34B3FF] text-center">
              Quy tắc 2 dấu 3
            </span>
          </div>
          <div className="bg-[#FFF4F4] rounded-xl p-3 flex flex-col items-center min-w-[120px] flex-1">
            <span className="text-[#28E98C] text-2xl">⏱️</span>
            <span className="font-bold mt-1 mb-1 text-[#232323] text-base md:text-lg text-center">
              Đạt 90% Quiz
            </span>
            <span className="text-xs md:text-sm text-[#34B3FF] text-center">
              Quiz cơ bản
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}