import React from 'react';
import "./FactCards.css";
const FactCards = (props) => {
  return (
    <div className="factcardmain">
        <span>
            {props.factnum}
        </span>
        <h3>
            {props.facthead}
        </h3>
        <p>
            {props.factpara}
        </p>
    </div>
  );
}
export default FactCards;