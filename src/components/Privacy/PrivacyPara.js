import React from 'react';
import "./PrivacyContent.css";
const PrivacyPara = (props)=> {
  return (
    <div className="privacypara">
        <p>
            {props.Privpara}
        </p>
    </div>
  );
}
export default PrivacyPara;