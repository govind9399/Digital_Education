 import { NavLink } from "react-router-dom";
import { RiGraduationCapFill } from "react-icons/ri";
import {
  MdLanguage,
  MdOutlineAssignment,
  MdCollectionsBookmark,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";

export const LandingPage = () => {
  return (
    <>
      <div className="background min-h-screen  bg-[url(landingpage.jpg)] bg-center bg-cover bg-no-repeat">
        {/* navigation bar */}
        <div className="navbar flex justify-between items-center px-6 py-4 shadow">
          <h1 className="font-bold text-3xl flex items-center">
            <RiGraduationCapFill className="text-3xl mr-2 " />
            EduSphere
          </h1>

          <div className="flex items-center gap-4">
            <NavLink to="Login" 
             className="bg-stone-200  font-semibold px-4 py-2 rounded-2xl">Login</NavLink>

            <NavLink to="Signup" className="bg-blue-700 px-4 py-2 text-white font-semibold rounded-2xl">Sign Up</NavLink>

            <div className="flex items-center border rounded-lg px-2">
              <MdLanguage className="size-6" />
              <select
                name="language"
               >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="hero-section mt-16 text-2xl font-semibold">
          <div className="courses flex justify-evenly max-w-4xl mx-auto">
            <NavLink to="courseDetails">
              <SiBookstack className="text-blue-800 mr-2" />
              <h2>Course</h2>
            </NavLink>

            <NavLink to="quizzes">
              <MdCollectionsBookmark className="text-blue-800 mr-2" />
              <h2>Quizzes</h2>
            </NavLink>

            <NavLink to="assignments">
              <MdOutlineAssignment className="text-blue-800 mr-2" />
              <h2>Assignments</h2>
            </NavLink>

            <NavLink to="progress">
              <GiProgression className="text-blue-800 mr-2" />
              <h2>Student Progress</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
