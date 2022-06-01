import React from 'react';
import "./TimeCards.css";
const TimeCards = (props) => {
  return (
    <div className="timecardmain">
        <div className="timeimage">
            <img src={props.timeImage}/>
        </div>
        <p>
            {props.timePara}
        </p>

    </div>
  )
}

export default TimeCards;