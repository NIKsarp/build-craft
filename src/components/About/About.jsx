import { Images } from "./Images";

export const About = () => {
  const stats = [
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
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      number: "15+",
      label: "Years of Experience",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      number: "500+",
      label: "Happy Clients",
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      number: "100%",
      label: "On-Time Delivery",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      number: "5",
      label: "Year Warranty",
    },
  ];

  return (
    <section id="about" className="py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Us
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                BuildCraft Solutions is a leading construction company providing
                quality services for over 15 years. Our expert team has deep
                expertise in civil engineering, architecture, and interior
                design.
              </p>

              <p>
                We combine the latest technology with traditional craftsmanship
                to deliver exceptional results. Our mission is to turn every
                client's dream into a reality.
              </p>

              <p>
                Quality, transparency, and customer satisfaction are our core
                values. We treat every project as our own and work with complete
                dedication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Images by External Component */}
            <Images />

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
              ISO Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
