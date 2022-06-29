import React from "react";
import "./AccessContent.css";
import { Link } from "react-router-dom";
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
                    <Link to={props.anchorAddress}>{props.textAnchor}</Link>
                </div>
            </div>
        </div>
    );
}
export default AccessContent;