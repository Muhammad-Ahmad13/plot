import React from 'react';
import "./RentalHeader.css";
import rentalImage from "../../assets/images/rentalangle.png";

const RentalHeader = () => {
  return (
    <div className="rentalheadmain">
        <div className="container">
            <div className="rentalheadcontent">
                <p>
                   Waarom zelf zoeken naar een huurwoning als je ons het zware werk kan laten doen?
                </p>
                <div className="rentalImage rentalabs1">
                    <img src={rentalImage} alt="rentalImage"/>
                </div>
                <div className="rentalImage rentalabs2">
                    <img src={rentalImage} alt="rentalImage"/>
                </div>
            </div>
        </div> 
    </div>
  )
}
export default RentalHeader;