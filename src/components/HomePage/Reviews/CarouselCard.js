import React from "react";
import "./CarouselCard.css";
const CarouselCard = (props) =>{
    return(
        <div className="carous-card-main">
            <p>
                {props.carousPara}
            </p>
            <div className="carous-content">
                <div className="carous-image">
                    <img src={props.carousImage} alt="carousimage"/>
                </div>
                <div className="carous-des">
                    <h3>
                        {props.carousHeading}
                    </h3>
                    <div className="carous-anc">
                        <a href={props.addressdata}>{props.carousAnchorText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarouselCard;