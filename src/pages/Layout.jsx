import { Outlet } from "react-router";
import { Header, Footer } from "../components/index.js";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
