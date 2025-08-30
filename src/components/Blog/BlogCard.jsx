export const BlogCard = ({
  alt,
  src,
  title,
  author,
  date,
  excerpt,
  onClick,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-orange-400/50 transition-all duration-300 flex flex-col hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          alt={alt}
          src={`blog-images/${src}`}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <div className="h-4 w-4 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <span>{formattedDate}</span>
          <span className="mx-2">|</span>
          <div className="h-4 w-4 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span>{author}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 flex-grow">{title}</h3>

        <p className="text-gray-300 mb-6 leading-relaxed">{excerpt}</p>

        <button
          onClick={onClick}
          className="mt-auto w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          Read More
          <div className="ml-2 h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
