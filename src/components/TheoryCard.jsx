export default function TheoryCard({
  image,
  description,
  views,
  likes,
  comments,
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
        {/* Stats section with icons, always beautiful and responsive */}
        <div className="flex flex-wrap gap-4 items-center text-gray-500 text-base mt-2 mb-2">
          {/* Views (eye icon) */}
          <span className="flex items-center gap-1 min-w-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{views}</span>
          </span>
          {/* Likes (thumb up icon) */}
          <span className="flex items-center gap-1 min-w-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
              <path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
            </svg>
            <span className="truncate">{likes}</span>
          </span>
          {/* Comments (comment icon) */}
          <span className="flex items-center gap-1 min-w-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
}