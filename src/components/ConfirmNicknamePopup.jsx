// ConfirmNicknamePopup displays a welcome-back popup for returning users.
export default function ConfirmNicknamePopup({ nickname, onConfirm, onReject }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      {/* Popup card with gradient background and shadow, wide for single-line on desktop */}
      <div className="bg-gradient-to-br from-[#FFDAC1] via-[#FFB7B2] to-[#FF9AA2] rounded-2xl shadow-2xl p-8 min-w-[350px] max-w-[98vw] w-[480px] flex flex-col items-center animate-fade-in">
        {/* Avatar icon - clear and bright */}
        <div className="bg-[#FF9AA2] rounded-full p-4 mb-4 border-4 border-white shadow-lg flex items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="18" r="10" fill="#fff"/>
            <ellipse cx="24" cy="34" rx="15" ry="8" fill="#ffe2cc"/>
          </svg>
        </div>
        {/* Friendly Vietnamese title, modern rounded font, increased size */}
        <h2 className="text-3xl font-bold mb-4 text-[#D7263D] drop-shadow tracking-wide">
          Chào mừng bạn quay lại!
        </h2>
        {/* Vietnamese subtitle with highlighted nickname, instruction split into two lines */}
        <p className="mb-6 text-lg text-gray-900 font-medium w-full text-center leading-relaxed">
          Bạn có phải là <span className="font-extrabold text-[#D7263D] text-xl">{nickname}</span> không?
          <br />
          Hãy xác nhận để tiếp tục hành trình nhé!
        </p>
        {/* Responsive buttons - large and clear, always in a row on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
          <button
            className="flex-1 bg-[#D7263D] text-white px-4 py-3 rounded-full font-semibold shadow-xl transition hover:bg-[#ff4b5c] hover:scale-105 duration-200"
            onClick={onConfirm}
          >
            Đúng, tôi là {nickname}
          </button>
          <button
            className="flex-1 bg-white border border-[#FFB7B2] text-[#FF9AA2] px-4 py-3 rounded-full font-semibold shadow-xl transition hover:bg-[#FFB7B2] hover:text-[#D7263D] hover:scale-105 duration-200"
            onClick={onReject}
          >
            Tôi là người khác
          </button>
        </div>
        {/* Decorative accent dots at the bottom */}
        <div className="flex gap-1 justify-center mt-6">
          <span className="w-2 h-2 rounded-full bg-[#FF9AA2]/40" />
          <span className="w-2 h-2 rounded-full bg-[#FFB7B2]/40" />
          <span className="w-2 h-2 rounded-full bg-[#FFDAC1]/40" />
        </div>
      </div>
      {/* Fade-in animation for popup appearance */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeInPopup 0.5s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeInPopup {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
}