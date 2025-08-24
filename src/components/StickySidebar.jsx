import React from "react";

const TABS = [
  {
    key: "home",
    label: "Trang chủ",
    icon: (
      <svg width="24" height="24" fill="none">
        <path d="M4 10.5L12 4l8 6.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10.5z" stroke="currentColor" strokeWidth="2" />
        <rect x="9" y="15" width="6" height="7" rx="1" fill="currentColor" />
      </svg>
    )
  },
  {
    key: "theory",
    label: "Lý thuyết",
    icon: (
      <svg width="24" height="24" fill="none">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    key: "practice",
    label: "Luyện tập",
    icon: (
      <svg width="24" height="24" fill="none">
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    key: "vocab",
    label: "Từ khó",
    icon: (
      <svg width="24" height="24" fill="none">
        <path d="M12 17l-6-5.5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.5L12 17z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="9" r="2" fill="currentColor" />
      </svg>
    )
  },
];

export default function StickySidebar({ activeTab = "home", onTabChange }) {
  return (
    <nav
      className={`
        fixed z-50 bg-white
        flex justify-between items-center
        border-gray-200 shadow-lg
        w-full
        px-2 py-1
        bottom-0 left-0 right-0 border-t
        sm:top-0 sm:bottom-auto sm:left-0 sm:right-0 sm:justify-center sm:h-20 sm:px-10
        sm:border-t-0 sm:border-b
        sm:rounded-b-2xl
        transition-all
      `}
      style={{
        // Tăng shadow và border cho desktop
        boxShadow: "0 2px 24px 0 rgba(215,38,61,0.08)",
      }}
    >
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => onTabChange?.(tab.key)}
          className={`
            flex flex-col items-center justify-center flex-1 py-2 transition
            ${activeTab === tab.key ? "text-[#D7263D] font-bold" : "text-gray-400 font-medium"}
            hover:text-[#D7263D]
            sm:mx-4
          `}
        >
          <span className="w-7 h-7 mb-1 flex items-center justify-center">
            {React.cloneElement(tab.icon, {
              className: activeTab === tab.key ? "text-[#D7263D]" : "text-gray-400"
            })}
          </span>
          <span className="text-xs sm:text-sm">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}