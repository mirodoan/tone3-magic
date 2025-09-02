import { useNavigate } from "react-router-dom";

export default function BackButton({ to, className = "" }) {
  const navigate = useNavigate();

  // Tự động xác định đường dẫn quay lại dựa trên URL hiện tại
  const getBackPath = () => {
    if (to) return to; // Nếu có prop to thì dùng
    
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/theory")) return "/theory";
    if (currentPath.startsWith("/practice")) return "/practice";
    if (currentPath.startsWith("/vocab")) return "/vocab";
    return "/dashboard"; // Mặc định về dashboard
  };

  return (
    <button
      onClick={() => navigate(getBackPath())}
      className={`
        mb-4 sm:mb-6 px-5 py-3 sm:px-6 sm:py-3.5 
        rounded-xl sm:rounded-2xl
        bg-gradient-to-r from-blue-500 to-blue-600
        hover:from-blue-600 hover:to-blue-700
        text-white
        font-bold
        text-sm sm:text-base
        shadow-lg
        border-2 border-blue-400/80 hover:border-blue-300
        flex items-center gap-2.5 sm:gap-3
        ${className}
      `}
    >
      <svg 
        width="18" 
        height="18" 
        className="sm:w-5 sm:h-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
      </svg>
      <span>Quay lại</span>
    </button>
  );
}
