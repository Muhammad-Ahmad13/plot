import React from 'react';
import "./ReportECard.css";
import { Link } from 'react-router-dom';

const ReportECard = (props) => {
  return (
    <div className="Ecardmain">
        <h4>
            {props.Ehead}
        </h4>
        <p>
            {props.Epara}
        </p>
        <p>
            {props.Epara1}
        </p>
        <div className="Eanc">
            <Link to ="#">{props.Eanc}</Link>
        </div>
    </div>
  );
}

export default ReportECard;