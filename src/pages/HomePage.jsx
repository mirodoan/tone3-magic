import { useEffect, useState } from "react";
import LogoCircle from "../components/LogoCircle";
import InputNickname from "../components/InputNickname";
import PrimaryButton from "../components/PrimaryButton";
import ConfirmNicknamePopup from "../components/ConfirmNicknamePopup";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [nickname, setNickname] = useState(""); // Current user's nickname
  const [showPopup, setShowPopup] = useState(false); // Whether to show the confirmation popup
  const [storedNickname, setStoredNickname] = useState(""); // Nickname retrieved from localStorage
  const navigate = useNavigate(); // React-router hook

  // Check localStorage for an existing nickname on initial load
  useEffect(() => {
    const nick = localStorage.getItem("nickname");
    if (nick) {
      setStoredNickname(nick);
      setShowPopup(true); // Show confirmation popup for returning user
    }
  }, []);

  const handleConfirm = () => {
    setNickname(storedNickname);
    setShowPopup(false);
    navigate("/dashboard");
  };

  const handleReject = () => {
    localStorage.removeItem("nickname");
    setStoredNickname("");
    setNickname("");
    setShowPopup(false);
  };

  const handleStart = () => {
    localStorage.setItem("nickname", nickname);
    alert(`Chào mừng ${nickname}!`);
    navigate("/dashboard");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #F55656 0%, #FFB6B6 100%)",
      }}
    >
      <div className="w-full max-w-md flex flex-col justify-center items-center px-4 py-12">
        {showPopup && (
          <ConfirmNicknamePopup
            nickname={storedNickname}
            onConfirm={handleConfirm}
            onReject={handleReject}
          />
        )}

        {!showPopup && (
          <>
            <LogoCircle text="三" />
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-2 font-poppi drop-shadow-lg text-center">
              Tone 3 Magic
            </h1>
            <p className="text-white text-lg sm:text-xl mb-8 font-hanzi text-center">
              Dấu Ba Thần Kỳ
            </p>
            <p className="text-white mb-12 text-center text-base sm:text-lg font-pinyin font-bold">
              Làm chủ biến âm dấu 3 - Tự tin phát âm Tiếng Trung
            </p>
            <InputNickname
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              placeholder="Bạn thích được gọi là ..."
            />
            <PrimaryButton
              text="Khám phá ngay và luôn!"
              onClick={handleStart}
            />
          </>
        )}
      </div>
    </div>
  );
}