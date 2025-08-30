import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { Layout } from "@/pages/Layout.jsx";
import { Home } from "@/pages/Home.jsx";
import { NotFoundPage } from "@/components/NotFoundPage/NotFoundPage.jsx";
import { ThemeContextProvider } from "@/contexts/ThemeContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      {/* Error Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const App = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
};
