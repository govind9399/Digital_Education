import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/educator/NavBar"
import { SideBar } from "../../components/educator/SideBar"

 export const Educator=()=>{
     return(
            <div>
            <Navbar/>
            <SideBar/>
             <Outlet/>
          </div>
      )
 }
