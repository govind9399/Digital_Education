import { AppContext } from "../../context/AppContext";
import { dummyTestimonial } from "../../assets/assets";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
export const TestimonialsSection = ({ testimonial }) => {
  const { allTestimonial } = useContext(AppContext);
  return (
    <div className="flex justify-center text-center flex-col my-10">

      <h1 className="text-2xl font-semibold mb-3 ">Testimonials</h1>
      <p className="px-[5%] hidden md:flex text-center flex-col">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their
        lives.
      </p>

   {/* //for the phone screen */}

      <p className="px-[5%] md:hidden ">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their
        lives.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 w-full px-[20%] mt-5 justify-center items-center ">
        {allTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col shadow-xl justify-center items-center rounded-xl pb-6  "
          >
            <div className="flex  bg-gray-200 rounded-xl">
              <img src={testimonial.image} alt="" className="w-[40%]" />
              <div className="flex justify-center pl-5  flex-col">
                <p>{testimonial.name}</p>
                <p>{testimonial.role} </p>
              </div>
            </div>
            <p>{testimonial.rating}</p>
            <p className="px-4 text-start text-[15px] text-gray-700">
              {testimonial.feedback}{" "}
            </p>
            <Link to="#" className="text-blue-700 my-3">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
