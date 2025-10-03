import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Student pages
import { Home } from "./pages/student/Home";
import { MyEnrollments } from "./pages/student/MyEnrollments";
import { CoursesList } from "./pages/student/CoursesList";
import { Player } from "./pages/student/Player";
import { CourseDetails } from "./pages/student/CourseDetails";
import { Loading } from "./components/student/Loading";
import { NavBar } from "./components/student/Navbar";

// Educator pages
import { AddCourse } from "./pages/educator/AddCourse";
import { Dashboard } from "./pages/educator/Dashboard";
import { Educator } from "./pages/educator/Educator";
import { MyCourse } from "./pages/educator/MyCourse";
import { StudentsEnrolled } from "./pages/educator/StudentsEnrolled";

// Auth pages
import { Login } from "./Authentication/Login";
import { Signup } from "./Authentication/Signup";
import { SignIn } from "@clerk/clerk-react";
import { ForgetPassword } from "./Authentication/forgetPassword";

// Layout for student pages (with NavBar)
const StudentLayout = () => (
  <div>
    <NavBar />
    <Outlet /> {/* Renders child routes */}
  </div>
);

// Layout for educator pages (no NavBar)
const EducatorLayout = () => (
  <div>
    <Outlet />
  </div>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StudentLayout />, // All student pages use this layout
      children: [
        { path: "/", element: <Home /> },
        { path: "/my-enrollments", element: <MyEnrollments /> },

        {
          path: "/courses-list",
          element: <CoursesList />,
          children: [
            {
              path: "/courses-list/:id",
              element: <CoursesList />,
            },
          ],
        },
        { path: "/player/:courseId", element: <Player /> },

        {
          path: "/course-details",
          element: <CourseDetails />,
          children: [
            {
              path: "/course-details/:id",
              element: <CourseDetails />,
            },
          ],
        },
        { path: "/loading/:path", element: <Loading /> },
      ],
    },
    {
      path: "/educator",
      element: <Educator />, // Educator pages layout
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "add-course", element: <AddCourse /> },
        { path: "my-courses", element: <MyCourse /> },
        { path: "students-enrolled", element: <StudentsEnrolled /> },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
