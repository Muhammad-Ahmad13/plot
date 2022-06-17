import React from 'react';
import { Link } from 'react-router-dom';
import "./Tservicecard.css";
const Tservicecard = (props) => {
  return (
    <div className="servicecardmain">
        <h4>
            {props.scardhead}
        </h4>
        <div className="servicecardcontent">
            <div className="servicecardimage">
                <img src={props.scardimage}/>
            </div>
            <h5>
                {props.scardpara}
            </h5>
            <p>
                {props.scardpara1} 
            </p>
            <p>
                {props.scardpara2} 
            </p>
            <div className="servicecardanc1">
                <Link to="#">{props.ancCard1}</Link>
            </div>
        </div>
    </div>
  );
}
export default Tservicecard;