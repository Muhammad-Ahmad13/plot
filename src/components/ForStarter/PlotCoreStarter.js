import React from 'react';
import plotImage from "../../assets/images/plotimage.png";
import "./PlotCoreStarter.css";
const PlotCoreStarter = ()=> {
return ( 
    <div className="plotStartermain">
        <div className="container">
            <div className="plotStarterSec">
                <div className="plotStarterContent1">
                    <p>
                        Plotcore kijkt naar uw wensen en eisen voor een woning en uw maximale hypotheek om dagelijks door alle woningen door
                        heel Nederland te zoeken en u hiervan op de hoogte te stellen.
                    </p>   
                </div>
                <div className="plotStarterContent2">
                    <img src={plotImage} alt="plot-image"></img>
                </div>
            </div>
        </div>
    </div>
    );
}
export default  PlotCoreStarter;