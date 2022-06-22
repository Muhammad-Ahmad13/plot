import React from 'react';
import { Link } from 'react-router-dom';
import "./WalterComp.css";
const WalterComp = (props) =>{
  return (
    <div className="waltercomp text-center">
        <h6>
            {props.walterhead}
        </h6>
        <h3>
            {props.walterheadmain}
        </h3>
        <p>
            {props.walterpara}
        </p>
        <p>
            {props.walterpara1}
        </p>
        <div className="waltercompanc">
            <Link to={props.waltercompaddress}>{props.walterlink}</Link>
        </div>
    </div>
  )
}

export default WalterComp;