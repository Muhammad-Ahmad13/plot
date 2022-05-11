import React from "react";
import "./WerktCard.css";
const WerktCard=(props)=>{
    return(
        <div className="werkt-main">
            <div className="werkt-icon">
                <img src={props.icon}/>
            </div>
            <h6>
                {props.head}
            </h6>
            <p>
                {props.detail}
            </p>
            <div className="explore-anc">
                <a href="#">{props.anchor}</a>
            </div>
        </div>
    );
}
export default WerktCard;