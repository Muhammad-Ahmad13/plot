import React from "react";
import "./Kunnen.css"
const Kunnen = (props) =>{
    return(
        <div className="kunnen-sec">
            <h4>
                {props.kunHead}
            </h4>
            <p>
               {props.kunPara}
            </p>
        </div>
    );
}
export default Kunnen;