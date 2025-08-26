import React, { useState } from "react";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "interior", name: "Interior" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Gurgaon",
      category: "residential",
      location: "Gurgaon, Haryana",
      year: "2023",
      description:
        "5000 sq ft luxury villa with modern architecture and premium interiors.",
      image:
        "Modern luxury villa with contemporary architecture and landscaping",
    },
    {
      id: 2,
      title: "Corporate Office Complex",
      category: "commercial",
      location: "Noida, UP",
      year: "2023",
      description:
        "50,000 sq ft commercial complex with sustainable design features.",
      image:
        "Modern corporate office building with glass facade and green spaces",
    },
    {
      id: 3,
      title: "Premium Apartment Interior",
      category: "interior",
      location: "Delhi",
      year: "2024",
      description:
        "3BHK apartment complete interior design with contemporary style.",
      image: "Luxurious apartment interior with modern furniture and lighting",
    },
    {
      id: 4,
      title: "Shopping Mall Construction",
      category: "commercial",
      location: "Faridabad, Haryana",
      year: "2022",
      description: "2 lakh sq ft shopping mall with multi-level parking.",
      image:
        "Large shopping mall construction with modern architectural design",
    },
    {
      id: 5,
      title: "Residential Township",
      category: "residential",
      location: "Greater Noida",
      year: "2023",
      description: "100+ units residential township with all modern amenities.",
      image: "Residential township with multiple buildings and green spaces",
    },
    {
      id: 6,
      title: "Restaurant Interior Design",
      category: "interior",
      location: "Mumbai",
      year: "2024",
      description: "Fine dining restaurant interior with elegant ambiance.",
      image:
        "Elegant restaurant interior with sophisticated lighting and decor",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleProjectClick = (projectTitle) => {
    alert(`View details for ${projectTitle} feature will be implemented soon!`);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-black/20 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check out our successful projects that are a perfect example of
            quality and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "border border-white text-white hover:bg-white hover:text-gray-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm mb-2">
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
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    {project.year}
                    <div className="h-4 w-4 ml-4 mr-2">
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
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    {project.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <button
                  onClick={() => handleProjectClick(project.title)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                >
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
