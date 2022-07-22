import React from 'react';
import "./MessageCard.css";
const MessageCard = (props) => {
  return (
    <div className='mess-main'>
        <p>
            {props.mess}
        </p>
    </div>
  )
}
export default MessageCard