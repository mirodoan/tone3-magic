export default function TheoryCard({
  image,
  description,
  views,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full transition duration-200 ease-in-out
        hover:scale-105 hover:shadow-2xl
        cursor-pointer max-w-xs">
      <div className="relative h-40 flex items-center justify-center">
        {image && (
          <img
            src={image}
            alt={description}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="font-semibold text-[#232323] text-xl mb-2 line-clamp-2">{description}</div>
        {/* Stats section with views only */}
        <div className="flex items-center text-gray-500 text-base mt-2 mb-2">
          {/* Views (eye icon) */}
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{views}</span>
          </span>
        </div>
      </div>
    </div>
  );
}