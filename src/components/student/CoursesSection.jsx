import { NavLink } from "react-router-dom";
import { CourseCard } from "./CourseCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { dummyCourses } from "../../assets/assets";

export const CourseSection = () => {
  const{allCourses} = useContext(AppContext)
  return (
    <div className="w-full flex items-center flex-col py-4" >
      <h1 className="text-3xl font-medium mt-5">Learn from the best</h1>
      <p className="px-[10%] mt-3  ">
        Discover our top-rated courses various categories. From coding and
        design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 px-6 py-8 ">
        {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course}/>)}
      </div>

      <NavLink to="/courses-list"onClick={()=> scrollTo(0,0)} >
           <button className="text-gray-600 border border-gray-500 px-3 py-2 shadow-xl ">Show all courses</button>
      </NavLink>
    </div>
  );
};
