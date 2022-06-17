import React from 'react';
import "./RcontentCard.css";
const RcontentCard = (props) => {
  return (
    <div className="contentstyle">
        <h4>
            {props.Cstylehead}
        </h4>
        <p>
            {props.Cstylepara}
        </p>
    </div>
  );
}
export default RcontentCard;