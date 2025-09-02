import BackButton from "../components/BackButton";
import TheoryExample from "../components/TheoryExample";
import TheoryCards from "../data/TheoryCards";

export default function TheoryDetailAllTones() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "all-tones");
  const detail = cardData?.detail;

  if (!detail) {
    return <div>Không tìm thấy nội dung</div>;
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10">
      <BackButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">{detail.heading}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">{detail.summary}</p>
        <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          {detail.examples.map((ex, i) => (
            <TheoryExample key={i} example={ex} />
          ))}
          <div className="mt-6 sm:mt-8">
            <button className="w-full sm:w-auto bg-[#228be6] hover:bg-[#1a6fc1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                <polygon points="9,8 16,12 9,16" fill="white" />
              </svg>
              <span>Nghe mẫu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
