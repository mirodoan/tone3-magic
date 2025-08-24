import React from "react";

// Sử dụng prop bgPattern cho ảnh nền hoặc SVG pattern (cloud, fan, hoa...)
export default function ChineseSectionCard({ title, children, bgPattern }) {
  return (
    <div
      className="relative rounded-xl shadow-lg p-6 mb-6 overflow-hidden bg-white"
      style={{
        background: bgPattern
          ? `url(${bgPattern}) center/cover no-repeat`
          : "linear-gradient(135deg, #F8F6F0 60%, #8EC6EC 100%)"
      }}
    >
      <h2 className="text-xl font-bold text-[#E63946] mb-4 font-[Quicksand,sans-serif] tracking-wide">
        {title}
      </h2>
      <div>{children}</div>
      {/* Responsive: padding, font, layout tự co giãn */}
    </div>
  );
}