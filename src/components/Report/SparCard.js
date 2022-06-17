import React from 'react';
import "./SparCard.css";
const SparCard = (props) => {
  return (
    <div className="sparmain">
        <div className="sparimg">
            <img src={props.sparimage} alt = "sparimage"/>
        </div>
        <h4>
            {props.sparhead}
        </h4>
        <p>
            {props.sparpara}
        </p>
    </div>
  );
}
export default SparCard;