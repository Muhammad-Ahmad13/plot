import React from "react";
import "./TestimonialCard.css"
const TestimonialCard=(props)=>{
    return(
        <div className="test-data">
        <div className="test-main">
            <div className="test-image">
                <img src={props.testimg}/>
            </div>
            <h5>
               {props.testtitle}
            </h5>
            <p>
                {props.testdesp}
            </p>
            <div className="test-icon">
                <img src={props.testicon1}/>
                <img src={props.testicon2}/>
                <img src={props.testicon3}/>
            </div>
        </div>
        </div>
    );
}
export default TestimonialCard;