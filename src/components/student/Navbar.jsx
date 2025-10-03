import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
export const NavBar = () => {
  const isCourseListPage = location.pathname.includes("/courses-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between  px-4 py-4 md:px-14 lg:px-36 border-b-2 border-gray-400
     ${isCourseListPage ? "bg-cyan-100/70" : "bg-cyan-100/70"}`}
    >
      <NavLink to="/">
        <div className="flex font-bold text-xl  md:text-2xl">
          <img
            src={assets.logo2}
            alt="logo"
            className="w-7 md:w-12 lg:w-12 cursor-pointer "
          />
          <span className="ml-1.5 pt-1 md:text-2xl text-[20px]">EduSphere</span>
        </div>
      </NavLink>
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        {user && (
          <>
            <button>Become Educator</button> |
            <NavLink to="/my-enrollments">My Enrollments</NavLink>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            // onClick={() => {
            //   return openSignIn();
            // }}
            className="bg-blue-500 rounded-full px-5 py-2 text-white"
          >
            <NavLink to="/signup">Create Account</NavLink>
          </button>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            // onClick={() => {
            //   return openSignIn();
            // }}
            className="bg-blue-500 rounded-full px-5 py-2 text-white"
          >
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
      </div>

      {/* //for phone screen */}
      <div className="md:hidden flex justify-center text-center">
        <div className="flex justify-center text-center gap-1 text-[14px] text-blue-700 font-[400] pl-3  md:hidden ">
          {user && (
            <>
              <NavLink to='/educator'>Become Educator</NavLink>
              <NavLink to="/my-enrollments">My Enrollments</NavLink>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <img
              onClick={() => {
                return openSignIn();
              }}
              src={assets.user_icon}
            />
          )}
        </div>
      </div>
    </div>
  );
};
