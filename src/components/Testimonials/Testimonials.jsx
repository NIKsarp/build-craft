import { ClientCard } from "./ClientCard";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      src: "rajesh-sharma.jpg",
      role: "Homeowner",
      location: "Gurgaon",
      rating: 5,
      text: "The BuildCraft team turned our dream home into reality. The quality of work is exceptional, and the timeline was maintained.",
      image: "Professional Indian businessman in formal attire smiling",
    },
    {
      id: 2,
      name: "Priya Agarwal",
      src: "priya-agarwal.jpg",
      role: "Interior Designer",
      location: "Delhi",
      rating: 5,
      text: "I've worked with many contractors, but BuildCraft's professionalism and attention to detail are outstanding.",
      image: "Professional Indian woman architect with blueprints",
    },
    {
      id: 3,
      name: "Amit Kumar",
      src: "amit-kumar.jpg",
      role: "Business Owner",
      location: "Noida",
      rating: 5,
      text: "The construction of our office complex was very smooth. The team is very cooperative and does not compromise on quality.",
      image: "Indian business owner in office environment",
    },
    {
      id: 4,
      name: "Sunita Devi",
      src: "sunita-devi.jpg",
      role: "Homeowner",
      location: "Faridabad",
      rating: 5,
      text: "Everything from interior design to construction was perfect. The budget was maintained, and the result is amazing.",
      image: "Happy Indian homeowner woman in modern home",
    },
  ];

  return (
    <section className="testimonials-section py-20 dark:bg-gray-950">
      <div className="testimonials-section__container container mx-auto px-4">
        <div className="testimonials-section__header text-center mb-16">
          <h2 className="testimonials-section__title text-4xl lg:text-6xl font-bold text-white mb-6">
            Client{" "}
            <span className="testimonials-section__title-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Testimonials
            </span>
          </h2>
          <p className="testimonials-section__description text-xl text-gray-300 max-w-3xl mx-auto">
            What our satisfied clients say about our services.
          </p>
        </div>

        {/* Testimonials Card */}
        <div className="testimonials-section__grid grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <ClientCard
              key={testimonial.id}
              name={testimonial.name}
              src={testimonial.src}
              role={testimonial.role}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>

        <div className="testimonials-section__stats mt-16 text-center">
          <div className="testimonials-section__stats-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="testimonials-section__stat-item text-center">
              <div className="testimonials-section__stat-number text-4xl font-bold text-orange-400 mb-2">
                4.9/5
              </div>
              <div className="testimonials-section__stat-label text-gray-300">
                Average Rating
              </div>
            </div>
            <div className="testimonials-section__stat-item text-center">
              <div className="testimonials-section__stat-number text-4xl font-bold text-orange-400 mb-2">
                500+
              </div>
              <div className="testimonials-section__stat-label text-gray-300">
                Happy Clients
              </div>
            </div>
            <div className="testimonials-section__stat-item text-center">
              <div className="testimonials-section__stat-number text-4xl font-bold text-orange-400 mb-2">
                100%
              </div>
              <div className="testimonials-section__stat-label text-gray-300">
                Project Success
              </div>
            </div>
            <div className="testimonials-section__stat-item text-center">
              <div className="testimonials-section__stat-number text-4xl font-bold text-orange-400 mb-2">
                15+
              </div>
              <div className="testimonials-section__stat-label text-gray-300">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
