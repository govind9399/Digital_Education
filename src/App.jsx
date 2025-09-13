import { Login } from "./Authentication/Login";
import { LandingPage } from "./pages/LandingPage";
import { Signup } from "./Authentication/Signup";
import { Setting } from "./pages/settingPage";
import { Quizzes } from "./pages/quizzes";
import { Assignments } from "./pages/assignments";
import { StudentProgress } from "./pages/studentProgress";
import { Course } from "./pages/courseDetails";
import { StudentDashboard } from "./pages/studentDashboard";
 import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signup/login",
      element: <Login />,
    },
    {
      path: "/login/signup",
      element: <Signup />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/assignments",
      element: <Assignments />,
    },
    {
      path: "/courses",
      element: <Course />,
    },
    {
      path: "/quizzes",
      element: <Quizzes />,
    },
    {
      path: "/progress",
      element: <StudentProgress />,
    },
    {
       path:"/Login/pages/studentDashboard",
       element:<StudentDashboard/>,
    }
  ]);
  return <RouterProvider router={router} />;
};
export default App;
