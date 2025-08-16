import { useState } from "react";
import LogoCircle from "../components/LogoCircle";
import InputNickname from "../components/InputNickname";
import PrimaryButton from "../components/PrimaryButton";

export default function HomePage() {
  const [nickname, setNickname] = useState("");

  const handleStart = () => {
    alert(`Chào mừng ${nickname}!`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-peach px-4">
      <LogoCircle text="三" />
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-2 font-poppi drop-shadow-lg text-center">Tone 3 Magic</h1>
      <p className="text-white text-lg sm:text-xl mb-8 font-hanzi text-center">Dấu Ba Thần Kỳ</p>
      <p className="text-white mb-12 text-center text-base sm:text-lg font-pinyin font-bold">
        Làm chủ biến âm dấu 3 - Tự tin phát âm Tiếng Trung
      </p>
      <InputNickname
        value={nickname}
        onChange={e => setNickname(e.target.value)}
        placeholder="Hãy cho chúng tôi biết tên bạn nhé ..."
      />
      <PrimaryButton
        text="Khám phá ngay và luôn!"
        onClick={handleStart}
      />
    </div>
  );
}