import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

import Footer from "../Components/Footer";

const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Testimonials = lazy(() => import("../Pages/Testimonials"));
const Collection = lazy(() => import("../Pages/Collection"));

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/collection", element: <Collection /> },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {routes}       
      <Footer />       
    </Suspense>
  );
};

export default AppRoutes;
