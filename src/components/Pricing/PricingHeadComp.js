import React from 'react';
import "./PricingHeadComp.css";
const PricingHeadComp =(props) => {
  return (
    <div className="headheading">
        <h2>
            {props.pricHead}
        </h2>
        <p>
            {props.pricpara}
        </p>
    </div>
  );
}
export default PricingHeadComp;