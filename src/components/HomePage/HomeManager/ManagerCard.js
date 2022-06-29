import React from "react";
import "./ManagerCard.css";
const ManagerCard= (props) =>{
    return(
        <div className="manager-main">
            <div className="manager-image">
                <img src={props.manageImage} alt="manage-image"/>
            </div>
            {/* <p>
               {props.managerPara} 
            </p> */}
        </div>
    );
}
export default ManagerCard;