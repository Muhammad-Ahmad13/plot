import React from "react";
import "./BestPlatform.css";
import marker from "../../../assets/images/marked.png";
const BestPlatform = () =>{
    return(
        <div className="best-main">
            <div className="best-content">
                <div className="best-image">
                    <img src={marker}/>
                </div>
                <h4>
                    Succes
                </h4>
            </div>
            <p>
                Ruim 70% van onze gebruikers vindt binnen 8 weken een huurwoning of koopwoning.
            </p>
        </div>
    );
}
export default BestPlatform;