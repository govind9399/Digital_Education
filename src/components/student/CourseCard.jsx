import { assets } from "../../assets/assets";
import { DummyDashboardData } from "../../assets/assets";
import { CourseSection } from "./CoursesSection";
export const CourseCards = () => {
  return (
    <div className="flex flex-col text-center pt-8">
    
    <CourseSection/>

      <div className="grid grid-cols-4 gap-3  mt-[30px] py-3 px-8">
        <div className="flex flex-col text-start  ">
          <img src={assets.course_1_thumbnail} alt="" className=" " />
          <h1>Buid Text to image SaaS App in React JS</h1>
          <p>name:</p>
          <p></p>
        </div>
        <div className="flex flex-col text-start  ">
          <img src={assets.course_2_thumbnail} alt="" className="" />
          <h1>Buid Al BG Removal Saas App in React JS</h1>
          <p>name:</p>
        </div>
        <div className="flex flex-col text-start  ">
          <img src={assets.course_3_thumbnail} alt="" className="" />
          <h1>React Router Complete Course in One Video</h1>
          <p>name:</p>
        </div>
        <div className="flex flex-col text-start  ">
          <img src={assets.course_4_thumbnail} alt="" className=" " />
          <h1>Build Full Stack E-Commerce App in React JS</h1>
          <p>name:</p>
        </div>
      </div>
    </div>
  );
};
