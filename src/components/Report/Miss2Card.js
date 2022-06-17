import React from 'react'
import { Link } from 'react-router-dom';
import "./Miss2Card.css";
const Miss2Card = (props) => {
  return (
    <div className="miss2main">
        <div className="miss2image">
            <img src={props.miss2image} alt ="miss2image"/>
        </div>
        <div className="miss2content">
            <h3>
                {props.miss2head}
            </h3>
            <div className="miss2anc">
                <Link to="">{props.miss2anc}</Link>
            </div>
        </div>
    </div>
  );
}
export default Miss2Card