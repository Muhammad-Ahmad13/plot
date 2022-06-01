import React from 'react';
import "./WorkStarterCard.css";
const WorkStarterCard = (props) => {
  return (
    <div className="workcard-main">
        <h3>{props.workHead}</h3>
        <div className="workcard-image">
          <img src={props.workPic} alt="workcard"/>
        </div>
        <p>
          {props.workPara}
        </p>
    </div>
  )
}
export default WorkStarterCard;