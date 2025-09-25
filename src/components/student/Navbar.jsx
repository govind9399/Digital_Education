import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-cyan-100/70 px-8 py-2  md:px-14 lg:px-36 border-b-2 border-gray-400">
      <div className="flex font-bold text-xl  md:text-2xl">
        <img
          src={assets.logo2}
          alt="logo"
          className="w-8 md:w-12 lg:w-12 cursor-pointer"
        />
        <span className="ml-1.5 pt-1">EduSphere</span>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <button className="bg-blue-500 rounded-full px-5 py-2 text-white">
          Create Account
        </button>
      </div>
    </div>
  );
};
