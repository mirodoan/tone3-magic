export default function PracticePage() {
  const practiceTypes = [
    { 
      id: 1, 
      title: "Luyện phát âm", 
      description: "Thực hành phát âm các thanh điệu",
      icon: "🎤",
      difficulty: "Dễ"
    },
    { 
      id: 2, 
      title: "Nhận biết thanh điệu", 
      description: "Nghe và phân biệt các thanh điệu",
      icon: "👂",
      difficulty: "Trung bình"
    },
    { 
      id: 3, 
      title: "Đọc từ vựng", 
      description: "Đọc và phát âm đúng từ vựng",
      icon: "📚",
      difficulty: "Khó"
    },
    { 
      id: 4, 
      title: "Luyện câu", 
      description: "Thực hành với câu hoàn chình",
      icon: "💬",
      difficulty: "Khó"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thực hành</h1>
        <p className="text-gray-600">Luyện tập phát âm và nghe thanh điệu tiếng Việt</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{type.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{type.title}</h3>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                    type.difficulty === 'Dễ' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Trung bình' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">{type.description}</p>
            
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Bắt đầu luyện tập
            </button>
          </div>
        ))}
      </div>

      {/* Recent Practice Results */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Kết quả luyện tập gần đây</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-800">Luyện phát âm thanh hỏi</div>
              <div className="text-sm text-gray-600">2 tiếng trước</div>
            </div>
            <div className="text-green-600 font-semibold">85%</div>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-800">Nhận biết thanh điệu</div>
              <div className="text-sm text-gray-600">1 ngày trước</div>
            </div>
            <div className="text-blue-600 font-semibold">92%</div>
          </div>
        </div>
      </div>
    </div>
  );
}