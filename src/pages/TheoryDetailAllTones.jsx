import BackButton from "../components/BackButton";
import TheoryCards from "../data/TheoryCards";
import { useState, useRef, useEffect } from "react";

function ExampleAudio({ audioUrl, example }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioUrl));

  useEffect(() => {
    const audio = audioRef.current;
    // Reset state when audio ends
    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);

    // Cleanup on unmount
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [audioUrl]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center flex items-center justify-center gap-2">
      <p className="text-gray-800 font-medium text-base sm:text-lg m-0">
        Ví dụ: <span className="font-bold text-red-600">{example}</span>
      </p>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition-colors"
        title={playing ? "Tạm dừng" : "Phát âm thanh"}
        onClick={togglePlayPause}
      >
        {playing ? (
          // Pause Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
            <rect x="6" y="5" width="4" height="14" rx="1"></rect>
            <rect x="14" y="5" width="4" height="14" rx="1"></rect>
          </svg>
        ) : (
          // Play Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default function TheoryDetailAllTones() {
  // Lấy dữ liệu từ TheoryCards.js
  const cardData = TheoryCards.find(card => card.slug === "all-tones");
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
      <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 pb-20 sm:pb-10">
        <BackButton />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">{detail.heading}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed text-center max-w-4xl mx-auto">{detail.summary}</p>
          
          {/* Grid layout for tone images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {detail.examples.map((tone, index) => (
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
                      src={tone.image}
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
                {tone.audioUrl && (
                  <ExampleAudio audioUrl={tone.audioUrl} example={tone.example} />
                )}
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
