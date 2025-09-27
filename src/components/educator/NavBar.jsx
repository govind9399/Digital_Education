import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { MyEnrollments } from "../../pages/student/MyEnrollments";
export const NavBar = () => {
    const isCourseListPage= location.pathname.includes("/courses-list");
  return (
    <div className={`flex items-center justify-around  px-4 sm:px-10 md:px-14 lg:px-36 border-b-2 border-gray-300 ${isCourseListPage?'bg-white':'bg-cyan-100/70'}`}>
      <div className="  md:flex font-bold text-2xl  ">
        <img src={assets.logo2} alt="logo" className="w-28 lg:w-32 cursor-pointer" />
        <span className="ml-1.5">EduSphere</span>
      </div>

      <div className=" md:flex items-center gap-5 text-gray-500">
          <div>
             <button>Become Educator</button>
             <Link to="/my-enrollments">My Enrollments</Link>
          </div> 
        <button className="bg-blue-500 rounded-full px-5 py-2 text-white" >Create Account</button>
      </div>
    </div>
  );
};
