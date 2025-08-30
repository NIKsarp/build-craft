import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:bg-black text-white flex flex-col text-center py-18 gap-8`}
    >
      <h2 className="text-9xl">404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <NavLink
        to="/"
        className="rounded-full border-opacity-0  p-4 font-bold transition-all duration-300 ease-in hover:bg-white border-4 hover:text-black  hover:border-blue-800"
      >
        Go to Homepage
      </NavLink>
    </div>
  );
};
