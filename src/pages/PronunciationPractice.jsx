import { useState } from "react";
import BackButton from "../components/BackButton";

export default function PronunciationPractice() {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const words = [
    { chinese: "你好", pinyin: "nǐ hǎo", vietnamese: "xin chào", tone: "3-3" },
    { chinese: "老师", pinyin: "lǎo shī", vietnamese: "giáo viên", tone: "3-1" },
    { chinese: "很好", pinyin: "hěn hǎo", vietnamese: "rất tốt", tone: "3-3" },
    { chinese: "小猫", pinyin: "xiǎo māo", vietnamese: "mèo con", tone: "3-1" },
  ];

  const handleRecord = () => {
    setIsRecording(!isRecording);
    // TODO: Implement recording logic
  };

  const nextWord = () => {
    if (currentWord < words.length - 1) {
      setCurrentWord(currentWord + 1);
    } else {
      alert(`Hoàn thành! Điểm số: ${score}/${words.length}`);
    }
  };

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        background: "linear-gradient(135deg, #F55656 0%, #FFB6B6 100%)",
      }}
    >
      <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 pb-20 sm:pb-10">
        <BackButton />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
            🎤 Luyện phát âm
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-600 mb-2">
                Từ {currentWord + 1}/{words.length}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentWord + 1) / words.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-800 mb-4">
                {words[currentWord].chinese}
              </div>
              <div className="text-2xl text-gray-600 mb-2">
                {words[currentWord].pinyin}
              </div>
              <div className="text-lg text-gray-500">
                {words[currentWord].vietnamese}
              </div>
              <div className="text-sm text-red-600 font-semibold mt-2">
                Biến âm: {words[currentWord].tone}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={handleRecord}
                className={`w-24 h-24 rounded-full text-white text-3xl transition-all duration-300 ${
                  isRecording 
                    ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isRecording ? '⏹' : '🎤'}
              </button>
              
              <p className="text-gray-600 text-center">
                {isRecording ? 'Đang ghi âm... Nhấn để dừng' : 'Nhấn để bắt đầu ghi âm'}
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    // TODO: Play original audio
                    alert('Phát âm thanh gốc');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🔊 Nghe mẫu
                </button>
                
                <button
                  onClick={nextWord}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Tiếp theo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
