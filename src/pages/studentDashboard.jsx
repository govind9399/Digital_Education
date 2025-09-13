import { NavLink } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaHome } from "react-icons/fa";
export const StudentDashboard = () => {
  return (
    <>
      <div className="navbar">
        <nav className="flex ">
          <h1>Digital Learning</h1>
          <span>Welcome, name</span>
          <button type="button">Logout</button>
        </nav>
      </div>

      <div className="font-semibold ml-4 text-xl">
        <h1 className="flex"><FaHome />Dashboard</h1>
        <NavLink to="./courseDEtails">
          <h1 className="flex">
            <MdOutlineMenuBook />
            Courses
          </h1>
        </NavLink>

        <NavLink to="./settingPage">
          <h1 className="flex">
            <AiFillSetting />
            Setting
          </h1>
        </NavLink>
        <h1 className="flex">
          <MdContactSupport />
          Support
        </h1>
      </div>
    </>
  );
};
