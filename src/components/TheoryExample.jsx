export default function TheoryExample({ example }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="font-bold text-lg mb-2">{example.label}</div>
      <div className="mb-1 text-xl font-semibold text-gray-800">{example.origin}</div>
      <div className="mb-1 text-xl font-semibold text-red-500">{example.changed}</div>
      <div className="mb-2 text-base text-gray-700">{example.meaning}</div>
    </div>
  );
}