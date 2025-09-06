import BackButton from "../components/BackButton";
import VocabTable from "../components/VocabTable";
import TheoryCards from "../data/TheoryCards";
import OthersTone3Words from "../data/OthersTone3Words";

export default function TheoryDetailRuleOthersTone3() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "tone3-with-others");
  const detail = cardData?.detail;

  if (!detail) {
    return <div>Không tìm thấy nội dung</div>;
  }

  const toneRules = [
    {
      src: "/images/31.png",
      title: "Dấu 3 + Dấu 1", 
      description: "Khi dấu 3 đứng trước dấu 1, dấu 3 được đọc như dấu 2 (thanh sắc)",
      example: "老师 (lǎo shī → láo shī) - giáo viên",
      color: "border-blue-400 ring-blue-200",
      rule: "3 + 1 = 2 + 1"
    },
    {
      src: "/images/32.png",
      title: "Dấu 3 + Dấu 2",
      description: "Khi dấu 3 đứng trước dấu 2, dấu 3 được đọc như dấu 2 (thanh sắc)", 
      example: "老师 (lǎo shí → láo shí) - thầy giáo",
      color: "border-green-400 ring-green-200",
      rule: "3 + 2 = 2 + 2"
    },
    {
      src: "/images/34.png",
      title: "Dấu 3 + Dấu 4",
      description: "Khi dấu 3 đứng trước dấu 4, dấu 3 được đọc như dấu 2 (thanh sắc)",
      example: "很好 (hěn hǎo → hén hào) - rất tốt", 
      color: "border-purple-400 ring-purple-200",
      rule: "3 + 4 = 2 + 4"
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
          
          {/* Grid layout for tone combination rules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {toneRules.map((rule, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                  {rule.title}
                </h3>
                
                {/* Rule formula */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-4 text-center">
                  <p className="text-red-700 font-bold text-sm sm:text-base">
                    {rule.rule}
                  </p>
                </div>
                
                {/* Image */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-full max-w-xs">
                    <img 
                      src={rule.src}
                      alt={rule.title}
                      className={`w-full h-auto rounded-lg shadow-xl border-4 ${rule.color} ring-4 ring-offset-4 ring-offset-white transition-transform duration-300 hover:scale-105`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 text-center">
                  {rule.description}
                </p>

                {/* Example */}
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-gray-800 font-medium text-xs sm:text-sm">
                    Ví dụ: <span className="font-bold text-red-600">{rule.example}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vocabulary Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
              📚 Từ vựng thực hành
            </h2>
            <VocabTable vocabs={OthersTone3Words} />
          </div>

          {/* Summary section */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              🎯 Quy tắc tổng quát
            </h3>
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>• Khi <strong>dấu 3</strong> đứng trước bất kỳ dấu nào khác (dấu 1, 2, 4), nó sẽ <strong>biến thành dấu 2</strong></p>
              <p>• Quy tắc này giúp phát âm tiếng Trung <strong>mượt mà và tự nhiên</strong> hơn</p>
              <p>• Chỉ có trường hợp <strong>dấu 3 + dấu 3</strong> mới có quy tắc riêng biệt</p>
              <p>• Thực hành với các từ ghép để <strong>làm quen với biến âm</strong> này</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
