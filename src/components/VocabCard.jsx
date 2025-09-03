export default function VocabCard({ vocab }) {
  const playAudio = (audioUrl) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  return (
    <div className="mb-6 sm:mb-8 last:mb-0 p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-lg">
      {/* Header với từ Trung và phiên âm */}
      <div className="text-center mb-6">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
          {vocab.chinese}
        </div>
        <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3">
          {vocab.pinyin}
        </div>
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-700">
          {vocab.vietnamese}
        </div>
      </div>

      {/* Thông tin bổ sung */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {vocab.category}
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {vocab.level}
        </span>
      </div>

      {/* Nút phát âm chính */}
      <div className="flex justify-center mb-6">
        <button 
          className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium text-lg"
          onClick={() => playAudio(vocab.audioUrl)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Nghe phát âm
        </button>
      </div>

      {/* Ví dụ */}
      {vocab.examples && vocab.examples.length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Ví dụ</h4>
          {vocab.examples.map((example, index) => (
            <div key={index} className="bg-gray-50/80 rounded-lg p-4 mb-3 last:mb-0">
              <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {example.chinese}
              </div>
              <div className="text-base sm:text-lg text-gray-600 mb-2">
                {example.pinyin}
              </div>
              <div className="text-base sm:text-lg text-blue-700 font-medium mb-3">
                {example.vietnamese}
              </div>
              <div className="flex justify-center">
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm"
                  onClick={() => playAudio(example.audioUrl)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Nghe ví dụ
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
