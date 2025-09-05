import BackButton from "../components/BackButton";
import VocabTable from "../components/VocabTable";
import TheoryCards from "../data/TheoryCards";
import TwoTone3Words from "../data/TwoTone3Words";

export default function TheoryDetailRule2Tone3() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "two-tone3");
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
        
        {/* Hình ảnh minh họa - Card riêng nổi bật */}
        <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-6 sm:mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <img 
                src="/images/2_tone3.png" 
                alt="Minh họa quy tắc biến âm hai dấu 3"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-red-400 ring-4 ring-red-200 ring-offset-4 ring-offset-white"
                onError={(e) => {
                  // Ẩn ảnh nếu không tìm thấy file
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Bảng từ vựng liên quan */}
        <VocabTable vocabs={TwoTone3Words} />
      </div>
    </div>
  );
}