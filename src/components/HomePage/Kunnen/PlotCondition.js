import React from "react";
import "./PlotCondition.css";
const PlotCondition = (props) =>{
    return(
        <div className="condition-main">
            <div className="condition-sec">
                <div className="condition-image">
                    <img src={props.conditionImage}/>
                </div>
                <div className="condition-content">
                    <h3>
                        {props.conditionHeading}
                    </h3>
                    <p>
                        {props.conditionPara}
                    </p>
                    <span>
                        {props.conditionprice1}
                    </span>
                    <span>
                        {props.conditionprice2}
                    </span>
                </div>
            </div>
            <div className="condition-bottom-content">
                <h5>
                    {props.bottomHeading}
                </h5>
                <p>
                    {props.bottomPara}
                </p>
            </div>
        </div>
    );
}
export default PlotCondition;