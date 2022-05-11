import React from "react";
import "./WorthyCard.css";
const WorthyCard=(props)=>{
    return(
        <div className="WorthyCard-mian">
            <div className="WorthyCard-content">
                <h6>{props.data}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default WorthyCard;