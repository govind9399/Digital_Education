import { Outlet } from "react-router-dom"

 export const Educator=()=>{
     return(
        <>
         <h1>Educator page</h1>
          <div>
             <Outlet/>
          </div>
        </>
     )
 }
