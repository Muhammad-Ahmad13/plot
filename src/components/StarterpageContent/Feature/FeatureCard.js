import React from "react";
import "./FeatureCard.css";
const FeatureCard=(props)=>{
    return(
        <div className="feature-mian">
            <div className="feature-content">
                <div className="feature-icon">
                    <img src={props.ficon} alt="feature-img"/>
                </div>
                <h3>{props.data}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default FeatureCard;