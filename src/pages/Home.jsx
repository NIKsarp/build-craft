import {
  Hero,
  Services,
  About,
  Portfolio,
  Blog,
  Testimonials,
  Contact,
} from "@/components/index.js";
import { useTheme } from "@/contexts/ThemeContextProvider";
import { Helmet } from "react-helmet";

export const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>
          BuildCraft Solutions - Construction, Architecture & Engineering
          Services
        </title>
        <meta name="author" content="Prashant Developer" />
        <meta
          name="description"
          content="Professional construction, architecture, structural engineering, interior design, and surveying services. Transform your vision into reality with our expert team."
        />
        <meta
          property="og:title"
          content="BuildCraft Solutions - Construction, Architecture & Engineering Services"
        />
        <meta
          property="og:description"
          content="Professional construction, architecture, structural engineering, interior design, and surveying services. Transform your vision into reality with our expert team."
        />
      </Helmet>
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
    </>
  );
};
