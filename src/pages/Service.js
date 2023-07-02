import React from "react";
import Cardcomponent1 from "./Cardcomponent1";
import CardComponent2 from "./CardComponent2";
const Service=()=>
{
   return <>
  
    <div className="Services">
    <Cardcomponent1></Cardcomponent1>
    <CardComponent2></CardComponent2>
    </div>
    <div className="Contact_us">
        <h3 className="content_formating_cu"> For any doubt or information about the course you can contact us at <b>xyz@gmail.com</b> or call us at <b> 1234567899</b></h3>
    </div>
    </>
}
export default Service;