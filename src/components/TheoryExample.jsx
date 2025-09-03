export default function TheoryExample({ example }) {
  return (
    <div className="mb-6 sm:mb-8 last:mb-0 p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-lg">
      <div className="font-bold text-base sm:text-lg lg:text-xl mb-4 sm:mb-5 text-gray-800 border-b border-gray-200 pb-3">{example.label}</div>
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-gray-50/80 rounded-lg p-3 sm:p-4 border border-gray-200/50">
          <div className="text-xs sm:text-sm text-gray-600 mb-1 font-medium uppercase tracking-wide">Gốc:</div>
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">{example.origin}</div>
        </div>
        
        <div className="bg-red-50/80 rounded-lg p-3 sm:p-4 border border-red-200/50">
          <div className="text-xs sm:text-sm text-red-600 mb-1 font-medium uppercase tracking-wide">Biến đổi:</div>
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600">{example.changed}</div>
        </div>
        
        <div className="bg-blue-50/80 rounded-lg p-3 sm:p-4 border border-blue-200/50">
          <div className="text-xs sm:text-sm text-blue-600 mb-1 font-medium uppercase tracking-wide">Nghĩa:</div>
          <div className="text-sm sm:text-base lg:text-lg text-blue-700 font-medium">{example.meaning}</div>
        </div>
        <div className="flex justify-center mt-4">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
            onClick={() => {
              if (example.audioUrl) {
                const audio = new Audio(example.audioUrl);
                audio.play().catch(e => console.log('Audio play failed:', e));
              }
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Nghe mẫu
          </button>
        </div>
      </div>
    </div>
  );
}