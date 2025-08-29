export default function LogoCircle({ text = "三" }) {
  return (
    <div
      className="
        flex items-center justify-center rounded-full shadow-lg
        w-20 h-20
        sm:w-24 sm:h-24
        md:w-28 md:h-28
        lg:w-32 lg:h-32
        transition-all
      "
      style={{
        background: "linear-gradient(135deg, #F55656 0%, #FFB6B6 100%)",
      }}
    >
      <span className="
        text-white font-bold drop-shadow 
        text-4xl
        sm:text-5xl
        md:text-6xl
        transition-all
      ">
        {text}
      </span>
    </div>
  );
}