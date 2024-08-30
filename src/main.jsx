import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Index from "./pages/index.jsx";
import Courses from "./pages/Courses.jsx";
import NewCourse from "./pages/NewCourse.jsx";
import UpdateCourse from "./pages/UpdateCourse.jsx";
import Instructors from "./pages/Instructors.jsx";
import NewInstructor from "./pages/NewInstructor.jsx";
import UpdateInstructor from "./pages/UpdateInstructor.jsx";
import InstructorDetails from "./pages/InstructorDetails.jsx";
import Students from "./pages/Students.jsx";
import StudentInfo from "./pages/StudentInfo.jsx";
import NewStudent from "./pages/NewStudent.jsx";
import UpdateStudent from "./pages/UpdateStudent.jsx";
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
        element: <Students />,
      },
      {
        path: "student-details/:studentId/:studentName",
        element: <StudentInfo />,
      },
      {
        path: "new-student",
        element: <NewStudent />,
      },
      {
        path: "update-student/:studentId/:studentName",
        element: <UpdateStudent />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "new-course",
        element: <NewCourse />,
      },
      {
        path: "update-course/:id/:course",
        element: <UpdateCourse />,
      },
      {
        path: "new-instructor",
        element: <NewInstructor />,
      },
      {
        path: "update-instructor/:id",
        element: <UpdateInstructor />,
      },
      {
        path: "instructor-details/:id",
        element: <InstructorDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
