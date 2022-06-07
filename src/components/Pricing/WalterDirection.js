import React from 'react';
import { Link } from 'react-router-dom';
import dirImage from "../../assets/images/dir-image.png";
import "./WalterDirection.css";

const WalterDirection = () => {
  return (
    <div className="directionmain">
        <div className="container">
            <div className="directionsec">
                <div className="directionimage">
                    <img src={dirImage} alt = "directionimage"/>
                </div>
                <div className="directionContent">
                    <h4>
                        De drie richtingen van Walter hebben onze biedingstrategie helpen bepalen, samen met het opknapbudget.
                    </h4>
                    <span>
                        Sophie
                    </span>
                    <p>
                        kocht haar eerste huis in Amsterdam met hulp van Walter
                    </p>
                    <div className="directionanc">
                        <Link  to="#">Lees haar verhaal</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WalterDirection;