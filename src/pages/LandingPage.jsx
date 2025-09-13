import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import { SiStudyverse } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";

export const LandingPage = () => {
  const setNavLink = (isActive) => {
    if (isActive) {
      backgroundColor: isActive ? "blue" : "white";
    }
  };
  return (
    <>
      <div className="background" style={{backgroundImage:"url(./landing.jpg)"}}>
        {/* navigation bar */}

        <div className="navbar">
          <div>
            <h1 className="font-bold text-2xl flex">
              <SiStudyverse  className="text-3xl mr-2"/>
              EduLearn
            </h1>
          </div>
          <div className="flex justify-evenly">
            <div className="auth text-[20px] font-semibold">
              <select name="language">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div>
              <NavLink to="Login" style={setNavLink}>
                <button type="input">Login</button>
              </NavLink>
            </div>

            <div>
              <NavLink to="Signup">
                <button type="input">Sign Up</button>
              </NavLink>
            </div>

          </div>

        </div>

        {/* hero section */}

        <div className="hero-section font-semibold text-2xl  ">
          <div className="courses flex justify-evenly">
            <NavLink to="courseDetails">
              <h2> Course</h2>
            </NavLink>

            <NavLink to="quizzes">
              <h2>Quizzes</h2>
            </NavLink>

            <NavLink to="assignments">
              <h2>Assignments</h2>
            </NavLink>

            <NavLink to="studentProgress">
              <h2>Student Progress</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
