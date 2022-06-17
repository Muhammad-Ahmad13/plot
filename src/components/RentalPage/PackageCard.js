import React from 'react';
import { Link } from 'react-router-dom';
import "./PackageCard.css";
const PackageCard = (props) => {
  return (
    <div className="packagecardmain">
        <h3>
            {props.packHead}
        </h3>
        <h4><span>{props.packNum}</span>{props.packdur}</h4>
        <p>
           {props.packPara}
        </p>
        <ul>
            <li>
                <span><img src={props.packImage1}/></span>
                {props.packItem1}
            </li>
            <li>
                <span><img src={props.packImage2}/></span>
                {props.packItem2}
            </li> <li>
                <span><img src={props.packImage3}/></span>
                {props.packItem3}
            </li>
        </ul>
        <div className="packageCardanc text-center">
            <Link to = "">{props.packAnc}</Link>
        </div>
        <div className="packageCardLabel text-center">
            <label>{props.packLab}</label>
        </div>
    </div>
  )
}

export default PackageCard