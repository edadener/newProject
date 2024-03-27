import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Communication from "./Pages/Communication";
import PrivateLesson from "./Pages/PrivateLesson";
import Salon from "./Pages/Salon";
import NotFoundPage from "./Pages/NotFoundPage";
import DanceOrganization from "./Pages/DanceOrganization";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import FrequentlAskedQuestion from "./Pages/FrequentlyAskedQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/privateLesson",
    element: <PrivateLesson />,
  },
  {
    path: "/danceOrganization",
    element: <DanceOrganization />,
  },
  {
    path: "/salon",
    element: <Salon />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/communication",
    element: <Communication />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/questions",
    element: <FrequentlAskedQuestion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
