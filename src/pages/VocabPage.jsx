export default function VocabPage() {
  const vocabCategories = [
    {
      id: 1,
      title: "Từ cơ bản",
      description: "Từ vựng thường gặp hàng ngày",
      wordCount: 150,
      progress: 75,
      color: "blue"
    },
    {
      id: 2,
      title: "Gia đình",
      description: "Từ vựng về người thân trong gia đình",
      wordCount: 45,
      progress: 90,
      color: "green"
    },
    {
      id: 3,
      title: "Đồ ăn",
      description: "Tên các món ăn và thức uống",
      wordCount: 80,
      progress: 60,
      color: "orange"
    },
    {
      id: 4,
      title: "Động vật",
      description: "Tên các loài động vật",
      wordCount: 35,
      progress: 40,
      color: "purple"
    }
  ];

  const recentWords = [
    { word: "mẹ", meaning: "mother", tone: "thanh huyền" },
    { word: "má", meaning: "mom", tone: "thanh sắc" },
    { word: "mả", meaning: "grave", tone: "thanh hỏi" },
    { word: "mã", meaning: "code", tone: "thanh ngã" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Từ vựng</h1>
        <p className="text-gray-600">Học từ vựng tiếng Việt với các thanh điệu</p>
      </div>

      {/* Vocab Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vocabCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              <div className={`w-4 h-4 rounded-full bg-${category.color}-500`}></div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600">{category.wordCount} từ</span>
              <span className="text-sm font-medium text-gray-800">{category.progress}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className={`bg-${category.color}-500 h-2 rounded-full transition-all`}
                style={{width: `${category.progress}%`}}
              ></div>
            </div>
            
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
              Học từ vựng
            </button>
          </div>
        ))}
      </div>

      {/* Recent Words */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Từ vừa học</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentWords.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
              <div className="text-2xl font-bold text-indigo-600 mb-2">{item.word}</div>
              <div className="text-sm text-gray-600 mb-1">{item.meaning}</div>
              <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {item.tone}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Word of the Day */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">Từ trong ngày</h2>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">hôm nay</div>
          <div className="text-lg text-purple-700 mb-2">today</div>
          <div className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-block">
            thanh ngang
          </div>
        </div>
      </div>
    </div>
  );
}