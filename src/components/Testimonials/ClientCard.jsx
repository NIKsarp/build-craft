export const ClientCard = ({ name, src, role, location, rating, text }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 relative hover:scale-102">
      <div className="absolute top-6 right-6 h-8 w-8 text-orange-400/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      <div className="flex items-center mb-6">
        <img
          alt={name}
          src={`testimonial-images/${src}`}
          loading="lazy"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-xl font-bold text-white">{name}</h4>
          <p className="text-gray-300">{role}</p>
          <p className="text-orange-400 text-sm">{location}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <div key={i} className="h-5 w-5 text-orange-400 fill-current">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        ))}
      </div>

      <em className="text-gray-300 leading-relaxed text-lg">"{text}"</em>
    </div>
  );
};
