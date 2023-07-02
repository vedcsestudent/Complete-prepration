import React from "react";
import { SideNav } from "./SideNav";
const Home=()=>
{
   return <div className="home_container">
        <SideNav></SideNav>
        <div className="home_content">Click on any option in the side bar it will open the list of content with name of free resources from where you can prepare.
        <br/>
        This will help you in learning as you know the correct resources name and syllabus all at one place.
        
        </div>
    </div>
}
export default Home;