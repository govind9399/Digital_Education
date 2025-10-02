import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
export const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  return (
    <Link
      to={"/course-details/" + course.id}
      onClick={() => scrollTo(0, 0)}
      className="  shadow-xl rounded-[10px] "
    >
      <img src={course.courseThumbnail} alt="" />

      <div className="flex flex-col px-3 ">
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <p>{calculateRating(course)}</p>
        <div className="flex size-3">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={
                i < Math.floor(calculateRating(course))
                  ? assets.star
                  : assets.star_blank
              }
            />
          ))}
        </div>
        <p>22</p>
        <p>
          {currency} : {course.coursePrice}
        </p>
      </div>
    </Link>
  );
};
