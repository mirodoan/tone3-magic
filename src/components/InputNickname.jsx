export default function InputNickname({ value, onChange, placeholder }) {
  return (
    <input
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-3 px-5 rounded-full text-base sm:text-lg mb-4 font-pinyin outline-none bg-white bg-opacity-90 placeholder:text-gray-400 focus:ring-2 focus:ring-primary shadow mx-auto"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}