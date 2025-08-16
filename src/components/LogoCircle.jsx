export default function LogoCircle({ text = "三" }) {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white bg-opacity-30 rounded-full flex items-center justify-center shadow-lg mx-auto">
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow">{text}</span>
    </div>
  );
}