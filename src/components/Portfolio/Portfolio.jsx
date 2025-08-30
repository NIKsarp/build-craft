import { Category } from "./Category";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Gurgaon",
      category: "residential",
      location: "Gurgaon, Haryana",
      year: "2023",
      description:
        "5000 sq ft luxury villa with modern architecture and premium interiors.",
      src: "Villa.jpg",
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
      src: "Office.jpg",
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
      src: "Apartment.jpg",
      image: "Luxurious apartment interior with modern furniture and lighting",
    },
    {
      id: 4,
      title: "Shopping Mall Construction",
      category: "commercial",
      location: "Faridabad, Haryana",
      year: "2022",
      description: "2 lakh sq ft shopping mall with multi-level parking.",
      src: "Mall.jpg",
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
      src: "Town.jpg",
      image: "Residential township with multiple buildings and green spaces",
    },
    {
      id: 6,
      title: "Restaurant Interior Design",
      category: "interior",
      location: "Mumbai",
      year: "2024",
      description: "Fine dining restaurant interior with elegant ambiance.",
      src: "Restaurant.jpg",
      image:
        "Elegant restaurant interior with sophisticated lighting and decor",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-black/20 to-transparent dark:bg-black"
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

        <Category projects={projects} />
      </div>
    </section>
  );
};
