import SiteLayout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

const MainRoutes = {
  path: "/",
  element: <SiteLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
};

export default MainRoutes;
