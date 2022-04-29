import React from "react";
import "./KunnenDimension.css";
const KunnenDimension = (props) =>{
    return(
        <div className="dimen-main">
            <div className="dimen-image">
                <img src={props.dimenImage} alt="dimen-image"/>
            </div>
            <div className="dimen-content">
                <h4>
                    {props.dimenHead}
                </h4>
                <p>
                    {props.dimenPara}
                </p>
            </div>
        </div>
    );
}
export default KunnenDimension;