import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContextProvider";
import { useToast } from "@/contexts/ToastContextProvider";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const { addToast } = useToast();

  const handleClick = () => {
    addToast({
      title: "Consultation Requested!",
      description:
        "We'll contact you shortly to schedule your free consultation.",
      variant: "success",
      duration: 3000,
    });
  };

  const { theme, setTheme } = useTheme();

  const toggleTheme = (e) => {
    setTheme(() => {
      if (theme === "light") {
        e.target.innerText = "LightMode";
        return "dark";
      } else {
        e.target.innerText = "DarkMode";
        return "light";
      }
    });
  };

  return (
    <header
      className={`${theme} dark:bg-black/80 fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20  dark:backdrop:blur-2xl dark:backdrop:saturate-200`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="h-8 w-8 text-orange-400">
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
            </div>
            <span className="text-2xl font-bold text-white">BuildCraft</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-400 transition-all font-medium hover:scale-110"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Free Consultation
            </button>
            <button
              onClick={toggleTheme}
              className={`bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white  px-4 py-2 rounded-2xl cursor-pointer`}
            >
              DarkMode
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleClick}
              className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Free Consultation
            </button>
            <button
              onClick={toggleTheme}
              className={`mt-4 w-full  bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white  px-4 py-2 rounded-2xl cursor-pointer`}
            >
              DarkMode
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
