import SiteLayout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import CourseDetails from "../pages/CourseDetails";

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
    { path: "details", element: <CourseDetails /> },
  ],
};

export default MainRoutes;
