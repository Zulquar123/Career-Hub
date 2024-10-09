import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Statistic from "./Statistic";
import AppliedJob from "./AppliedJob";
import Blog from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path: "/applied-job",
        element: <AppliedJob />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
