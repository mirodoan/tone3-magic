import { useState } from "react";
import BackButton from "../components/BackButton";

export default function ToneRecognition() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      audio: "/audio/ni-hao.mp3",
      word: "你好",
      correctTone: "3-3 → 2-3",
      options: ["1-1", "2-3", "3-3", "4-4"]
    },
    {
      audio: "/audio/lao-shi.mp3", 
      word: "老师",
      correctTone: "3-1 → 2-1",
      options: ["2-1", "3-1", "1-2", "4-1"]
    },
    {
      audio: "/audio/hen-hao.mp3",
      word: "很好", 
      correctTone: "3-3 → 2-3",
      options: ["2-3", "3-3", "1-4", "4-2"]
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].correctTone) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      alert(`Hoàn thành! Điểm số: ${score}/${questions.length}`);
    }
  };

  const playAudio = () => {
    // TODO: Implement audio playback
    alert('Phát âm thanh: ' + questions[currentQuestion].word);
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
            👂 Nhận biết thanh điệu
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-600 mb-2">
                Câu hỏi {currentQuestion + 1}/{questions.length}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-800 mb-6">
                {questions[currentQuestion].word}
              </div>
              
              <button
                onClick={playAudio}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl hover:bg-blue-700 transition-colors mb-8"
              >
                🔊 Nghe
              </button>
              
              <p className="text-gray-600 mb-6">
                Chọn thanh điệu đúng sau khi biến âm:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                    showResult
                      ? option === questions[currentQuestion].correctTone
                        ? 'bg-green-500 text-white'
                        : option === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <div className="text-center">
                <div className={`text-lg font-semibold mb-4 ${
                  selectedAnswer === questions[currentQuestion].correctTone 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {selectedAnswer === questions[currentQuestion].correctTone 
                    ? '🎉 Chính xác!' 
                    : '❌ Sai rồi!'}
                </div>
                
                <button
                  onClick={nextQuestion}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Tiếp theo →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
