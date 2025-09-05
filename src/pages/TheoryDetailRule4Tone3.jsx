import BackButton from "../components/BackButton";
import VocabTable from "../components/VocabTable";
import TheoryCards from "../data/TheoryCards";
import FourTone3Words from "../data/FourTone3Words";

export default function TheoryDetailRule4Tone3() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "four-tone3");
  const detail = cardData?.detail;

  if (!detail) {
    return <div>Không tìm thấy nội dung</div>;
  }

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        background: "linear-gradient(135deg, #F55656 0%, #FFB6B6 100%)",
      }}
    >
      <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">{detail.heading}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">{detail.summary}</p>
          
          {/* Image card */}
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-6 sm:mb-8">
            <div className="flex justify-center">
              <img 
                src="/images/4_tone3.png" 
                alt={detail.heading}
                className="max-w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  // Ẩn ảnh nếu không tìm thấy file
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Bảng từ vựng liên quan */}
          <VocabTable vocabs={FourTone3Words} />
        </div>
      </div>
    </div>
  );
}
