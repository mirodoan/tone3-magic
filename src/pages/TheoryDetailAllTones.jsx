import BackButton from "../components/BackButton";
import TheoryCards from "../data/TheoryCards";

export default function TheoryDetailAllTones() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "all-tones");
  const detail = cardData?.detail;

  if (!detail) {
    return <div>Không tìm thấy nội dung</div>;
  }

  const toneImages = [
    {
      src: "/images/tone1.png",
      title: "Thanh 1",
      description: "Âm thanh cao và đều, giữ nguyên độ cao (5) từ đầu đến cuối  một cách ổn định.",
      example: "mā (妈) - mẹ",
      color: "border-blue-400 ring-blue-200"
    },
    {
      src: "/images/tone2.png", 
      title: "Thanh 2",
      description: "Âm thanh đi từ trung bình (3) lên cao (5).",
      example: "má (麻) - vừng",
      color: "border-green-400 ring-green-200"
    },
    {
      src: "/images/tone3.png",
      title: "Thanh 3", 
      description: "Âm thanh đi xuống rồi lên lại, bắt đầu từ cao độ (2) xuống thấp (1) rồi lên cao (4).",
      example: "mǎ (马) - ngựa",
      color: "border-red-400 ring-red-200"
    },
    {
      src: "/images/tone4.png",
      title: "Thanh 4",
      description: "Âm thanh đi từ cao (5) xuống thấp (1), mạnh mẽ và dứt khoát, ngắt hơi",
      example: "mà (骂) - mắng",
      color: "border-purple-400 ring-purple-200"
    }
  ];

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        background: "linear-gradient(135deg, #F55656 0%, #FFB6B6 100%)",
      }}
    >
      <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 pb-20 sm:pb-10">
        <BackButton />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">{detail.heading}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed text-center max-w-4xl mx-auto">{detail.summary}</p>
          
          {/* Grid layout for tone images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {toneImages.map((tone, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
              >
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                  {tone.title}
                </h3>
                
                {/* Image */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-full max-w-sm">
                    <img 
                      src={tone.src}
                      alt={tone.title}
                      className={`w-full h-auto rounded-lg shadow-xl border-4 ${tone.color} ring-4 ring-offset-4 ring-offset-white transition-transform duration-300 hover:scale-105`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 text-center">
                  {tone.description}
                </p>

                {/* Example */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-gray-800 font-medium text-base sm:text-lg">
                    Ví dụ: <span className="font-bold text-red-600">{tone.example}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary section */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              💡 Ghi nhớ quan trọng
            </h3>
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>• <strong>Thanh điệu 3</strong> là thanh điệu khó nhất trong tiếng Trung vì có sự biến đổi phức tạp khi kết hợp với các dấu khác</p>
              <p>• Việc nắm vững quy tắc biến âm giúp phát âm tự nhiên và chính xác hơn</p>
              <p>• Thực hành thường xuyên với các từ ghép để làm quen với biến âm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
