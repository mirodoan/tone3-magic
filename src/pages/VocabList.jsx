import { useState } from 'react';
import VocabCard from '../components/VocabCard';
import VocabCards from '../data/VocabCards';

export default function VocabList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Lấy danh sách categories và levels duy nhất
  const categories = ['all', ...new Set(VocabCards.map(vocab => vocab.category))];
  const levels = ['all', ...new Set(VocabCards.map(vocab => vocab.level))];

  // Filter từ vựng theo category và level
  const filteredVocabs = VocabCards.filter(vocab => {
    const categoryMatch = selectedCategory === 'all' || vocab.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || vocab.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Từ vựng tiếng Trung
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            Học từ vựng với phát âm chuẩn và ví dụ thực tế
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Chủ đề:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Tất cả' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Cấp độ:</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'Tất cả' : level}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-gray-600">
              Tìm thấy {filteredVocabs.length} từ
            </div>
          </div>
        </div>

        {/* Vocab Cards */}
        <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          {filteredVocabs.length > 0 ? (
            filteredVocabs.map((vocab) => (
              <VocabCard key={vocab.id} vocab={vocab} />
            ))
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500 text-lg">
                Không tìm thấy từ vựng nào với bộ lọc đã chọn
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-6 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-gray-700">
              <span className="font-semibold">Tổng cộng:</span> {VocabCards.length} từ vựng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
