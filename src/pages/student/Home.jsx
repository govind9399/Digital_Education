import { CallToAction } from "../../components/student/CallToAction"
import { Companies } from "../../components/student/Companies"
// import { CourseCards } from "../../components/student/CourseCard"
import { CourseSection } from "../../components/student/CoursesSection"
import { Footer } from "../../components/student/Footer"
import { Hero } from "../../components/student/Hero"
// import { NavBar } from "../../components/student/Navbar";
import { Search } from "../../components/student/SearchBar"
import { TestimonialsSection } from "../../components/student/TestimonialsSection"

 export const Home=()=>{
     return(
        <>
         {/* <NavBar/> */}
         <Hero/>
         <Search/>
         <Companies/>
         {/* <CourseCards/> */}
        <CourseSection/>
         <TestimonialsSection/>
         <CallToAction/>
         <Footer/>
         </>
     )
 }
