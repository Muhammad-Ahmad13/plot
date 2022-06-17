import React from 'react';
import "./Miss1Card.css";
const Miss1Card = (props) => {
  return (
    <div className="miss1cardmain">
        <div className="miss1cardimg">
            <img src={props.miss1image} alt="missingimage"/>
        </div>
        <h5>
            {props.miss1imagehead}
        </h5>
    </div>
  );
}
export default Miss1Card;