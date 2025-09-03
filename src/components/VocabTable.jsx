export default function VocabTable({ vocabs }) {
  const playAudio = (audioUrl) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-20 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Từ vựng liên quan</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-3/12 sm:w-2/12" />
            <col className="w-3/12 sm:w-4/12" />
            <col className="w-4/12 sm:w-4/12" />
            <col className="w-2/12 sm:w-2/12" />
          </colgroup>
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">Từ Trung</th>
              <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">Phiên âm</th>
              <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">Nghĩa</th>
              <th className="text-center py-3 px-2 sm:px-4 font-semibold text-gray-700">Phát âm</th>
            </tr>
          </thead>
          <tbody>
            {vocabs.map((vocab, index) => (
              <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50/50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}>
                <td className="py-3 px-2 sm:px-4 text-sm sm:text-lg lg:text-xl font-semibold text-red-600">
                  {vocab.chinese}
                </td>
                <td className="py-3 px-2 sm:px-4 text-xs sm:text-base lg:text-lg text-gray-600">
                  {vocab.pinyin}
                </td>
                <td className="py-3 px-2 sm:px-4 text-xs sm:text-base lg:text-lg text-blue-700 font-medium">
                  {vocab.vietnamese}
                </td>
                <td className="py-3 px-2 sm:px-4 text-center">
                  <div className="flex justify-center">
                    <button 
                      className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      onClick={() => playAudio(vocab.audioUrl)}
                      title="Phát âm"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
