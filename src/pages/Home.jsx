import {
  Hero,
  Services,
  About,
  Portfolio,
  Blog,
  Testimonials,
  Contact,
  //  Toaster,
} from "@/components/index.js";
import { useTheme } from "@/contexts/ThemeContextProvider";

export const Home = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`${theme} dark:bg-gradient-to-tl dark:from-black dark:bg-black dark:to-black min-h-screen   bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-w-full`}
    >
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Testimonials />
      <Contact />
      {/* <Toaster /> */}
    </main>
  );
};
