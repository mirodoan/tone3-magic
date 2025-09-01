import TheoryExample from "../components/TheoryExample";

export default function TheoryDetailRule2Tone3({ onBack }) {
  // Nội dung chi tiết cho Quy tắc biến âm khi 2 dấu 3 đứng cạnh nhau
  const detail = {
    heading: "Quy tắc biến âm khi hai dấu 3 đứng cạnh nhau",
    summary:
      "Khi hai âm tiết mang thanh 3 đứng cạnh nhau, âm tiết đầu tiên sẽ biến thành thanh 2. Đây là quy tắc biến âm phổ biến nhất và quan trọng nhất của thanh 3.",
    examples: [
      {
        label: "Ví dụ minh họa: 你好 (nǐ hǎo)",
        origin: "你好 (nǐ3 hǎo3)",
        changed: "你好 (ní2 hǎo3)",
        meaning: "Nghĩa: Xin chào",
      },
      // Có thể thêm ví dụ khác nếu muốn
    ],
    audioUrl: "/audio-rule2tone3.mp3",
    chartLabel: "Biểu đồ sóng âm",
  };

  return (
    <div className="w-full min-h-screen bg-[#f4fcf7] p-6 sm:p-10">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold"
      >
        ← Quay lại
      </button>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-2">{detail.heading}</h1>
        <p className="text-lg text-gray-700 mb-6">{detail.summary}</p>
        <div className="bg-white border border-[#bde7db] rounded-xl p-6 shadow-sm">
          {detail.examples.map((ex, i) => (
            <TheoryExample key={i} example={ex} />
          ))}
          <div className="flex gap-4 items-center mt-4">
            <button className="bg-[#228be6] text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow hover:bg-[#1a6fc1]">
              <svg width="28" height="28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" />
                <polygon points="11,10 20,14 11,18" fill="white" />
              </svg>
              Nghe mẫu
            </button>
            <div className="flex-1 bg-[#bde7db] rounded-full h-12 flex items-center justify-center text-[#357c87] font-medium text-lg">
              {detail.chartLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}