import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
export const Navbar = () => {
  return (
    <div className="flex w-full py-5 bg-cyan-100/70 px-8 border-b-1 border-gray-400 " >
      <NavLink to="/">
        <div className="flex font-bold text-xl  md:text-2xl">
          <img
            src={assets.logo2}
            alt="logo"
            className="w-7 md:w-12 lg:w-12 cursor-pointer "/>
          <span
            className="ml-1.5 pt-1 md:text-2xl text-[20px]" >
            EduSphere
          </span>
        </div>
      </NavLink>
    </div>
  );
};
