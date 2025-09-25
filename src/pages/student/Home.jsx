import { Companies } from "../../components/student/Companies"
import { Hero } from "../../components/student/Hero"
import { NavBar } from "../../components/student/Navbar"
import { Search } from "../../components/student/SearchBar"

 export const Home=()=>{
     return(
        <>
         <NavBar/>
         <Hero/>
         <Search/>
         <Companies/>
         <h1>Home</h1>
        </>
     )
 }
