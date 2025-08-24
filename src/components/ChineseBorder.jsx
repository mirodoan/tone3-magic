export default function ChineseBorder() {
  return (
    <svg
      className="fixed inset-0 pointer-events-none z-50"
      width="100vw"
      height="100vh"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh" }}
    >
      {/* Top left */}
      <g stroke="#E63946" strokeWidth="2">
        <polyline points="2,2 2,15 15,15 15,2" fill="none"/>
        <polyline points="6,2 6,11 11,11 11,2" fill="none"/>
      </g>
      {/* Top right */}
      <g stroke="#E63946" strokeWidth="2">
        <polyline points="98,2 98,15 85,15 85,2" fill="none"/>
        <polyline points="94,2 94,11 89,11 89,2" fill="none"/>
      </g>
      {/* Bottom left */}
      <g stroke="#E63946" strokeWidth="2">
        <polyline points="2,98 2,85 15,85 15,98" fill="none"/>
        <polyline points="6,98 6,89 11,89 11,98" fill="none"/>
      </g>
      {/* Bottom right */}
      <g stroke="#E63946" strokeWidth="2">
        <polyline points="98,98 98,85 85,85 85,98" fill="none"/>
        <polyline points="94,98 94,89 89,89 89,98" fill="none"/>
      </g>
      {/* Sides */}
      <rect x="2" y="2" width="96" height="96" stroke="#E63946" strokeWidth="2" fill="none"/>
    </svg>
  );
}