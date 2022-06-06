import React from 'react';
import { Link } from 'react-router-dom';
import "./SearchContentData.css";

const SearchContentData = (props) => {
  return (
      <>
    <h2 className='headersearch'>{props.pdatahead}</h2>
    <div className="contentdatamain">
        <div className="datamain1">
            <p>{props.pdatapara}</p>
            <div className="dataanc">
                <Link to ="#" >{props.pdataanc}</Link>
            </div>
        </div>
        <div className="datamain2">
            <div className="datamain2content1">
                <span>{props.pnum1}</span>
                <div className="datamain2img">
                    <img src={props.main2img1}/>
                </div>
            </div>
            <div className="datamain2content1">
                <span>{props.pnum2}</span>
                <div className="datamain2img">
                    <img src={props.main2img2}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchContentData