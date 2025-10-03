import { NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbMessageUser } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
export const SideBar = () => {
  return (
 
      <div className="md:flex h-[100%] flex-col border-r border-gray-700  gap-4 pl-4 text-xl pt-5 hidden">
        <NavLink
          to="/educator/dashboard"
          className="flex py-3  gap-4 hover:bg-indigo-100 hover:border-r-4 border-indigo-400 "
        >
          <MdOutlineDashboard />
          Dashboard
        </NavLink>

        <NavLink
          to="/educator/add-course"
          className="flex gap-4 py-3  hover:bg-indigo-100 hover:border-r-4 border-indigo-400"
        >
          <BiAddToQueue /> Add Course
        </NavLink>

        <NavLink
          to="/educator/my-courses"
          className="flex gap-4 py-3  hover:bg-indigo-100 hover:border-r-4 border-indigo-400"
        >
          <TbMessageUser />
          My Courses
        </NavLink>

        <NavLink
          to="/educator/students-enrolled"
          className="flex gap-4 py-3  hover:bg-indigo-100 hover:border-r-4 border-indigo-400"
        >
          <FaUserPlus />
          Student Enrolled
        </NavLink>

        {/* for phone screen */}
      </div>
    );
};
