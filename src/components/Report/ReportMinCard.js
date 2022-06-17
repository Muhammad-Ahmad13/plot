import React from 'react';
import "./ReportMinCard.css";
const ReportMinCard = (props) => {
  return (
    <div className="minCard">
        <h3>
            {props.minhead}
        </h3>
        <p>
            {props.minpara}
        </p>
    </div>
  );
}
export default ReportMinCard;