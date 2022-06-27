import React from 'react';
import "./PrivacyContent.css";
const PrivacyHead = (props)=> {
  return (
    <div className="privacyHead">
        <h4>
            {props.PrivHead}
        </h4>
    </div>
  );
}
export default PrivacyHead;