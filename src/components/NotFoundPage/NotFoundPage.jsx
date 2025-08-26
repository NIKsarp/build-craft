import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="my-30">
      <h2 className="text-9xl">404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <NavLink to="/" className="text-9xl">
        Go to Homepage
      </NavLink>
    </div>
  );
};
