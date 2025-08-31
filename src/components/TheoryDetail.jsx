export default function TheoryDetail({ detail, onBack }) {
  return (
    <div className="w-full min-h-screen p-6 sm:p-10">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold"
      >
        ← Quay lại
      </button>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-2">{detail.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{detail.summary}</p>
        <div className="bg-white border border-[#bde7db] rounded-xl p-6 shadow-sm">
          <div className="font-bold text-lg mb-2">{detail.example.label}</div>
          <div className="mb-1 text-xl font-semibold text-gray-800">{detail.example.origin}</div>
          <div className="mb-1 text-xl font-semibold text-red-500">
            {detail.example.changed}
          </div>
          <div className="mb-2 text-base text-gray-700">{detail.example.meaning}</div>
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