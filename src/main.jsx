import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Index from "./pages/index.jsx";
import Courses from "./pages/Courses.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "students",
        element: <p>Students coming soon.</p>,
      },
      {
        path: "instructors",
        element: <p>Instructors coming soon.</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
