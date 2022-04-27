import React from "react";
import "./PlotThere.css";
import videoicon from "../../../assets/images/video.png";
const PlotThere=()=>{
    return(
        <div className="plot-main">
            <div className="container">
            <div className="plot-content">
            <h4>
               PLOTCORE is er voor de starters
           </h4>
           <p>
               Plotcore kijkt naar uw wensen en eisen voor een woning en uw maximale hypotheek / maximale huurbudget om dagelijks door alle woningen door heel Nederland
               te zoeken en u hierven op de hoogte te stellen.  
           </p>
            </div>
            <div className="plot-video">
                <img src={videoicon} alt="video-icon"/>
            </div>
            </div>
        </div>
    );
}
export default PlotThere;