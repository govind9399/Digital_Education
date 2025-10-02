import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { dummyTestimonial } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllcourses] = useState([]);
  const [allTestimonial, setAllTestimonial] = useState([]);

  const fetchAllCourses = async () => {
    setAllcourses(dummyCourses);
  };
  const fetchAllTestimonials = async () => {
    setAllTestimonial(dummyTestimonial);
  };
  
  //function to calculate average rating of course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
    fetchAllTestimonials();
  }, []);
  const value = {
    allTestimonial,
    currency,
    allCourses,
    calculateRating,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
