import { Login } from "./Authentication/Login";
import { LandingPage } from "./pages/LandingPage";
import { Signup } from "./Authentication/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// student
import { Home } from "./pages/student/Home";
import { MyEnrollments } from "./pages/student/MyEnrollments";
 import { CoursesList } from "./pages/student/CoursesList";
import { Player } from "./pages/student/Player";
import { CourseDetails } from "./pages/student/CourseDetails";

//Educator
import { AddCourse } from "./pages/educator/AddCourse";
import { Dashboard } from "./pages/educator/Dashboard";
import { Educator } from "./pages/educator/Educator";
import { MyCourse } from "./pages/educator/MyCourse";
import { StudentsEnrolled } from "./pages/educator/StudentsEnrolled";

// import { NavBar } from "./components/student/Navbar";

const App = () => {
      // <NavBar/>
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-enrollments",
      element: <MyEnrollments />,
    },
    {
      path: "/player/:courseId",
      element: <Player />,
    },
    {
      path: "/course-details/:id",
      element: <CourseDetails/>
    },
    {
      path: "/courses-list",
      element: <CoursesList />,
    },
    {
      path: "/add-course",
      element: <AddCourse />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/educator",
      element: <Educator />,
      children:[
          {
             path: "educator",
             element:<Dashboard/>
          },
          {
            path: "add-courses",
            element:<AddCourse/>
          },
          {
            path:"my-courses",
            element:<MyCourse/>
          },
          {
            path:"students-enrolled",
            element:<StudentsEnrolled/>
          }
      ]
    },
    {
      path: "/my-courses",
      element: <MyCourse />,
    },
    {
      path: "/student-enrolled",
      element: <StudentsEnrolled />,
    },
  ]);
    
  return <RouterProvider router={router} />;
};
export default App;
