import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      title: "Civil Engineering",
      text: "Complete civil engineering solutions including foundation design, structural analysis, and construction planning.",
      features: [
        "Foundation Design",
        "Structural Analysis",
        "Construction Planning",
        "Quality Control",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 7 6.2 21.8" />
          <path d="m11.5 8.5 4-4" />
          <path d="M16 5l5 5" />
          <path d="m12 12-4.2 4.2" />
          <path d="M3 3l18 18" />
        </svg>
      ),
      title: "Structural Design",
      text: "Advanced structural engineering for safe and efficient designs for residential and commercial buildings.",
      features: [
        "RCC Design",
        "Steel Structure",
        "Earthquake Resistant",
        "Load Calculations",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      ),
      title: "Architecture",
      text: "Creative architectural designs that perfectly balance functionality and aesthetics.",
      features: [
        "3D Modeling",
        "Floor Planning",
        "Elevation Design",
        "Landscape Design",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12h20" />
          <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
          <path d="m4 8 8-8 8 8" />
        </svg>
      ),
      title: "Interior Design",
      text: "Modern interior design solutions that make your space beautiful and functional.",
      features: [
        "Space Planning",
        "Furniture Design",
        "Lighting Design",
        "Color Consultation",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
      ),
      title: "Survey Services",
      text: "Accurate land surveying and mapping services with the latest technology.",
      features: [
        "Land Survey",
        "Topographic Survey",
        "Boundary Marking",
        "GPS Mapping",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Construction",
      text: "End-to-end construction services with quality materials and a skilled workforce.",
      features: [
        "Project Management",
        "Quality Materials",
        "Timely Delivery",
        "After Sales Service",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="dark:bg-black py-20 bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From construction to interior design, we are ready to turn your
            every dream into reality.
          </p>
        </div>

        {/* Service Card */}
        <div className="d grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              icon={service.icon}
              title={service.title}
              text={service.text}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
