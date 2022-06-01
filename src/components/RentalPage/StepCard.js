import React from 'react';
import "./StepCard.css";
const StepCard = (props) => {
  return (
    <div className="stepmain">
        <h2>{props.stephead}</h2>
        <p>{props.steppara}</p>
    </div>
  )
}
export default StepCard;