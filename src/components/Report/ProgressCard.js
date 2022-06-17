import React from 'react';
import "./ProgressCard.css";
const ProgressCard = (props) => {
  return (
    <div className="progressCard">
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width:"30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progresscontentd">
            <p>
                {props.progname}
            </p>
            <h3>
                {props.progvalue}
            </h3>
        </div>
    </div>
  );
}
export default ProgressCard;