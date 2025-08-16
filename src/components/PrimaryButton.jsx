export default function PrimaryButton({ text, onClick }) {
  return (
    <button
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-3 rounded-full text-base sm:text-lg font-semibold bg-primary text-white shadow-md hover:bg-accent transition font-poppi mx-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
}