import React, { useState } from "react";
import LogoCircle from "../components/LogoCircle";
import StickySidebar from "../components/StickySidebar";

// Sidebar tab data and icon
const SIDEBAR_TABS = [
  {
    key: "home",
    label: "Trang chủ",
    icon: (
      // Home icon SVG
      <svg width="28" height="28" fill="none">
        <path d="M6 13L14 6l8 7V24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V13z" stroke="currentColor" strokeWidth="2"/>
        <rect x="11" y="18" width="6" height="7" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "theory",
    label: "Lý thuyết",
    icon: (
      // Theory icon SVG
      <svg width="28" height="28" fill="none">
        <rect x="6" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 12h8M10 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "practice",
    label: "Luyện tập",
    icon: (
      // Practice icon SVG
      <svg width="28" height="28" fill="none">
        <path d="M14 9v7l5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key: "vocab",
    label: "Từ khó",
    icon: (
      // Vocab icon SVG
      <svg width="28" height="28" fill="none">
        <path d="M14 21l-7-6V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7l-7 6z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="11" r="3" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function LayoutWithSidebar({ children }) {
  // State for active tab
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F55656] to-[#FFB6B6] flex">
      {/* Sidebar for desktop/tablet */}
      <aside className="hidden sm:flex flex-col items-center bg-white shadow-lg w-64 h-screen fixed top-0 left-0 z-40 px-0">
        {/* Logo section with responsive gradient pink circle */}
        <div className="flex flex-col items-center py-7 gap-2 w-full">
          <LogoCircle text="三" />
          <span className="font-bold text-[#D7263D] text-2xl tracking-wide mt-2">
            Tone 3 Magic
          </span>
        </div>
        {/* Menu tab section */}
        <nav className="flex flex-col gap-3 mt-8 w-full px-4">
          {/* Tab menu with rounded, highlight active tab, icon and label */}
          {SIDEBAR_TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-4 py-4 px-5 rounded-2xl transition-all
                text-lg font-semibold
                ${activeTab === tab.key
                  ? "bg-[#FFE6EB] text-[#D7263D] shadow font-bold"
                  : "text-gray-400 hover:bg-[#F7F7F7]"}
                hover:text-[#D7263D]
              `}
              style={{
                boxShadow: activeTab === tab.key ? "0 2px 8px #ffb6b680" : undefined,
              }}
            >
              <span className={`text-2xl ${
                activeTab === tab.key
                  ? "text-[#D7263D]"
                  : "text-gray-400"
              }`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content - children injected here */}
      <main className="flex-1 flex justify-center items-center sm:pl-64 px-2 py-2">
        {children}
      </main>

      {/* Sticky sidebar menu for mobile at the bottom */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-2 pb-2">
        <div className="bg-white rounded-t-2xl shadow-xl border border-red-100">
          <StickySidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}