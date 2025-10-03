import { Search } from "../../components/student/SearchBar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { CourseCard } from "../../components/student/CourseCard";
import { Footer } from "../../components/student/Footer";
// import { course } from "../../assets/assets";

export const CoursesList = () => {
  const { allCourses, navigate } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input
        ? setFilteredCourse(
            tempCourses.filter(item=>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <h1 className="text-3xl font-medium pl-8 py-8">Course List</h1>
      <div className="flex flex-row justify-evenly px-[8%]">
        <p className="flex text-center">
          <span onClick={() => navigate("/")} className="text-indigo-600">
            Home
          </span>{" "}
          /<span> Course List</span>
        </p>
        <Search data={input} />
      </div>

      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 px-5 py-4 mb-8 shadow-gray-500 ">
        {filteredCourse.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Footer />
    </>
  );
};
