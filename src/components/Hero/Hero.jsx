export const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  const handleButtonClick = () => {
    alert("This feature will be implemented soon!");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className=" inset-0 opacity-10">
        <div className=" inset-0" style={backgroundStyle}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center space-x-2 text-orange-400">
            <div className="h-5 w-5 fill-current">
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
            <span className="font-semibold">
              India's #1 Construction Company
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Building Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Dream
            </span>{" "}
            Home
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Complete construction solutions with Civil Engineering, Structural
            Design, Architecture, Interior Design, and Surveying. 15+ years of
            experience and 500+ successful projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 rounded-md transition-colors flex items-center"
            >
              Start a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              onClick={handleButtonClick}
              className="border border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-md transition-colors"
            >
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-gray-300">Satisfied Clients</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img
              alt="Modern construction site with architectural blueprints"
              className="rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1686358244570-631340cbbd22"
            />
          </div>

          <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 animate-bounce">
            <div className="text-orange-400 font-bold text-lg">$5M+</div>
            <div className="text-white text-sm">Project Value</div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 animate-bounce animation-delay-1000">
            <div className="text-orange-400 font-bold text-lg">24/7</div>
            <div className="text-white text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
