import React from "react";
import {Link} from "react-router-dom";
export const SideNav=()=>
{
    return (<div className="Side_navbar">
       
        <div className="side_nav">
        <div><Link className="black_link" to="/programming">Programming</Link></div>
        <div><Link  className=" black_link" to="/dsa">Dsa</Link></div>
        <div><Link className= "black_link" to="/English">English</Link></div>

        </div>
    </div>);
}