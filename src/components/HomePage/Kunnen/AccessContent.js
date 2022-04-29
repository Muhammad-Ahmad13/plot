import React from "react";
import "./AccessContent.css";
const AccessContent = (props) =>{
    return(
        <div className="content-mian">
            <div className="content-sec">
                <span>{props.textFirst}</span>
                <h5>
                    {props.textHeading}
                </h5>
                <p>
                    {props.textPara}
                </p>
                <div className="content-anc">
                    <a href={props.anchorAddress}>{props.textAnchor}</a>
                </div>
            </div>
        </div>
    );
}
export default AccessContent;